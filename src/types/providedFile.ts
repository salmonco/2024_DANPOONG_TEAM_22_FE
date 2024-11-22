type CommentRequestData = {
  providedFileId: number;
  message: string;
};

type SummaryResponseData = {
  totalListeners: number;
  reactionsNum: {
    THANK_YOU: number;
    HELPFUL: number;
    MOTIVATED: number;
    LOVE: number;
  };
};

type LettersRequestData = {
  parentCategoryId: number;
  pageable: {
    page: number;
    size: number;
    sort: string;
  };
};

type LetterResponseData = {
  providedFileId: number;
  createdAt: string;
  thanksMessage: string;
  alarmType: string;
};

type LettersResponseData = {
  content: LetterResponseData[];
};

export type {
  CommentRequestData,
  SummaryResponseData,
  LettersRequestData,
  LetterResponseData,
  LettersResponseData,
};
