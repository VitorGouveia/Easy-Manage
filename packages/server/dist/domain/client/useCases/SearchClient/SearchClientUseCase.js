"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchClientUseCase = void 0;

class SearchClientUseCase {
  constructor(clientRepository, accessToken) {
    this.clientRepository = clientRepository;
    this.accessToken = accessToken;
  }

  async execute({
    query,
    token
  }) {
    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const clients = await this.clientRepository.search(id, query);
    return {
      message: "Here are your clients.",
      clients
    };
  }

}

exports.SearchClientUseCase = SearchClientUseCase;