"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemControler = void 0;

var _ListItemUseCase = require("./ListItemUseCase");

var _ListItemController = require("./ListItemController");

var _providers = require("../../../user/providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const accessTokenProvider = new _providers.AccessTokenProvider();
const itemRepository = new _prisma.PrismaItemRepository(_prisma2.prisma);
const listItemUseCase = new _ListItemUseCase.ListItemUseCase(itemRepository, accessTokenProvider);
const listItemControler = new _ListItemController.ListItemController(listItemUseCase);
exports.listItemControler = listItemControler;