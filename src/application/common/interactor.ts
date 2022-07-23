import { ApplicationError } from "@application/errors/application-error";
import { DomainError } from "@domain/errors/domain-error";
import { Presenter } from "./presenter";

export abstract class Interactor<Input, Response> {
  private presenter: Presenter<Response>;
  public abstract execute(execute: Input): Promise<Response>;

  constructor(presenter: any) {
    this.presenter = presenter;
  }

  public async run(input: Input) {
    try {
      const response = await this.execute(input);
      return this.presenter.showSuccess(response);
    } catch (error) {
      if (error instanceof ApplicationError || error instanceof DomainError) {
        return this.presenter.showError(error);
      }
      throw new Error("Unexpected Error");
    }
  }
}
