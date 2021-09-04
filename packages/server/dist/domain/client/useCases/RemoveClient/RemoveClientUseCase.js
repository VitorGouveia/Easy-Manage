"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveClientUseCase = void 0;

class RemoveClientUseCase {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute({
    id
  }) {
    /* check if client exists */
    const clientExists = await this.clientRepository.find(id);

    if (!clientExists) {
      throw new Error("The client with this id does not exist.");
    }

    await this.clientRepository.delete(id);
    return {
      message: "Client deleted with success",
      client: clientExists
    };
  }

}

exports.RemoveClientUseCase = RemoveClientUseCase;