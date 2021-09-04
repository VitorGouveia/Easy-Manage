"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class AuthUserController {
  constructor(authUserUseCase) {
    this.authUserUseCase = authUserUseCase;
  }

  async handle(request, response) {
    try {
      let data = request.body;
      const token = request.headers.authorization;
      data = { ...data,
        token
      };
      const caseResponse = await this.authUserUseCase.execute(data);
      response.set("authorization", caseResponse.accessToken);
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

exports.AuthUserController = AuthUserController;