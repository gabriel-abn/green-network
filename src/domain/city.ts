import { Entity } from "./common/entity";
import { UniqueEntityID } from "./common/unique-entity-id";

export interface CityProps {
  id?: UniqueEntityID;
  name: string;
  state: string;
  ibgeCode: string;
}

export class City extends Entity<CityProps> {
  private constructor(props: CityProps) {
    super(props);
  }

  static create(props: CityProps) {
    return new City(props);
  }
}
