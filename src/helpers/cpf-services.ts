import { UserProps } from "@domain/user";

type TCPFChekingDTO = {
  check: boolean;
  message: string;
  data?: { name: string; cpf: string; rg: string };
};
interface ICPFCheckerService {
  check(personParams: UserProps): TCPFChekingDTO;
}

export { TCPFChekingDTO, ICPFCheckerService };
