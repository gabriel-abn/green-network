import { UniqueEntityIDGenerator } from "./id-generator";

export type EntityIDFactory = {
  [entity: string]: UniqueEntityIDGenerator;
};

export class UniqueEntityIDGeneratorFactory {
  private static instance: UniqueEntityIDGeneratorFactory;
  private entityIDFactory: EntityIDFactory;

  private constructor() {}

  public static getInstance() {
    if (!UniqueEntityIDGeneratorFactory.instance) {
      UniqueEntityIDGeneratorFactory.instance = new UniqueEntityIDGeneratorFactory();
    }
    return UniqueEntityIDGeneratorFactory.instance;
  }

  public inicialize(factories: EntityIDFactory) {
    this.entityIDFactory = factories;
  }

  public getIdGeneratorFor(entity?: any): UniqueEntityIDGenerator {
    const className = entity.constructor.className;
    if (!this.entityIDFactory) {
      throw new Error("Entity ID were not inicialized");
    }
    if (this.entityIDFactory[className]) {
      return this.entityIDFactory[className];
    }
    return this.entityIDFactory["default"];
  }
}
