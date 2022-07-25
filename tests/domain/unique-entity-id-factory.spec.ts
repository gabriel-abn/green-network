import { UniqueEntityIDGenerator } from "@domain/common/id-generator";
import { Entity, EntityIDFactory, UniqueEntityID, UniqueEntityIDGeneratorFactory } from "@domain/index";
import { UUIDEntity } from "@tests/infra/mocks/uuid-generator-spy";

// TODO Garantir que o index da EntityIDFactory seja o nome de uma classe
class UUIDTestEntity implements UniqueEntityIDGenerator {
  nextID(): UniqueEntityID {
    return new UniqueEntityID("test_id");
  }
}

interface TestProps {
  id?: UniqueEntityID;
}

class TestClass extends Entity<TestProps> {
  private constructor(props: TestProps) {
    super(props);
  }

  static create(props: TestProps) {
    return new TestClass({ ...props });
  }
}

describe("Unique entity ID generator Factory", () => {
  it("should not get factory instance not inicialized", () => {
    const factory = UniqueEntityIDGeneratorFactory.getInstance();
    expect(() => {
      const generator = factory.getIdGeneratorFor();
    }).toThrow();
  });
  it("should inicialize factory with default factory name", () => {
    const factory = UniqueEntityIDGeneratorFactory.getInstance();
    const gen: EntityIDFactory = {
      ["default"]: new UUIDEntity(),
    };
    factory.inicialize(gen);
    const generator = factory.getIdGeneratorFor();

    expect(generator).toBeInstanceOf(UUIDEntity);
  });
  it("should make an entity id factory by class's name", () => {
    const factory = UniqueEntityIDGeneratorFactory.getInstance();
    const gen: EntityIDFactory = {
      ["TestClass"]: new UUIDTestEntity(),
    };
    factory.inicialize(gen);
    const test = TestClass.create({});
    console.log(test);
    expect(test).toHaveProperty("_id.value", "test_id");
  });
});
