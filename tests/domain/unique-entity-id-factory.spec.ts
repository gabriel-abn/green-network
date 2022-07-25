import { EntityIDFactory, UniqueEntityIDGeneratorFactory } from "@domain/index";
import { UUIDEntity } from "@tests/infra/mocks/uuid-generator-spy";
import { UUIDTestEntity } from "./mocks/common/uuid-generator-spy";
import { TestClass } from "./mocks/test-mock";

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
