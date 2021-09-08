"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaUserRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaUserRepository {
  constructor(client) {
    _defineProperty(this, "findById", async id => {
      return await this.client.user.findUnique({
        where: {
          id
        }
      });
    });

    _defineProperty(this, "findByEmail", async email => {
      return await this.client.user.findUnique({
        where: {
          email
        }
      });
    });

    _defineProperty(this, "save", async ({ ...user
    }) => {
      await this.client.user.create({
        data: { ...user
        }
      });
    });

    this.client = client;
  }

}

exports.PrismaUserRepository = PrismaUserRepository;