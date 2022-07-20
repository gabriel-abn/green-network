import {
  ICPFCheckerService,
  TCPFChekingDTO,
} from "../../src/helpers/cpf-services";

export class CPFCheckerSpy implements ICPFCheckerService {
  check(personParams: UserProps): TCPFChekingDTO {
    if (personParams.cpf.length != 11) {
      return {
        check: false,
      };
    }
    return {
      check: true,
      data: {
        ...personParams,
      },
    };
  }
}
