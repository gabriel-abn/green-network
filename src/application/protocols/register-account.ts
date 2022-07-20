export namespace RegisterAccountBasicInfo {
  export type Params = {
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
