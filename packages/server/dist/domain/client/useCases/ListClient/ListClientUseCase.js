"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListClientUseCase = void 0;

class ListClientUseCase {
  constructor(clientRepository, accessToken) {
    this.clientRepository = clientRepository;
    this.accessToken = accessToken;
  }

  async execute({
    token
  }) {
    /* get token information */
    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const clients = await this.clientRepository.list(id);
    return {
      message: "Here are your clients.",
      clients
    };
  }

}

exports.ListClientUseCase = ListClientUseCase;