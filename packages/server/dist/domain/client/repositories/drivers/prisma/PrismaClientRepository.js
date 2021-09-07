"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaClientRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaClientRepository {
  constructor(client) {
    _defineProperty(this, "search", async (userId, query) => {
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
    });

    _defineProperty(this, "find", async id => {
      return await this.client.client.findUnique({
        where: {
          id
        }
      });
    });

    _defineProperty(this, "list", async userId => {
      return await this.client.client.findMany({
        where: {
          userId
        }
      });
    });

    _defineProperty(this, "update", async (id, { ...client
    }) => {
      return await this.client.client.update({
        where: {
          id
        },
        data: { ...client
        }
      });
    });

    _defineProperty(this, "save", async ({ ...rest
    }) => {
      await this.client.client.create({
        data: { ...rest
        }
      });
    });

    _defineProperty(this, "delete", async id => {
      await this.client.client.delete({
        where: {
          id
        }
      });
    });

    this.client = client;
  }

}

exports.PrismaClientRepository = PrismaClientRepository;