import client from '@apis/client'
import {
  VoiceFileResultResponseData,
  VoiceFilesRequestData,
} from '@type/voiceFile'

const getVoiceFiles = async ({ alarmId }: Readonly<VoiceFilesRequestData>) => {
  const res = await client.get<VoiceFileResultResponseData>(
    `/api/v1/voicefiles?alarm-id=${alarmId}`
  )
  return res.data
}

export { getVoiceFiles }
