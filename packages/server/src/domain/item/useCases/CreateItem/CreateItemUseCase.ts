import { IItemRepository } from "@item/repositories"
import { AccessTokenProvider } from "@user/providers"
import { Item } from "@item/entities"

import { Jwt } from "jsonwebtoken"

import { CreateItemRequestDTO, CreateItemResponseDTO } from "./CreateItemDTO"

interface Payload extends Jwt {
  id: string
}

export class CreateItemUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute(data: CreateItemRequestDTO): Promise<CreateItemResponseDTO> {
    const { token, ...itemProps } = data

    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const item = new Item({
      userId: id,
      ...itemProps
    })

    await this.itemRepository.save(item)

    return {
      message: "here is your item.",
      item
    }
  }
}
