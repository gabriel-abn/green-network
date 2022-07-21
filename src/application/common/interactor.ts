import { ApplicationError } from "@application/errors/application-error";
import { DomainError } from "@domain/errors/domain-error";
import { Presenter } from "./presenter";

export abstract class Interactor<Input, Response> {
  private presenter: Presenter<Input>;
  protected abstract execute(execute: Input): Response;

  constructor(presenter: any) {
    this.presenter = presenter;
  }

  public async run(input: Input) {
    try {
      await this.execute(input);
      return this.presenter.showSuccess(input);
    } catch (error) {
      if (error instanceof ApplicationError || error instanceof DomainError) {
        return this.presenter.showError(error);
      }
      throw new Error("Unexpected Error");
    }
  }
}
