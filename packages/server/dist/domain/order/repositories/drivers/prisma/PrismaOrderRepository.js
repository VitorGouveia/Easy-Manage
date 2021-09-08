"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaOrderRepository = void 0;

class PrismaOrderRepository {
  constructor(client) {
    this.client = client;
  }

  find = async userId => {
    return await this.client.order.findMany({
      where: {
        userId
      }
    });
  };
  save = async order => {
    await this.client.order.create({
      data: { ...order
      }
    });
  };
}

exports.PrismaOrderRepository = PrismaOrderRepository;