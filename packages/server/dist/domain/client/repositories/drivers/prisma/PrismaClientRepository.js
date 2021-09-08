"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaClientRepository = void 0;

class PrismaClientRepository {
  constructor(client) {
    this.client = client;
  }

  search = async (userId, query) => {
    return await this.client.client.findMany({
      where: {
        userId,
        name: {
          search: query
        },
        opts: {
          search: query
        }
      }
    });
  };
  find = async id => {
    return await this.client.client.findUnique({
      where: {
        id
      }
    });
  };
  list = async userId => {
    return await this.client.client.findMany({
      where: {
        userId
      }
    });
  };
  update = async (id, { ...client
  }) => {
    return await this.client.client.update({
      where: {
        id
      },
      data: { ...client
      }
    });
  };
  save = async ({ ...rest
  }) => {
    await this.client.client.create({
      data: { ...rest
      }
    });
  };
  delete = async id => {
    await this.client.client.delete({
      where: {
        id
      }
    });
  };
}

exports.PrismaClientRepository = PrismaClientRepository;