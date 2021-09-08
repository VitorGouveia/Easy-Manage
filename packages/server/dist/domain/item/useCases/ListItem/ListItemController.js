"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class ListItemController {
  constructor(listItemUseCase) {
    this.listItemUseCase = listItemUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const caseResponse = await this.listItemUseCase.execute({
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

exports.ListItemController = ListItemController;