"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaItemRepository = void 0;

class PrismaItemRepository {
  constructor(client) {
    this.client = client;
  }

  find = async id => {
    return await this.client.item.findUnique({
      where: {
        id
      }
    });
  };
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
  delete = async id => {
    await this.client.item.delete({
      where: {
        id
      }
    });
  };
}

exports.PrismaItemRepository = PrismaItemRepository;