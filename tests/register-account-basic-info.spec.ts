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

class RegisterAccountBasicInfoUseCase {
  execute(
    params: RegisterAccountBasicInfoRequestDTO
  ): RegisterAccountBasicInfoResponseDTO {
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

describe("First step of user register", () => {
  it("should receive correct params and return account info and a status 400", () => {
    const sut = new RegisterAccountBasicInfoUseCase();
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
    const sut = new RegisterAccountBasicInfoUseCase();
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
});
