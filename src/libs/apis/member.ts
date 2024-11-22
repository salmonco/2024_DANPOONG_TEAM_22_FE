import client from '@apis/client'
import {
  HelperNumResultResponseData,
  MemberInfoResultResponseData,
  MemberRequestData,
  MemberResultResponseData,
} from '@type/member'

const getHelperNum = async () => {
  const res = await client.get<HelperNumResultResponseData>(
    `/api/v1/member/helper-num`
  )
  return res.data
}

const postMember = async ({
  name,
  gender,
  profileImage,
  role,
  birth,
}: Readonly<MemberRequestData>) => {
  const res = await client.post<MemberResultResponseData>(`/api/v1/member`, {
    name,
    gender,
    profileImage,
    role,
    birth,
  })
  return res.data
}

const getMember = async () => {
  const res = await client.get<MemberInfoResultResponseData>(`/api/v1/member`)
  return res.data
}

export { getHelperNum, postMember, getMember }
