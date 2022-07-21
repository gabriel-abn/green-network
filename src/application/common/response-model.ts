export interface ResponseModel<T> {
  data?: T;
  status: number;
  message: string;
  error?: Error;
}
