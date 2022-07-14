type RegisterAccountBasicInfoRequestDTO = {
  name: string;
  birthDate: string;
  address: string;
  cpf: string;
  rg: string;
};

class RegisterAccountBasicInfoUseCase {
  execute(params: RegisterAccountBasicInfoRequestDTO) {
    return {
      data: {
        ...params,
      },
      status: 200,
    };
  }
}

describe("First step of user register", () => {
  it("should receive correct params and return account info and a status os true", () => {
    const sut = new RegisterAccountBasicInfoUseCase();
    const request = {
      name: "Gabriel Antonio",
      birthDate: "20/09/2000",
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "12345678",
    };
    const httpResponse = sut.execute({
      ...request,
    });
    expect(httpResponse.data).toEqual(request);
    expect(httpResponse.status).toBe(200);
  });
});
