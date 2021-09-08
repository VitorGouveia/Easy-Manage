"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateItemController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class CreateItemController {
  constructor(createItemUseCase) {
    this.createItemUseCase = createItemUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const item = request.body;
      const caseResponse = await this.createItemUseCase.execute({
        token,
        ...item
      });
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

exports.CreateItemController = CreateItemController;