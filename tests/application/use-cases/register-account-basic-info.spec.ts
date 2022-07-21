import { RegisterAccountBasicInfoUseCase } from "@application/register-account-use-case";
import {
  EntityIDFactory,
  UniqueEntityIDGeneratorFactory,
} from "@domain/common/id-generator-factory";
import { RegisterAccountUseCasePresenter } from "@tests/adapters/mocks/register-user-presenter-spy";
import { CPFCheckerSpy } from "@tests/mocks/cpf-check-service-spy";
import { UUIDEntity } from "@tests/mocks/uuid-generator-spy";

const makeSut = () => {
  const sutParams = {
    presenter: new RegisterAccountUseCasePresenter(),
    cpfChecker: new CPFCheckerSpy(),
  };
  const sut = new RegisterAccountBasicInfoUseCase({ ...sutParams });
  // const mock = {
  //   name: "Gabriel Antonio",
  //   birthDate: new Date("2000-09-20"),
  //   address: "Rua Francisco Teles, 41, Alvorada",
  //   cpf: "12345678900",
  //   rg: "12345678",
  // };

  return { sut };
};

describe("First step of user register", () => {
  beforeAll(() => {
    const factories: EntityIDFactory = {
      ["default"]: new UUIDEntity(),
    };
    UniqueEntityIDGeneratorFactory.getInstance().inicialize(factories);
  });
  it("should receive correct params and return account info and a status 200", async () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2000-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "12345678",
    };
    const httpResponse = await sut.run({
      ...request,
    });
    expect(httpResponse.data).toEqual({ ...request });
    expect(httpResponse.status).toBe(200);
  });
  it("should not allow users registration with less than 18 years old", async () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2004-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "12345678",
    };
    const httpResponse = await sut.run({ ...request });
    expect(httpResponse.error?.name).toBe("invalid_age");
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
    const httpResponse = await sut.run({ ...request });
    expect(httpResponse.message).toBe("Invalid CPF");
  });
  it("should ensure user's rg is correct", async () => {
    const { sut } = makeSut();
    const request = {
      name: "Gabriel Antonio",
      birthDate: new Date("2000-09-20"),
      address: "Rua Francisco Teles, 41, Alvorada",
      cpf: "12345678900",
      rg: "1234",
    };
    const httpResponse = await sut.run({ ...request });
    expect(httpResponse.message).toBe("Invalid RG");
  });
});
