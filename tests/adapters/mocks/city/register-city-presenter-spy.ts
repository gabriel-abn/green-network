import { Presenter } from "@application/common/presenter";
import { ResponseModel } from "@application/common/response-model";

export class RegisterCityPresenterSpy implements Presenter<boolean> {
  showSuccess(response: boolean): ResponseModel<boolean> {
    return {
      message: "Success",
      data: true,
      status: 200,
    };
  }
  showError(error: Error): ResponseModel<void> {
    return {
      error: error,
      message: error.message,
      status: 200,
    };
  }
}
