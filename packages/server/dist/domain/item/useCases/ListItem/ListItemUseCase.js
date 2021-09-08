"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemUseCase = void 0;

class ListItemUseCase {
  constructor(itemRepository, accessToken) {
    this.itemRepository = itemRepository;
    this.accessToken = accessToken;
  }

  async execute({
    token
  }) {
    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const items = await this.itemRepository.list(id);
    return {
      message: "Here are your items.",
      items
    };
  }

}

exports.ListItemUseCase = ListItemUseCase;