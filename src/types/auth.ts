type Gender = 'MALE' | 'FEMALE'

type Role = 'ADMIN' | 'YOUTH' | 'HELPER'

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

type MemberRequestData = {
  name: string
  gender: Gender
  profileImage: string
  role: Role
  birth: string
}

type MemberResponseData = { memberId: number }

type MemberResultResponseData = { result: MemberResponseData }

export type {
  Gender,
  Role,
  LoginRequestData,
  LoginResponseData,
  LoginResultResponseData,
  MemberRequestData,
  MemberResponseData,
  MemberResultResponseData,
}
