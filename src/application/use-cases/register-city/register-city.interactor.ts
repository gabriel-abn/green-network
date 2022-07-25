import { Interactor } from "@application/common/interactor";
import { Presenter } from "@application/common/presenter";
import { ApplicationError } from "@application/errors/application-error";
import { IGetCityRepository } from "@application/protocols/get-city-repository";
import { IRegisterCityRepository } from "@application/protocols/register-city-repository";
import { DomainError } from "@domain/errors/domain-error";
import { RegisterCityParams } from "@domain/protocols/city/register-city-use-case.dto";

import { ICityCodeService } from "@helpers/ibge-code-validator";

type RegisterCityUseCaseParams = {
  registerCityRepository: IRegisterCityRepository;
  getCityRepository: IGetCityRepository;
  ibge_service: ICityCodeService;
  presenter: Presenter<RegisterCityParams.Response>;
};

// FIXME Retirar todo tipo de retorno que deve ser responsabilidade do presenter
// TODO Verificar o uso dos serviços e repositórios

export class RegisterCityUseCase extends Interactor<RegisterCityParams.Params, RegisterCityParams.Response> {
  private readonly registerCityRepository: IRegisterCityRepository;
  private readonly getCityRepository: IGetCityRepository;
  private readonly ibge_service: ICityCodeService;

  constructor(params: RegisterCityUseCaseParams) {
    super(params.presenter);
    this.ibge_service = params.ibge_service;
    this.registerCityRepository = params.registerCityRepository;
    this.getCityRepository = params.getCityRepository;
  }

  async execute(execute: RegisterCityParams.Params) {
    if (Object.values(execute).includes("")) {
      throw new ApplicationError("missing_params", "Missing param");
    }
    let insert: boolean;
    try {
      insert = await this.registerCityRepository.insertCity(execute);
      return {
        check: insert,
        info: {
          ...execute,
        },
      };
    } catch (error) {
      if (error instanceof ApplicationError || error instanceof DomainError) {
        throw error;
      }
    }
    return {
      check: false,
    };
  }
}
