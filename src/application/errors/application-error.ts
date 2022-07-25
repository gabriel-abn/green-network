export class ApplicationError extends Error {
  constructor(name: string, error: string) {
    super();
    this.name = "Application error: " + name;
    this.message = error;
  }
}
