import { Presenter } from "@application/common/presenter";
import { ResponseModel } from "@application/common/response-model";
import { RegisterAccountBasicInfo } from "@application/protocols/register-account";

export class RegisterAccountUseCasePresenter
  implements Presenter<RegisterAccountBasicInfo.Params>
{
  showSuccess(
    response: RegisterAccountBasicInfo.Params
  ): ResponseModel<RegisterAccountBasicInfo.Params> {
    return {
      data: {
        ...response,
      },
      message: "Success",
      status: 200,
    };
  }
  showError(error: Error): ResponseModel<void> {
    if (error.name == "invalid_cpf") {
      return {
        message: error.message,
        status: 400,
        error: error,
      };
    }

    if (error.name == "invalid_rg") {
      return {
        message: error.message,
        status: 400,
        error: error,
      };
    }

    if (error.name == "invalid_age") {
      return {
        message: error.message,
        status: 400,
        error: error,
      };
    }

    return {
      message: error.message,
      status: 404,
      error: error,
    };
  }
}
