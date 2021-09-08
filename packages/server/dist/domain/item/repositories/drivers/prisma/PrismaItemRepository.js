"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaItemRepository = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaItemRepository {
  constructor(client) {
    _defineProperty(this, "save", async item => {
      await this.client.item.create({
        data: { ...item
        }
      });
    });

    this.client = client;
  }

}

exports.PrismaItemRepository = PrismaItemRepository;