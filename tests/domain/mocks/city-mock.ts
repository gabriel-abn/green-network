import { CityProps } from "@domain/city";
import { UniqueEntityID } from "@domain/common/unique-entity-id";

export const mockCity = (params?: Partial<CityProps>) => {
  return {
    id: params?.id ? params.id : new UniqueEntityID("any_id"),
    name: params?.name ? params.name : "Belo Horizonte",
    state: params?.state ? params.state : "Minas Gerais",
    ibgeCode: params?.ibgeCode ? params.ibgeCode : "3100203",
  };
};
