type VoiceFilesRequestData = {
  alarmId: number
}

type VoiceFileResponseData = {
  voiceFileId: number
  fileUrl: string
  providedFileId: number
}

type VoiceFileResultResponseData = {
  result: VoiceFileResponseData
}

export type {
  VoiceFilesRequestData,
  VoiceFileResponseData,
  VoiceFileResultResponseData,
}
