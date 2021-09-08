"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = void 0;

var _CreateItem = require("./useCases/CreateItem");

var _UpdateItem = require("./useCases/UpdateItem");

const item = {
  create: async (request, response) => {
    return _CreateItem.createItemController.handle(request, response);
  },
  update: async (request, response) => {
    return _UpdateItem.updateItemController.handle(request, response);
  }
};
exports.item = item;