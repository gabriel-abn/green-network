import { UniqueEntityID } from "@domain/common/unique-entity-id";
import { randomUUID } from "crypto";

interface UniqueEntityIDGenerator {
  nextID(): UniqueEntityID;
}

export class UUIDEntity implements UniqueEntityIDGenerator {
  nextID(): UniqueEntityID {
    return new UniqueEntityID(randomUUID());
  }
}

type EntityIDFactory = {
  [entity: string]: UniqueEntityIDGenerator;
};

class UniqueEntityIDGeneratorFactory {
  private static instance: UniqueEntityIDGeneratorFactory;
  private entityIDFactory: EntityIDFactory;

  private constructor() {}

  public static getInstance() {
    if (!UniqueEntityIDGeneratorFactory.instance) {
      UniqueEntityIDGeneratorFactory.instance =
        new UniqueEntityIDGeneratorFactory();
    }
    return UniqueEntityIDGeneratorFactory.instance;
  }

  public inicialize(factories: EntityIDFactory) {
    this.entityIDFactory = factories;
  }

  public getIdGeneratorFor(entity?: any): UniqueEntityIDGenerator {
    const className = "test";
    if (!this.entityIDFactory) {
      throw new Error("Entity ID were not inicialized");
    }
    if (this.entityIDFactory[className]) {
      return this.entityIDFactory[className];
    }
    return this.entityIDFactory["default"];
  }
}

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
