import { UniqueEntityID } from "@domain/index";
import { randomUUID } from "crypto";

export class UUIDEntity implements UniqueEntityIDGenerator {
  nextID(): UniqueEntityID {
    return new UniqueEntityID(randomUUID());
  }
}
