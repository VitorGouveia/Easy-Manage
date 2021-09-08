"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaOrderRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaOrderRepository {
  constructor(client) {
    _defineProperty(this, "find", async userId => {
      return await this.client.order.findMany({
        where: {
          userId
        }
      });
    });

    _defineProperty(this, "save", async order => {
      await this.client.order.create({
        data: { ...order
        }
      });
    });

    this.client = client;
  }

}

exports.PrismaOrderRepository = PrismaOrderRepository;