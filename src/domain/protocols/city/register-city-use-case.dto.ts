import { CityProps } from "@domain/city";

// TODO Reformular tipo de retorno e parâmetros do caso de uso.

export namespace RegisterCityParams {
  export type Params = CityProps;
  export type Response = {
    check: boolean;
    info?: Partial<CityProps>;
  };
}
