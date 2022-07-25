import { Interactor } from "@application/common/interactor";
import { Presenter } from "@application/common/presenter";
import { ApplicationError } from "@application/errors/application-error";
import { RegisterAccountDTO } from "@domain/protocols/user/register-account";
import { User } from "@domain/user";
import { ICPFCheckerService } from "@helpers/cpf-services";

type RegisterAccountUseCaseParams = {
  presenter: Presenter<RegisterAccountDTO.Params>;
  cpfChecker: ICPFCheckerService;
};

export class RegisterAccountUseCase extends Interactor<RegisterAccountDTO.Params, RegisterAccountDTO.Response> {
  private cpfChecker: ICPFCheckerService;
  constructor(params: RegisterAccountUseCaseParams) {
    super(params.presenter);
    this.cpfChecker = params.cpfChecker;
  }
  protected execute(params: RegisterAccountDTO.Params) {
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
