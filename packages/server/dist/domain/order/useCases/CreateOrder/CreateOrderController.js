"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrderController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class CreateOrderController {
  constructor(createOrderUseCase) {
    this.createOrderUseCase = createOrderUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const data = request.body;
      const caseResponse = await this.createOrderUseCase.execute({
        token,
        ...data
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

exports.CreateOrderController = CreateOrderController;