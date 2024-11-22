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

type HelperNumResponseData = {
  youthMemberNum: number
}

export type {
  Gender,
  HelperNumResponseData,
  MemberInfoResponseData,
  MemberRequestData,
  MemberResponseData,
  Role,
}
