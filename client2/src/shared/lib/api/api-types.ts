export type ErrorDetail = {
  field: string;
  value: string;
  messages: string[];
};

export type ApiError = {
  type: string;
  message: string;
  details: ErrorDetail[];
};
