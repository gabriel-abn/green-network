import { Entity } from "@domain/common/entity";
import { UniqueEntityID } from "@domain/common/unique-entity-id";

export interface TestProps {
  id?: UniqueEntityID;
}

export class TestClass extends Entity<TestProps> {
  private constructor(props: TestProps) {
    super(props);
  }

  static create(props: TestProps) {
    return new TestClass({ ...props });
  }
}
