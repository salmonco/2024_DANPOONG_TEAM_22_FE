import { RCD } from "@apis/RCDApis/getRCDList";
import { PostAskGPTResponse } from "@apis/RCDApis/postAskGPT";
export type HomeStackParamList = {
    Home: undefined;
    RCDList: {type: 'DAILY' | 'COMFORT'};
    RCDNotice: {item:RCD};
    RCDSelectText:{item:RCD};
    RCDText: {item:RCD,gptRes:PostAskGPTResponse};
    RCDFeedBack: undefined;
    RCDRecord: undefined;
    Splash: undefined;
    Auth:undefined;
    AppTabNav:undefined;
  };