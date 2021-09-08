"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateItemUseCase = void 0;

class UpdateItemUseCase {
  constructor(itemRepository, accessToken) {
    this.itemRepository = itemRepository;
    this.accessToken = accessToken;
  }

  async execute(data) {
    const {
      token,
      itemId,
      ...itemProps
    } = data;
    const authToken = token.split(" ")[1];
    const {
      id: userId
    } = this.accessToken.validate(authToken);
    const item = await this.itemRepository.update(itemId, {
      userId,
      id: itemId,
      ...itemProps
    });
    return {
      message: "here is your updated item",
      item
    };
  }

}

exports.UpdateItemUseCase = UpdateItemUseCase;