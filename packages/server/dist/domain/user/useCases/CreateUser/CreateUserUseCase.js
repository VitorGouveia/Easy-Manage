"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;

var _entities = require("../../entities");

class CreateUserUseCase {
  constructor(userRepository, accessToken, user) {
    this.userRepository = userRepository;
    this.accessToken = accessToken;
    this.user = user;
  }

  async execute(data) {
    const {
      email
    } = data;
    /* check is user exists */

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User with that e-mail already exists.");
    }
    /* check if email is valid */


    const isValidEmail = this.user.isValidEmail(email);

    if (!isValidEmail) {
      throw new Error("Invalid e-mail.");
    }
    /* create user */


    const user = new _entities.User(data);
    /* save user */

    await this.userRepository.save(user);
    const {
      accessToken
    } = await this.accessToken.execute({
      id: user.id,
      name: user.name,
      email: user.email
    });
    delete user.password;
    return {
      message: "User Created!",
      user,
      accessToken
    };
  }

}

exports.CreateUserUseCase = CreateUserUseCase;