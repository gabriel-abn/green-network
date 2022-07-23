import { UniqueEntityID } from "./common/unique-entity-id";

export interface CityProps {
  id?: UniqueEntityID;
  name: string;
  state: string;
  ibgeCode: string;
}
