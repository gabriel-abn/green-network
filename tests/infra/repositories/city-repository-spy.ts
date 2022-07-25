import { CityProps } from "@domain/city";
import { GetCityRepository, IGetCityRepository } from "@domain/protocols/city/get-city-repository";
import { IRegisterCityRepository, RegisterCityRepository } from "@domain/protocols/city/register-city-repository";

export class RegisterCityRepositorySpy implements IRegisterCityRepository {
  params: RegisterCityRepository.Params;
  async insertCity(code: CityProps): Promise<RegisterCityRepository.Result> {
    this.params = code;
    return {
      data: {
        ...this.params,
      },
      message: "Success",
      status: 200,
    };
  }
}

export class GetCityRepositorySpy implements IGetCityRepository {
  getCity(code: GetCityRepository.Params): Promise<GetCityRepository.Result> {
    throw new Error("Method not implemented.");
  }
}
