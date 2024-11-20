import { LoginRequestData, LoginResultResponseData } from '@type/auth'
import axios from 'axios'

const postLogin = async ({
  accessToken,
  loginType,
}: Readonly<LoginRequestData>) => {
  const res = await axios.post<LoginResultResponseData>(
    `${process.env.EXPO_PUBLIC_API_URL}/api/v1/auth/login?accessToken=${accessToken}&loginType=${loginType}`
  )
  return res.data
}

export { postLogin }
