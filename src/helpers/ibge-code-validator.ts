import { CityProps } from "@domain/city";

export interface ICityCodeService {
  findByCode(code: string): Promise<CityProps>;
}
