import { Entity } from "./common/entity";
import { UniqueEntityID } from "./common/unique-entity-id";

export type UserProps = {
  id?: UniqueEntityID;
  name: string;
  birthDate: Date;
  address: string;
  cpf: string;
  rg: string;
};

export class User extends Entity<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }
}
