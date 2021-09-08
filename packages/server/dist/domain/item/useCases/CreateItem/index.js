"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createItemController = void 0;

var _CreateItemUseCase = require("./CreateItemUseCase");

var _CreateItemController = require("./CreateItemController");

var _providers = require("../../../user/providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const accessTokenProvider = new _providers.AccessTokenProvider();
const itemRepository = new _prisma.PrismaItemRepository(_prisma2.prisma);
const createItemUseCase = new _CreateItemUseCase.CreateItemUseCase(itemRepository, accessTokenProvider);
const createItemController = new _CreateItemController.CreateItemController(createItemUseCase);
exports.createItemController = createItemController;