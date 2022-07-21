import { UniqueEntityID } from "@domain/common/unique-entity-id";

export namespace RegisterAccountBasicInfo {
  export type Params = {
    id?: UniqueEntityID;
    name: string;
    birthDate: Date;
    address: string;
    cpf: string;
    rg: string;
  };

  export type Result = {
    status: number;
    data?: Params;
    message: string;
  };
}
