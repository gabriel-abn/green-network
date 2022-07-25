export class DomainError extends Error {
  constructor(message: string, name: string) {
    super();
    this.message = message;
    this.name = name;
  }
}
