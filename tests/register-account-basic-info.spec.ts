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

interface ICPFCheckerService {
  check(cpf: string): boolean;
}

class CPFCheckerSpy implements ICPFCheckerService {
  check(cpf: string): boolean {
    if (cpf.length != 11) {
      return false;
    }
    return true;
  }
}

class RegisterAccountBasicInfoUseCase {
  constructor(private cpfChecker: ICPFCheckerService) {}
  execute(
    params: RegisterAccountBasicInfoRequestDTO
  ): RegisterAccountBasicInfoResponseDTO {
    if (!this.cpfChecker.check(params.cpf)) {
      return {
        message: "Invalid CPF",
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

const makeSut = () => {
  const cpfChecker = new CPFCheckerSpy();
  const sut = new RegisterAccountBasicInfoUseCase(cpfChecker);

  return { sut };
};

describe("First step of user register", () => {
  it("should receive correct params and return account info and a status 400", () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2000-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "12345678",
    };
    const httpResponse = sut.execute({
      ...request,
    });
    expect(httpResponse.data).toEqual({ ...request });
    expect(httpResponse.status).toBe(200);
  });
  it("should not allow users registration with less than 18 years old", () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2004-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "12345678",
    };
    const httpResponse = sut.execute({ ...request });
    expect(httpResponse.status).toBe(400);
  });
  it("should ensure user's cpf is correct", async () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2000-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "123456789",
      rg: "12345678",
    };
    const httpResponse = sut.execute({ ...request });
    expect(httpResponse.message).toBe("Invalid CPF");
  });
});
