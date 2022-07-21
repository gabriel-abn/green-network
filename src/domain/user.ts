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
  private constructor(props: UserProps) {
    super(props);
  }

  static create(props: UserProps) {
    return new User({ ...props });
  }
}
