import { RegisterAccountUseCasePresenter } from "@adapters/register-account/register-user.presenter";
import { RegisterAccountUseCase } from "@application/use-cases/register-account/register-account.interactor";
import {
  EntityIDFactory,
  UniqueEntityIDGeneratorFactory,
} from "@domain/common/id-generator-factory";
import { UserProps } from "@domain/user";
import { CPFCheckerSpy } from "@tests/mocks/cpf-check-service-spy";
import { mockUser } from "@tests/mocks/user-mock";
import { UUIDEntity } from "@tests/mocks/uuid-generator-spy";

const makeSut = (mockConfig?: Partial<UserProps>) => {
  const sutParams = {
    presenter: new RegisterAccountUseCasePresenter(),
    cpfChecker: new CPFCheckerSpy(),
  };
  const sut = new RegisterAccountUseCase({ ...sutParams });
  const mock_user = mockUser(mockConfig);

  return { sut, mock_user };
};

describe("First step of user register", () => {
  beforeAll(() => {
    const factories: EntityIDFactory = {
      ["default"]: new UUIDEntity(),
    };
    UniqueEntityIDGeneratorFactory.getInstance().inicialize(factories);
  });
  it("should receive correct params and return account info and a status 200", async () => {
    const { sut, mock_user } = makeSut();
    const httpResponse = await sut.run({
      ...mock_user,
    });
    expect(httpResponse.data).toEqual({ ...mock_user });
    expect(httpResponse.status).toBe(200);
  });
  it("should not allow users registration with less than 18 years old", async () => {
    const { sut, mock_user } = makeSut({
      birthDate: new Date("2004-09-20"),
    });
    const httpResponse = await sut.run({ ...mock_user });
    expect(httpResponse.error?.name).toBe("invalid_age");
  });
  it("should ensure user's cpf is correct", async () => {
    const { sut, mock_user } = makeSut({
      cpf: "123456789",
    });
    const httpResponse = await sut.run({ ...mock_user });
    expect(httpResponse.message).toBe("Invalid CPF");
  });
  it("should ensure user's rg is correct", async () => {
    const { sut, mock_user } = makeSut({
      rg: "123",
    });
    const httpResponse = await sut.run({ ...mock_user });
    expect(httpResponse.message).toBe("Invalid RG");
  });
  // it("should throw if email is invalid", async () => {
  //   const { sut, mock_user } = makeSut({
  //     email: "invalid_email",
  //   });
  //   expect(async () => {
  //     await sut.run({ ...mock_user });
  //   }).toThrow();
  // });
});
