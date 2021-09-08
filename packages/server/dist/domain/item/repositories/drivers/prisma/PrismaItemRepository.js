"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaItemRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaItemRepository {
  constructor(client) {
    _defineProperty(this, "list", async userId => {
      return await this.client.item.findMany({
        where: {
          userId
        }
      });
    });

    _defineProperty(this, "find", async id => {
      return await this.client.item.findUnique({
        where: {
          id
        }
      });
    });

    _defineProperty(this, "update", async (id, item) => {
      return await this.client.item.update({
        where: {
          id
        },
        data: { ...item
        }
      });
    });

    _defineProperty(this, "save", async item => {
      await this.client.item.create({
        data: { ...item
        }
      });
    });

    _defineProperty(this, "delete", async id => {
      await this.client.item.delete({
        where: {
          id
        }
      });
    });

    this.client = client;
  }

}

exports.PrismaItemRepository = PrismaItemRepository;