"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismasRefreshTokenRepository = void 0;

class PrismasRefreshTokenRepository {
  constructor(client) {
    this.client = client;
  }

  create = async ({ ...refreshToken
  }) => {
    return await this.client.refreshToken.create({
      data: { ...refreshToken
      }
    });
  };
  find = async id => {
    return await this.client.refreshToken.findUnique({
      where: {
        id
      }
    });
  };
  clean = async userId => {
    await this.client.refreshToken.deleteMany({
      where: {
        userId
      }
    });
  };
}

exports.PrismasRefreshTokenRepository = PrismasRefreshTokenRepository;