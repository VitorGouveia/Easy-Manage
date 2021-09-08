import { IOrderRepository } from "@order/repositories"
import { Order } from "@order/entities"
import { AccessTokenProvider } from "@user/providers"

import { Jwt } from "jsonwebtoken"

import { CreateOrderRequestDTO, CreateOrderResponseDTO } from "./CreateOrderDTO"

interface Payload extends Jwt {
  id: string
}

export class CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute(data: CreateOrderRequestDTO): Promise<CreateOrderResponseDTO> {
    const { token, ...orderProps } = data

    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const order = new Order({ userId: id, ...orderProps })

    await this.orderRepository.save(order)

    return {
      message: "We created your order.",
      order
    }
  }
}
