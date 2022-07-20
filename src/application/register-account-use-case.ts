import { ICPFCheckerService } from "../helpers/cpf-services";

type RegisterAccountBasicInfoRequestDTO = {
  name: string;
  birthDate: Date;
  address: string;
  cpf: string;
  rg: string;
};

type RegisterAccountBasicInfoResponseDTO = {
  status: number;
  data?: RegisterAccountBasicInfoRequestDTO;
  message: string;
};

export class RegisterAccountBasicInfoUseCase {
  constructor(private cpfChecker: ICPFCheckerService) {}
  execute(
    params: RegisterAccountBasicInfoRequestDTO
  ): RegisterAccountBasicInfoResponseDTO {
    if (!this.cpfChecker.check({ ...params }).check) {
      return {
        message: "Invalid CPF",
        status: 400,
      };
    }
    if (this.cpfChecker.check({ ...params }).data?.rg != params.rg) {
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
