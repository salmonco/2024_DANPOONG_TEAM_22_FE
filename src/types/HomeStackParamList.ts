import { RCD } from "@apis/RCDApis/getRCDList";
import { PostAskGPTResponse } from "@apis/RCDApis/postAskGPT";
export type HomeStackParamList = {
    Home: undefined;
    RCDList: {type: 'DAILY' | 'COMFORT'};
    RCDNotice: {item:RCD};
    RCDSelectText:{item:RCD};
    RCDText: {item:RCD,gptRes:PostAskGPTResponse|null,alarmId:number};
    RCDRecord: {item:RCD,gptRes:PostAskGPTResponse|null,alarmId:number,voiceFileId:number,content:string};
    RCDFeedBack: undefined;
  };