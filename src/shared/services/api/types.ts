export type ApiError = {
  message: string;
  statusCode: number;
};

export type AuthData = {
  email: Email;
  password: string;
};
