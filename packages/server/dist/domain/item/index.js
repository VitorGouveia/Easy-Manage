"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = void 0;

var _CreateItem = require("./useCases/CreateItem");

var _UpdateItem = require("./useCases/UpdateItem");

var _RemoveItem = require("./useCases/RemoveItem");

var _ListItem = require("./useCases/ListItem");

const item = {
  create: async (request, response) => {
    return _CreateItem.createItemController.handle(request, response);
  },
  update: async (request, response) => {
    return _UpdateItem.updateItemController.handle(request, response);
  },
  delete: async (request, response) => {
    return _RemoveItem.removeItemController.handle(request, response);
  },
  list: async (request, response) => {
    return _ListItem.listItemControler.handle(request, response);
  }
};
exports.item = item;