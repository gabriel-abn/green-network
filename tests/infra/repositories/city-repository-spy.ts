import { ApplicationError } from "@application/errors/application-error";
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
  params: GetCityRepository.Params;
  async getCity(code: GetCityRepository.Params): Promise<GetCityRepository.Result> {
    this.params = code;
    if (this.params.code == "already_exists") {
      return {
        check: true,
      };
    }
    if (code.code == "ERROR") {
      throw new ApplicationError("internal_error", "Couldn't be able to register city");
    }
    return {
      check: false,
    };
  }
}
