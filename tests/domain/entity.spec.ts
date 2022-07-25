import { EntityIDFactory, isEntity, UniqueEntityID, UniqueEntityIDGeneratorFactory } from "@domain/index";
import { UUIDEntity } from "@tests/infra/mocks/uuid-generator-spy";
import { TestClass } from "./mocks/test-mock";

// TODO Criar sub-class de Entity para garantir certos comportamentos em comum da classe
// TODO Retirar o mock da classe User

const makeSut = () => {
  const spyID = new UniqueEntityID("any_id");
  const baseEntityMock = TestClass.create({
    id: spyID,
  });
  const compareEntityMock = TestClass.create({
    id: spyID,
  });
  const falseCompareEntityMock = TestClass.create({});

  return { baseEntityMock, compareEntityMock, falseCompareEntityMock };
};

describe("Basic entity manipulation using User entity", () => {
  beforeAll(() => {
    const factories: EntityIDFactory = {
      ["default"]: new UUIDEntity(),
    };
    UniqueEntityIDGeneratorFactory.getInstance().inicialize(factories);
  });

  it("should get an instance of an entity", () => {
    const { baseEntityMock } = makeSut();
    expect(isEntity(baseEntityMock)).toBe(true);
  });
  it("should return true if function equals receive itself", () => {
    const { baseEntityMock } = makeSut();
    expect(baseEntityMock.equals(baseEntityMock)).toBe(true);
  });
  it("should return true if function equals receive another instance with same props", () => {
    const { baseEntityMock, compareEntityMock } = makeSut();
    expect(baseEntityMock.equals(compareEntityMock)).toBe(true);
  });
  it("should return false if function equals receive another instance with same props and different ID", () => {
    const { baseEntityMock, falseCompareEntityMock } = makeSut();
    expect(baseEntityMock.equals(falseCompareEntityMock)).toBe(false);
  });
  it("should return false if function equals receive another different instance", () => {
    const { baseEntityMock, falseCompareEntityMock } = makeSut();
    expect(baseEntityMock.equals(falseCompareEntityMock)).toBe(false);
  });
});
