"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveClientController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class RemoveClientController {
  constructor(removeClientUseCase) {
    this.removeClientUseCase = removeClientUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params.id;
      const caseResponse = await this.removeClientUseCase.execute({
        id
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

exports.RemoveClientController = RemoveClientController;