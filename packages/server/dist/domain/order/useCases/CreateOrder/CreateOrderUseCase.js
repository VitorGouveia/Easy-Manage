"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrderUseCase = void 0;

var _entities = require("../../entities");

class CreateOrderUseCase {
  constructor(orderRepository, accessToken) {
    this.orderRepository = orderRepository;
    this.accessToken = accessToken;
  }

  async execute(data) {
    const {
      token,
      ...orderProps
    } = data;
    const authToken = token.split(" ")[1];
    const {
      id
    } = this.accessToken.validate(authToken);
    const order = new _entities.Order({
      userId: id,
      ...orderProps
    });
    await this.orderRepository.save(order);
    return {
      message: "We created your order.",
      order
    };
  }

}

exports.CreateOrderUseCase = CreateOrderUseCase;