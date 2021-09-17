"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class GetUserController {
  constructor(getUserUseCase) {
    this.getUserUseCase = getUserUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const caseResponse = await this.getUserUseCase.execute({
        token
      });
      const {
        body,
        statusCode
      } = (0, _HttpResponse.ok)(caseResponse);
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

exports.GetUserController = GetUserController;