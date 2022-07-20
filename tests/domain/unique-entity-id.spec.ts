import { UniqueEntityID } from "@domain/index";

describe("Unique Entity ID generation", () => {
  it("should create unique entity id", () => {
    const id = "any_id";
    const unique = new UniqueEntityID(id);
    expect(unique.toString()).toBe(id);
  });
  it("should return true if two UniqueEntityID are equals", () => {
    const unique1 = new UniqueEntityID("any_id");
    const unique2 = new UniqueEntityID("any_id");
    expect(unique1.equals(unique2)).toBeTruthy();
  });
  it("should not create unique entity id with no id", () => {
    expect(() => {
      const unique = new UniqueEntityID("");
    }).toThrow();
  });
});
