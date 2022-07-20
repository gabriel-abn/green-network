import { RegisterAccountBasicInfoUseCase } from "../src/application/register-account-use-case";
import { CPFCheckerSpy } from "./mocks/cpf-check-service-spy";

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
