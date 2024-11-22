type LoginRequestData = {
  accessToken: string
  loginType: string
}

type LoginResponseData = {
  memberId: number
  accessToken: string
  refreshToken: string
  serviceMember: boolean
}

type LoginResultResponseData = {
  result: LoginResponseData
}

export type { LoginRequestData, LoginResponseData, LoginResultResponseData }
