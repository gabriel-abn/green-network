type TCPFChekingDTO = {
  check: boolean;
  data?: { name: string; cpf: string; rg: string };
};
interface ICPFCheckerService {
  check(personParams: UserProps): TCPFChekingDTO;
}

export { TCPFChekingDTO, ICPFCheckerService };
