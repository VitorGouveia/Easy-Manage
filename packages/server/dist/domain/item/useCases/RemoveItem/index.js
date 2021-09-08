"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItemController = void 0;

var _RemoveItemUseCase = require("./RemoveItemUseCase");

var _RemoveItemController = require("./RemoveItemController");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const itemRepository = new _prisma.PrismaItemRepository(_prisma2.prisma);
const removeItemUseCase = new _RemoveItemUseCase.RemoveItemUseCase(itemRepository);
const removeItemController = new _RemoveItemController.RemoveItemController(removeItemUseCase);
exports.removeItemController = removeItemController;