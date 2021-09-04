"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateClientUseCase = void 0;

var _entities = require("../../entities");

class CreateClientUseCase {
  constructor(clientRepository, userRepository, accessToken) {
    this.clientRepository = clientRepository;
    this.userRepository = userRepository;
    this.accessToken = accessToken;
  }

  async execute(data) {
    const {
      client: { ...clientData
      },
      token
    } = data;
    /* get token information */

    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("The id in the token does not point to an existing user.");
    }

    const client = new _entities.Client({ ...clientData,
      userId: user.id
    });
    await this.clientRepository.save(client);
    return {
      message: "Client created with success!",
      client
    };
  }

}

exports.CreateClientUseCase = CreateClientUseCase;