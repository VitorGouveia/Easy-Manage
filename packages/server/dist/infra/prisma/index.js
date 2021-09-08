"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PrismaClient", {
  enumerable: true,
  get: function () {
    return _client.PrismaClient;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return _client.User;
  }
});
Object.defineProperty(exports, "RefreshToken", {
  enumerable: true,
  get: function () {
    return _client.RefreshToken;
  }
});
Object.defineProperty(exports, "Client", {
  enumerable: true,
  get: function () {
    return _client.Client;
  }
});
Object.defineProperty(exports, "Item", {
  enumerable: true,
  get: function () {
    return _client.Item;
  }
});
Object.defineProperty(exports, "Order", {
  enumerable: true,
  get: function () {
    return _client.Order;
  }
});
exports.prisma = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();
exports.prisma = prisma;