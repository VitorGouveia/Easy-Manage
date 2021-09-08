"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveItemController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class RemoveItemController {
  constructor(removeItemUseCase) {
    this.removeItemUseCase = removeItemUseCase;
  }

  async handle(request, response) {
    try {
      const id = request.params.itemId;
      const caseResponse = await this.removeItemUseCase.execute({
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

exports.RemoveItemController = RemoveItemController;