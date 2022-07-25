import { DomainError } from "./domain-error";

export class EntityError extends DomainError {
  constructor(errors: string, entity: string) {
    super(`Failed while manipulating ${entity} entity: `, errors);
  }
}
