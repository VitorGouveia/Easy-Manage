"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrderController = void 0;

var _CreateOrderUseCase = require("./CreateOrderUseCase");

var _CreateOrderController = require("./CreateOrderController");

var _providers = require("../../../user/providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const accessTokenProvider = new _providers.AccessTokenProvider();
const orderRepository = new _prisma.PrismaOrderRepository(_prisma2.prisma);
const createOrderUseCase = new _CreateOrderUseCase.CreateOrderUseCase(orderRepository, accessTokenProvider);
const createOrderController = new _CreateOrderController.CreateOrderController(createOrderUseCase);
exports.createOrderController = createOrderController;