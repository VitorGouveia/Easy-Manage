"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaItemRepository = void 0;

class PrismaItemRepository {
  constructor(client) {
    this.client = client;
  }

  update = async (id, item) => {
    return await this.client.item.update({
      where: {
        id
      },
      data: { ...item
      }
    });
  };
  save = async item => {
    await this.client.item.create({
      data: { ...item
      }
    });
  };
}

exports.PrismaItemRepository = PrismaItemRepository;