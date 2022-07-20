import { UniqueEntityID } from "./unique-entity-id";

export interface UniqueEntityIDGenerator {
  nextID(): UniqueEntityID;
}
