import { IClientRepository } from "@client/repositories"

import {
  RemoveClientRequestDTO,
  RemoveClientResponseDTO
} from "./RemoveClientDTO"

export class RemoveClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({
    id
  }: RemoveClientRequestDTO): Promise<RemoveClientResponseDTO> {
    /* check if client exists */
    const clientExists = await this.clientRepository.find(id)

    if (!clientExists) {
      throw new Error("The client with this id does not exist.")
    }

    await this.clientRepository.delete(id)

    return {
      message: "Client deleted with success",
      client: clientExists
    }
  }
}
