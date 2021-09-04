"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateClientController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class CreateClientController {
  constructor(createClientUseCase) {
    this.createClientUseCase = createClientUseCase;
  }

  async handle(request, response) {
    try {
      const clientData = request.body;
      const token = request.headers.authorization;
      const data = {
        client: { ...clientData
        },
        token
      };
      const caseResponse = await this.createClientUseCase.execute(data);
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

exports.CreateClientController = CreateClientController;