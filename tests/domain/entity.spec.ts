import {
  EntityIDFactory,
  UniqueEntityID,
  UniqueEntityIDGeneratorFactory,
  User,
} from "@domain/index";
import { UUIDEntity } from "@tests/mocks/uuid-generator-spy";

const makeSut = () => {
  const spyID = new UniqueEntityID("any_id");
  const user1 = User.create({
    id: spyID,
    name: "test_name1",
    birthDate: new Date("2000-09-20"),
    address: "Rua Francisco Teles, 41, Alvorada - address_1",
    cpf: "12345678900_1",
    rg: "12345678_1",
  });
  const user2 = User.create({
    id: spyID,
    name: "test_name1",
    birthDate: new Date("2000-09-20"),
    address: "Rua Francisco Teles, 41, Alvorada - address_1",
    cpf: "12345678900_1",
    rg: "12345678_1",
  });
  const user3 = User.create({
    name: "test_name1",
    birthDate: new Date("2000-09-20"),
    address: "Rua Francisco Teles, 41, Alvorada - address_1",
    cpf: "12345678900_1",
    rg: "12345678_1",
  });

  return { user1, user2, user3 };
};

describe("Basic entity manipulation using User entity", () => {
  beforeAll(() => {
    const factories: EntityIDFactory = {
      ["default"]: new UUIDEntity(),
    };
    UniqueEntityIDGeneratorFactory.getInstance().inicialize(factories);
  });

  it("should get an instance of an entity", () => {
    const { user1 } = makeSut();
    expect(user1).toBeInstanceOf(User);
  });
  it("should return true if function equals self-receive", () => {
    const { user1 } = makeSut();
    expect(user1.equals(user1)).toBe(true);
  });
  it("should return true if function equals receive another instance with same props", () => {
    const { user1, user2 } = makeSut();
    expect(user1.equals(user2)).toBe(true);
  });
  it("should return false if function equals receive another instance with same props and different ID", () => {
    const { user1, user3 } = makeSut();
    expect(user1.equals(user3)).toBe(false);
  });
  it("should return false if function equals receive another different instance", () => {
    const { user1, user3 } = makeSut();
    expect(user1.equals(user3)).toBe(false);
  });
});
