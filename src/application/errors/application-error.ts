export class ApplicationError extends Error {
  constructor(name: string, error: string) {
    super();
    this.name = name;
    this.message = error;
  }
}
