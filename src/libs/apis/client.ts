import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const client = axios.create({
  baseURL: 'http://nysams.com:8081/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor: 모든 요청 전에 토큰을 헤더에 추가
client.interceptors.request.use(async (config) => {
  try {
    const authData = await AsyncStorage.getItem('auth-storage')
    if (authData) {
      const parsedData = JSON.parse(authData)
      const accessToken = parsedData.state.accessToken
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
        return config
      }
    }
  } catch (error) {
    console.error('토큰 또는 디바이스 ID 가져오기 실패:', error)
    return config
  }
})

// Response Interceptor: API 응답 처리 및 에러 핸들링
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 인증 에러 처리
          try {
            // 토큰 갱신 로직 추가 예정
            // const newToken = await refreshToken()
            // await AsyncStorage.setItem('auth-storage', JSON.stringify({ state: { accessToken: newToken } }))
            return
          } catch (refreshError) {
            // 토큰 갱신 실패 시 로그아웃 처리 등
            await AsyncStorage.removeItem('auth-storage')
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
