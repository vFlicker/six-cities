export class HttpError extends Error {
  public httpStatusCode: number;
  public context?: string;

  constructor(httpStatusCode: number, message: string, context?: string) {
    super(message);

    this.httpStatusCode = httpStatusCode;
    this.context = context;
  }
}
