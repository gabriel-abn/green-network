import { UniqueEntityID } from "@domain/common/unique-entity-id";
import { UserProps } from "@domain/user";

export const mockUser = (params?: Partial<UserProps>) => {
  return {
    id: params?.id ? params.id : new UniqueEntityID("any_random_id"),
    name: params?.name ? params.name : "Gabriel Antonio",
    birthDate: params?.birthDate ? params?.birthDate : new Date("2000-09-20"),
    address: params?.address
      ? params.address
      : "Rua Francisco Teles, 41, Alvorada",
    cpf: params?.cpf ? params?.cpf : "12345678900",
    rg: params?.rg ? params.rg : "12345678",
    email: params?.email ? params.email : "gabriel.ab.nascimento@gmail.com",
    password: params?.password ? params.password : "123321",
  };
};
