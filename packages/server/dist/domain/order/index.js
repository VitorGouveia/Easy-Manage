"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.order = void 0;

var _CreateOrder = require("./useCases/CreateOrder");

const order = {
  create: async (request, response) => {
    return _CreateOrder.createOrderController.handle(request, response);
  }
};
exports.order = order;