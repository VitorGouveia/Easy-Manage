"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveItemUseCase = void 0;

class RemoveItemUseCase {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute({
    id
  }) {
    const itemExists = await this.itemRepository.find(id);

    if (!itemExists) {
      throw new Error("The item with this id does not exist.");
    }

    await this.itemRepository.delete(id);
    return {
      message: "Item deleted with success!",
      item: itemExists
    };
  }

}

exports.RemoveItemUseCase = RemoveItemUseCase;