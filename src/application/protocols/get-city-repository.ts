import { CityProps } from "@domain/city";

export interface IGetCityRepository {
  getCity(code: GetCityRepository.Params): Promise<GetCityRepository.Result>;
}

export namespace GetCityRepository {
  export interface Params {
    code: string;
  }
  export interface Result {
    data?: CityProps;
    check: boolean;
  }
}
