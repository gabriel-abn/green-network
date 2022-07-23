import { ResponseModel } from "@application/common/response-model";
import { CityProps } from "@domain/city";

export namespace RegisterCityParams {
  export type Params = CityProps;
  export interface Response extends ResponseModel<Partial<CityProps>> {
    check: boolean;
  }
}
