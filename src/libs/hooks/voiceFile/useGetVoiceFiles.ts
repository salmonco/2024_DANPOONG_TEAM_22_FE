import { getHelperNum } from '@apis/member'
import { getVoiceFiles } from '@apis/voiceFile'
import { useQuery } from '@tanstack/react-query'
import { VoiceFilesRequestData } from '@type/voiceFile'

const useGetVoiceFiles = ({ alarmId }: Readonly<VoiceFilesRequestData>) => {
  return useQuery({
    queryKey: ['helperNum', alarmId],
    queryFn: () => getVoiceFiles({ alarmId }),
  })
}

export default useGetVoiceFiles
