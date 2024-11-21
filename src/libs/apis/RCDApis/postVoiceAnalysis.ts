import client from '../client'

interface PostVoiceAnalysisResponse {
  timestamp: string;
  code: string;
  message: string;
  result: string;
}

export const postVoiceAnalysis = async (voiceFileId: number): Promise<PostVoiceAnalysisResponse> => {
  try {
    const response = await client.post<PostVoiceAnalysisResponse>(
      `/api/v1/voicefiles/analysis/${voiceFileId}`
    );
    return response.data;
  } catch (error) {
    console.error('음성 파일 분석 오류:', error);
    throw error;
  }
}
