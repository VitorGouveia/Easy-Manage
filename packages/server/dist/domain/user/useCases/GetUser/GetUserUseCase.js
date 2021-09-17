"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserUseCase = void 0;

class GetUserUseCase {
  constructor(userRepository, accessToken) {
    this.userRepository = userRepository;
    this.accessToken = accessToken;
  }

  async execute({
    token
  }) {
    const {
      id: userId
    } = this.accessToken.validate(token.split(" ")[1]);
    const userExists = await this.userRepository.findById(userId);

    if (!userExists) {
      throw new Error("Could not find this user.");
    }

    const user = await this.userRepository.getInfo(userId);
    return {
      message: "Here is your user information.",
      user
    };
  }

}

exports.GetUserUseCase = GetUserUseCase;