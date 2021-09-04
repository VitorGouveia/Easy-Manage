"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateClientUseCase = void 0;

class UpdateClientUseCase {
  constructor(clientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute({
    client,
    id
  }) {
    const clientExists = await this.clientRepository.find(id);

    if (!clientExists) {
      throw new Error("The client with this id does not exist.");
    }

    const newClient = {
      id: clientExists.id,
      userId: clientExists.userId,
      ...client
    };
    const updatedClient = await this.clientRepository.update(id, newClient);
    return {
      message: "client updated with success!",
      client: updatedClient
    };
  }

}

exports.UpdateClientUseCase = UpdateClientUseCase;