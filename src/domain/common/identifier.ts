export const isIdentifier = (id: any): id is Identifier => {
  return id instanceof Identifier;
};

export class Identifier {
  constructor(private value: string) {}

  public equals(id?: Identifier) {
    if (!id || !isIdentifier(id)) {
      return false;
    }
    return this.value == id.toString();
  }
  public toString() {
    return this.value;
  }
}
