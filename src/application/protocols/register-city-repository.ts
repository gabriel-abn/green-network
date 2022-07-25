import { CityProps } from "@domain/city";
import { RegisterCityParams } from "./register-city-dto";

export interface IRegisterCityRepository {
  insertCity(code: RegisterCityRepository.Params): Promise<RegisterCityRepository.Result>;
}

export namespace RegisterCityRepository {
  export type Params = RegisterCityParams.Params;
  export type Result = {
    process: boolean;
    data?: Partial<CityProps>;
    error?: {
      name: string;
      message: string;
    };
  };
}
