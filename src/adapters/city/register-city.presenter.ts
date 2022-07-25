import { Presenter } from "@application/common/presenter";
import { ResponseModel } from "@application/common/response-model";
import { RegisterCityParams } from "@domain/protocols/city/register-city-use-case.dto";

export class RegisterCityPresenter implements Presenter<RegisterCityParams.Response> {
  showSuccess(response: RegisterCityParams.Response): ResponseModel<RegisterCityParams.Response> {
    return {
      message: "Success",
      status: 200,
      data: {
        ...response,
      },
    };
  }
  showError(error: Error): ResponseModel<void> {
    throw new Error("Method not implemented.");
  }
}
