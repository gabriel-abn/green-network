import { RegisterAccountBasicInfo } from "@application/protocols/register-account";
import { ICPFCheckerService } from "@helpers/cpf-services";

export class RegisterAccountBasicInfoUseCase {
  constructor(private cpfChecker: ICPFCheckerService) {}
  execute(
    params: RegisterAccountBasicInfo.Params
  ): RegisterAccountBasicInfo.Result {
    if (this.cpfChecker.check({ ...params }).message == "Invalid CPF") {
      return {
        message: "Invalid CPF",
        status: 400,
      };
    }
    if (this.cpfChecker.check({ ...params }).message == "Invalid RG") {
      return {
        message: "Invalid RG",
        status: 400,
      };
    }

    if (new Date().getFullYear() - params.birthDate.getFullYear() < 21) {
      return {
        message: "Age not allowed",
        status: 400,
      };
    }

    return {
      data: {
        ...params,
      },
      status: 200,
      message: "Basic information registered with success",
    };
  }
}
