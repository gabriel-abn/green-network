import RegisterCityPresenter from "@adapters/city/register-city.presenter";
import { RegisterCityUseCase } from "@application/use-cases/register-city/register-city.interactor";
import { CityProps } from "@domain/city";
import { ICityCodeService } from "@helpers/ibge-code-validator";
import { mockCity } from "@tests/domain/mocks/city-mock";
import { GetCityRepositorySpy, RegisterCityRepositorySpy } from "@tests/infra/repositories/city-repository-spy";

class IBGEServiceSpy implements ICityCodeService {
  findByCode(code: string): Promise<CityProps> {
    throw new Error("Method not implemented.");
  }
}

const makeSut = () => {
  const sutParams = {
    ibge_service: new IBGEServiceSpy(),
    presenter: new RegisterCityPresenter(),
    registerCityRepository: new RegisterCityRepositorySpy(),
    getCityRepository: new GetCityRepositorySpy(),
  };

  const sut = new RegisterCityUseCase(sutParams);

  return { sut };
};

describe("register city", () => {
  it("should register and return success ", async () => {
    const { sut } = makeSut();
    const mock = mockCity({});
    const response = await sut.execute({ ...mock });
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ ...mock });
  });
  it("should not register if any param is empty", async () => {
    const { sut } = makeSut();
    const mock = mockCity({
      ibgeCode: "",
    });
    const response = await sut.execute({ ...mock });
    expect(response.error?.name).toBe("missing_params");
    expect(response.data).toBe(undefined);
  });
  it("should not register if code is wrong", async () => {
    const { sut } = makeSut();
    const mock = mockCity({});
    const response = await sut.execute({ ...mock });
    expect(response.error?.name).toBe("invalid_city_code");
    expect(response.data).toBe(undefined);
  });
  it("should return false if city already exists", async () => {
    const { sut } = makeSut();
    const mock = mockCity();
    const response = await sut.execute({ ...mock });
    expect(response.error?.name).toBe("city_already_exists");
    expect(response.data).toBe(undefined);
  });
  it("should return false if city's name contains special characters", async () => {
    const { sut } = makeSut();
    const mock = mockCity();
    const response = await sut.run({ ...mock });
    expect(response.error?.name).toBe("invalid_city_code");
    expect(response.data).toBe(undefined);
  });
});
