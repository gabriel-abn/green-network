import { Entity } from "./common/entity";
import { UniqueEntityID } from "./common/unique-entity-id";
import { DomainError } from "./errors/domain-error";

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
    if (new Date().getFullYear() - props.birthDate.getFullYear() < 21) {
      throw new DomainError("User error", "invalid_age");
    }

    return new User({ ...props });
  }
}
