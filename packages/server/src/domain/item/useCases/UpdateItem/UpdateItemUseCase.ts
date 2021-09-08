import { AccessTokenProvider } from "@domain/user/providers"
import { IItemRepository } from "@item/repositories"

import { Jwt } from "jsonwebtoken"

import { UpdateItemRequestDTO, UpdateItemResponseDTO } from "./UpdateItemDTO"

interface Payload extends Jwt {
  id: string
}

export class UpdateItemUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute(data: UpdateItemRequestDTO): Promise<UpdateItemResponseDTO> {
    const { token, itemId, ...itemProps } = data

    const authToken = token.split(" ")[1]

    const { id: userId } = this.accessToken.validate(authToken) as Payload

    const item = await this.itemRepository.update(itemId, {
      userId,
      id: itemId,
      ...itemProps
    })

    return {
      message: "here is your updated item",
      item
    }
  }
}
