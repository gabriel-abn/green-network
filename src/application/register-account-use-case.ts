import { RegisterAccountBasicInfo } from "@application/protocols/register-account";
import { User } from "@domain/user";
import { ICPFCheckerService } from "@helpers/cpf-services";
import { Interactor } from "./common/interactor";
import { Presenter } from "./common/presenter";
import { ApplicationError } from "./errors/application-error";

type RegisterAccountBasicInfoUseCaseParams = {
  presenter: Presenter<RegisterAccountBasicInfo.Params>;
  cpfChecker: ICPFCheckerService;
};

export class RegisterAccountBasicInfoUseCase extends Interactor<
  RegisterAccountBasicInfo.Params,
  RegisterAccountBasicInfo.Result
> {
  private cpfChecker: ICPFCheckerService;
  constructor(params: RegisterAccountBasicInfoUseCaseParams) {
    super(params.presenter);
    this.cpfChecker = params.cpfChecker;
  }
  protected execute(params: RegisterAccountBasicInfo.Params) {
    if (this.cpfChecker.check({ ...params }).message == "Invalid CPF") {
      throw new ApplicationError("invalid_cpf", "Invalid CPF");
    }
    if (this.cpfChecker.check({ ...params }).message == "Invalid RG") {
      throw new ApplicationError("invalid_rg", "Invalid RG");
    }

    const user = User.create({ ...params });
    return {
      data: {
        ...user.props,
      },
      status: 200,
      message: "Basic information registered with success",
    };
  }
}
