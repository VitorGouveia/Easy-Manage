"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchClientController = void 0;

var _HttpResponse = require("../../../../infra/http/interface/HttpResponse");

class SearchClientController {
  constructor(searchClientUseCase) {
    this.searchClientUseCase = searchClientUseCase;
  }

  async handle(request, response) {
    try {
      const token = request.headers.authorization;
      const query = request.query.query;
      const caseResponse = await this.searchClientUseCase.execute({
        token,
        query: String(query)
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

exports.SearchClientController = SearchClientController;