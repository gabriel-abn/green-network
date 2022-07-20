import { Identifier } from "./identifier";

export class UniqueEntityID extends Identifier {
  constructor(id: string) {
    if (!id) {
      throw new Error(
        "Unable to create unique entity id: must have a non null value"
      );
    }
    super(id);
  }
}
