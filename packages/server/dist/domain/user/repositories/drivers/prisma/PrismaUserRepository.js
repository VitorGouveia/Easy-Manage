"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaUserRepository = void 0;

class PrismaUserRepository {
  constructor(client) {
    this.client = client;
  }

  findById = async id => {
    return await this.client.user.findUnique({
      where: {
        id
      }
    });
  };
  findByEmail = async email => {
    return await this.client.user.findUnique({
      where: {
        email
      }
    });
  };
  save = async ({ ...user
  }) => {
    await this.client.user.create({
      data: { ...user
      }
    });
  };
}

exports.PrismaUserRepository = PrismaUserRepository;