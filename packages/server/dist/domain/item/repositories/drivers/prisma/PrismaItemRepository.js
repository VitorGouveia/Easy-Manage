"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaItemRepository = void 0;

class PrismaItemRepository {
  constructor(client) {
    this.client = client;
  }

  save = async item => {
    await this.client.item.create({
      data: { ...item
      }
    });
  };
}

exports.PrismaItemRepository = PrismaItemRepository;