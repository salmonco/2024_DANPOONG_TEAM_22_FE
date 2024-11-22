import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@stackNav/Auth'

// navigation 인스턴스를 저장할 변수
let navigationRef: any = null

// navigation 참조를 설정하는 함수
export const setNavigator = (nav: any) => {
  navigationRef = nav
}

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor: 모든 요청 전에 토큰을 헤더에 추가
client.interceptors.request.use(async (config) => {
  try {
    const accessToken = await SecureStore.getItemAsync('accessToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  } catch (error) {
    console.error('토큰 가져오기 실패:', error)
    return config
  }
})

// Response Interceptor: API 응답 처리 및 에러 핸들링
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      console.log('error:',error)
      switch (error.response.status) {
        case 401:
          // 인증 에러 처리
          try {
            const refreshToken = await SecureStore.getItemAsync('refreshToken')
            const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/v1/auth/refresh`, {
              refreshToken
            })
            const { accessToken } = response.data
            await SecureStore.setItemAsync('accessToken', accessToken)
            // 새로운 토큰으로 원래 요청 재시도
            const originalRequest = error.config
            originalRequest.headers.Authorization = `Bearer ${accessToken}`
            return axios(originalRequest)
          } catch (refreshError) {
            // 토큰 갱신 실패 시 로그아웃 처리 등
            await SecureStore.deleteItemAsync('accessToken')
            // navigation 참조를 사용하여 리다이렉트
            if (navigationRef) {
              navigationRef.navigate('AuthStackNav')
            }
            throw new Error('[401] 인증이 만료되었습니다. 다시 로그인해주세요.')
          }
        case 404:
          throw new Error('[404] 요청한 리소스를 찾을 수 없습니다.')
        case 500:
          throw new Error('[500] 서버 오류가 발생했습니다.')
        default:
          throw new Error(`[${error.response.status}] 알 수 없는 오류가 발생했습니다.`)
      }
    } else if (error.request) {
      // 네트워크 오류 처리
      throw new Error('네트워크 연결을 확인해주세요.')
    } else {
      throw error
    }
  }
)

export default client
