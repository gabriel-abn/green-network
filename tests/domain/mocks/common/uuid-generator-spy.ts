import { UniqueEntityIDGenerator } from "@domain/common/id-generator";
import { UniqueEntityID } from "@domain/common/unique-entity-id";

export class UUIDTestEntity implements UniqueEntityIDGenerator {
  nextID(): UniqueEntityID {
    return new UniqueEntityID("test_id");
  }
}
