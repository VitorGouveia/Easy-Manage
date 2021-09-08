"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateItemController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class UpdateItemController {
  constructor(updateItemUseCase) {
    this.updateItemUseCase = updateItemUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const itemId = request.params.itemId;
      const item = request.body;
      const caseResponse = await this.updateItemUseCase.execute({
        token,
        itemId,
        ...item
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

exports.UpdateItemController = UpdateItemController;