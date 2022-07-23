import { EntityIDFactory, UniqueEntityID, UniqueEntityIDGeneratorFactory, User } from "@domain/index";
import { mockUser } from "@tests/domain/mocks/user-mock";
import { UUIDEntity } from "@tests/infra/mocks/uuid-generator-spy";

// TODO Criar sub-class de Entity para garantir certos comportamentos em comum da classe
// TODO Retirar o mock da classe User

const makeSut = () => {
  const spyID = new UniqueEntityID("any_id");
  const user1 = User.create(
    mockUser({
      id: spyID,
    })
  );
  const user2 = User.create(
    mockUser({
      id: spyID,
    })
  );
  const user3 = User.create(mockUser());

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
