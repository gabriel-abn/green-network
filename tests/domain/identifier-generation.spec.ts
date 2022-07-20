import { Identifier, isIdentifier } from "@domain/common/identifier";

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
