export enum ErrorResponseCode {
  DATA_NOT_EXIST = "DATA_NOT_EXIST",
  ERROR = "ERROR",
}

export enum SuccessResponseCode {
  SUCCESS = "SUCCESS",
}

type SuccessResponse<TData> = {
  code: SuccessResponseCode;
  data: TData;
  message: string;
};

type ErrorResponse = {
  code: ErrorResponseCode;
  data: null;
  message: string;
};

export type APIResponse<TData> = SuccessResponse<TData> | ErrorResponse;
