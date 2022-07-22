import { EntityIDFactory, UniqueEntityIDGeneratorFactory } from "@domain/index";
import { UUIDEntity } from "@tests/infra/mocks/uuid-generator-spy";

describe("Unique entity ID generator Factory", () => {
  it("should get factory instance not inicialized", () => {
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

    expect(generator.nextID()).toBeTruthy();
  });
});
