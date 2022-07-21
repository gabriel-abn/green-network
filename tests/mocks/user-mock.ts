import { UserProps } from "@domain/user";

export const mockUser = (mockConfig?: Partial<UserProps>) => {
  return {
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
