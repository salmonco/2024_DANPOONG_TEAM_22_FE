type Gender = 'MALE' | 'FEMALE'

type Role = 'ADMIN' | 'YOUTH' | 'HELPER'

type MemberRequestData = {
  name: string
  gender: Gender
  profileImage: string
  role: Role
  birth: string
}

type MemberResponseData = { memberId: number }

type MemberResultResponseData = { result: MemberResponseData }

type MemberInfoResponseData = {
  name: string
  gender: Gender
  profileImage: string
  role: Role
  birth: string
  youthMemberInfoDto: {
    wakeUpTime: string
    sleepTime: string
    breakfast: string
    lunch: string
    dinner: string
  }
}

type MemberInfoResultResponseData = {
  result: MemberInfoResponseData
}

type HelperNumResponseData = {
  youthMemberNum: number
}

type HelperNumResultResponseData = {
  result: HelperNumResponseData
}

export type {
  Gender,
  Role,
  MemberRequestData,
  MemberResponseData,
  MemberResultResponseData,
  MemberInfoResponseData,
  MemberInfoResultResponseData,
  HelperNumResponseData,
  HelperNumResultResponseData,
}
