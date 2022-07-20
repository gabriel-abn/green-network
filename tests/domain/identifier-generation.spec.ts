const isIdentifier = (id: any): id is Identifier => {
  return id instanceof Identifier;
};

class Identifier {
  constructor(private value: string) {}

  public equals(id?: Identifier) {
    if (!id || !isIdentifier(id)) {
      return false;
    }
    return true;
  }
  public toString() {
    return this.value;
  }
}

describe("Generating unique entity identifiers", () => {
  it("should generate a string identifier", () => {
    const ident = new Identifier("any_id");
    expect(ident.toString()).toBe("any_id");
  });
  it("should return true if identifier is instance of class Identifier", () => {
    const ident = new Identifier("any_id");
    expect(isIdentifier(ident)).toBe(true);
  });
  it("should return true if two identifiers are equals", () => {
    const ident = new Identifier("any_id");
    const ident2 = new Identifier("any_id");
    expect(ident.equals(ident2)).toBe(true);
  });
});
