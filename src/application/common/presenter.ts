import { ResponseModel } from "./response-model";

export interface Presenter<ResponseData> {
  showSuccess(response: ResponseData): ResponseModel<ResponseData>;
  showError(error: Error): ResponseModel<void>;
}
