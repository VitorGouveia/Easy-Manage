"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshUserTokenController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class RefreshUserTokenController {
  constructor(refreshUserTokenUseCase) {
    this.refreshUserTokenUseCase = refreshUserTokenUseCase;
  }

  async handle(request, response) {
    try {
      const data = request.body;
      const caseReponse = await this.refreshUserTokenUseCase.execute(data);
      response.header("Authorization", caseReponse.accessToken);
      const {
        body,
        statusCode
      } = (0, _HttpResponse.ok)(caseReponse);
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

exports.RefreshUserTokenController = RefreshUserTokenController;