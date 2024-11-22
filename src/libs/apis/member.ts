import client from '@apis/client'
import { HelperNumResultResponseData } from '@type/member'

const getHelperNum = async () => {
  const res = await client.get<HelperNumResultResponseData>(
    `/api/v1/member/helper-num`
  )
  return res.data
}

export { getHelperNum }
