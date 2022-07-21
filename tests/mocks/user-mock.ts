import { UniqueEntityID } from "@domain/common/unique-entity-id";
import { UserProps } from "@domain/user";

export const mockUser = (mockConfig?: Partial<UserProps>) => {
  return {
    id: mockConfig?.id ? mockConfig.id : new UniqueEntityID("any_random_id"),
    name: mockConfig?.name ? mockConfig.name : "Gabriel Antonio",
    birthDate: mockConfig?.birthDate
      ? mockConfig?.birthDate
      : new Date("2000-09-20"),
    address: mockConfig?.address
      ? mockConfig.address
      : "Rua Francisco Teles, 41, Alvorada",
    cpf: mockConfig?.cpf ? mockConfig?.cpf : "12345678900",
    rg: mockConfig?.rg ? mockConfig.rg : "12345678",
  };
};
