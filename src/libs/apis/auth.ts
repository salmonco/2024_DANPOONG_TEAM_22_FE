import { LoginRequestData, LoginResultResponseData } from '@type/auth'
import axios from 'axios'
import getEnvVars from 'environment'

const login = async ({
  accessToken,
  loginType,
}: Readonly<LoginRequestData>) => {
  const res = await axios.post<LoginResultResponseData>(
    `${getEnvVars().apiUrl}/api/v1/auth/login`,
    { accessToken, loginType }
  )
  return res.data
}

export { login }
