import { ResponseModel } from "@application/common/response-model";
import { UserProps } from "@domain/user";

export namespace RegisterAccountDTO {
  export type Params = UserProps;
  export interface Result extends ResponseModel<Partial<Params>> {
    data: Partial<Params>;
  }
}
