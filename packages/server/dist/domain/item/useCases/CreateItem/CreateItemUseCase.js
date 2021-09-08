"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateItemUseCase = void 0;

var _entities = require("../../entities");

class CreateItemUseCase {
  constructor(itemRepository, accessToken) {
    this.itemRepository = itemRepository;
    this.accessToken = accessToken;
  }

  async execute(data) {
    const {
      token,
      ...itemProps
    } = data;
    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const item = new _entities.Item({
      userId: id,
      ...itemProps
    });
    await this.itemRepository.save(item);
    return {
      message: "here is your item.",
      item
    };
  }

}

exports.CreateItemUseCase = CreateItemUseCase;