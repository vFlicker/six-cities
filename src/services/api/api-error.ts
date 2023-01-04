export class ApiError extends Error {
  readonly status: number;

  constructor({ message, status }: { message: string; status: number }) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;
  }
}
