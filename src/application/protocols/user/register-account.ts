import { ResponseModel } from "@application/common/response-model";
import { UserProps } from "@domain/user";

export namespace RegisterAccountDTO {
  export type Params = UserProps;
  export interface Response extends ResponseModel<Partial<UserProps>> {}
}
