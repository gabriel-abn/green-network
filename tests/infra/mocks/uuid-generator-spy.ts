import { UniqueEntityIDGenerator } from "@domain/common/id-generator";
import { UniqueEntityID } from "@domain/common/unique-entity-id";
import { randomUUID } from "crypto";

export class UUIDEntity implements UniqueEntityIDGenerator {
  nextID(): UniqueEntityID {
    return new UniqueEntityID(randomUUID());
  }
}
