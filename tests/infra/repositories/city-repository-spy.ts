import { GetCityRepository, IGetCityRepository } from "@application/protocols/get-city-repository";
import { IRegisterCityRepository, RegisterCityRepository } from "@application/protocols/register-city-repository";
import { CityProps } from "@domain/city";

export class RegisterCityRepositorySpy implements IRegisterCityRepository {
  params: RegisterCityRepository.Params;
  async insertCity(code: CityProps): Promise<RegisterCityRepository.Result> {
    this.params = code;
    return true;
  }
}

export class GetCityRepositorySpy implements IGetCityRepository {
  getCity(code: GetCityRepository.Params): Promise<GetCityRepository.Result> {
    throw new Error("Method not implemented.");
  }
}
