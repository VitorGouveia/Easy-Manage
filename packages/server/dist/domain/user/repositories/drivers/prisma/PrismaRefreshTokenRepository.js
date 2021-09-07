"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismasRefreshTokenRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismasRefreshTokenRepository {
  constructor(client) {
    _defineProperty(this, "create", async ({ ...refreshToken
    }) => {
      return await this.client.refreshToken.create({
        data: { ...refreshToken
        }
      });
    });

    _defineProperty(this, "find", async id => {
      return await this.client.refreshToken.findUnique({
        where: {
          id
        }
      });
    });

    _defineProperty(this, "clean", async userId => {
      await this.client.refreshToken.deleteMany({
        where: {
          userId
        }
      });
    });

    this.client = client;
  }

}

exports.PrismasRefreshTokenRepository = PrismasRefreshTokenRepository;