import { IItemRepository } from "@item/repositories"
import { AccessTokenProvider } from "@user/providers"

import { Jwt } from "jsonwebtoken"

import { ListItemRequestDTO, ListItemResponseDTO } from "./ListItemDTO"

interface Payload extends Jwt {
  id: string
}

export class ListItemUseCase {
  constructor(
    private itemRepository: IItemRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute({ token }: ListItemRequestDTO): Promise<ListItemResponseDTO> {
    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const items = await this.itemRepository.list(id)

    return {
      message: "Here are your items.",
      items
    }
  }
}
