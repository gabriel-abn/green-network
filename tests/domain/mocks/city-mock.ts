import { UniqueEntityID } from "@domain/common/unique-entity-id";

export const mockCity = () => {
  return {
    id: new UniqueEntityID("randomUUID"),
    name: "Belo Horizonte",
    state: "Minas Gerais",
    ibgeCode: "3100203",
  };
};
