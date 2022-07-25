import { RegisterCityParams } from "@domain/protocols/city/register-city-use-case.dto";

export interface IRegisterCityRepository {
  insertCity(code: RegisterCityRepository.Params): Promise<RegisterCityRepository.Result>;
}

export namespace RegisterCityRepository {
  export type Params = RegisterCityParams.Params;
  export type Result = boolean;
}
