"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateClientController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class UpdateClientController {
  constructor(updateClientUseCase) {
    this.updateClientUseCase = updateClientUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params.id;
      const client = request.body;
      const data = {
        id,
        client
      };
      const caseResponse = await this.updateClientUseCase.execute(data);
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

exports.UpdateClientController = UpdateClientController;