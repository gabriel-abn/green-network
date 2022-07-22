import { UserProps } from "@domain/user";
import { ICPFCheckerService, TCPFChekingDTO } from "@helpers/cpf-services";

export class CPFCheckerSpy implements ICPFCheckerService {
  check(personParams: UserProps): TCPFChekingDTO {
    if (personParams.cpf.length != 11) {
      return {
        message: "Invalid CPF",
        check: false,
      };
    }
    if (personParams.rg.length != 8) {
      return {
        message: "Invalid RG",
        check: false,
      };
    }
    return {
      check: true,
      message: "Success",
      data: {
        ...personParams,
      },
    };
  }
}
