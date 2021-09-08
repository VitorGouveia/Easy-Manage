import { IItemRepository } from "@item/repositories"

import { RemoveItemRequestDTO, RemoveItemResponseDTO } from "./RemoveItemDTO"

export class RemoveItemUseCase {
  constructor(private itemRepository: IItemRepository) {}

  async execute({ id }: RemoveItemRequestDTO): Promise<RemoveItemResponseDTO> {
    const itemExists = await this.itemRepository.find(id)

    if (!itemExists) {
      throw new Error("The item with this id does not exist.")
    }

    await this.itemRepository.delete(id)

    return {
      message: "Item deleted with success!",
      item: itemExists
    }
  }
}
