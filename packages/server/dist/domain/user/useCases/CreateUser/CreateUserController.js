"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request, response) {
    try {
      const data = request.body;
      const caseResponse = await this.createUserUseCase.execute(data);
      response.header("authorization", caseResponse.accessToken);
      const {
        body,
        statusCode
      } = (0, _HttpResponse.created)(caseResponse);
      return response.status(statusCode).json(body);
    } catch (error) {
      const {
        body,
        statusCode
      } = (0, _HttpResponse.clientError)(error);
      return response.status(statusCode).json(body);
    }
  }

}

exports.CreateUserController = CreateUserController;