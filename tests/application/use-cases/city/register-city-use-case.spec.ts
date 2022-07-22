import { mockCity } from "@tests/domain/mocks/city-mock";

const makeSut = () => {
  const mock = mockCity();
  const sut = new RegisterCityUseCase();

  return { mock, sut };
};

describe("register city", () => {
  it("should register and return success ", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.run({ ...mock });
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ ...mock });
  });
  it("should not register if any param is empty", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.run({ ...mock });
    expect(response.error.name).toBe("missing_params");
    expect(response.name).toBe(undefined);
  });
  it("should not register if code is wrong", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.run({ ...mock });
    expect(response.error.name).toBe("invalid_city_code");
    expect(response.data).toBe(undefined);
  });
  it("should return false if city already exists", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.run({ ...mock });
    expect(response.error.name).toBe("city_already_exists");
    expect(response.data).toBe(undefined);
  });
  it("should return false if city's name contains special characters", async () => {
    const { sut, mock } = makeSut();
    const response = await sut.run({ ...mock });
    expect(response.error.name).toBe("invalid_city_code");
    expect(response.data).toBe(undefined);
  });
});
