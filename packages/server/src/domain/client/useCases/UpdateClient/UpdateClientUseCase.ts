import { IClientRepository } from "@client/repositories"

import {
  UpdateClientRequestDTO,
  UpdateClientResponseDTO
} from "./UpdateClientDTO"

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({
    client,
    id
  }: UpdateClientRequestDTO): Promise<UpdateClientResponseDTO> {
    const clientExists = await this.clientRepository.find(id)

    if (!clientExists) {
      throw new Error("The client with this id does not exist.")
    }

    const newClient = {
      id: clientExists.id,
      userId: clientExists.userId,
      ...client
    }
    const updatedClient = await this.clientRepository.update(id, newClient)

    return {
      message: "client updated with success!",
      client: updatedClient
    }
  }
}
