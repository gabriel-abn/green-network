import { ResponseModel } from "@application/common/response-model";
import { UniqueEntityID } from "@domain/common/unique-entity-id";

export namespace RegisterAccountBasicInfo {
  export interface Params {
    id?: UniqueEntityID;
    name: string;
    birthDate: Date;
    address: string;
    cpf: string;
    rg: string;
  }

  export interface Result extends ResponseModel<Params> {
    status: number;
    data?: Params;
    message: string;
  }
}
