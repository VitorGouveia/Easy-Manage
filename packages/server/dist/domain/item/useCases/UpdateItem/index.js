"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItemController = void 0;

var _UpdateItemUseCase = require("./UpdateItemUseCase");

var _UpdateItemController = require("./UpdateItemController");

var _providers = require("../../../user/providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const accessTokenProvider = new _providers.AccessTokenProvider();
const itemRepository = new _prisma.PrismaItemRepository(_prisma2.prisma);
const updateItemUseCase = new _UpdateItemUseCase.UpdateItemUseCase(itemRepository, accessTokenProvider);
const updateItemController = new _UpdateItemController.UpdateItemController(updateItemUseCase);
exports.updateItemController = updateItemController;