"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = void 0;

var _CreateItem = require("./useCases/CreateItem");

const item = {
  create: async (request, response) => {
    return _CreateItem.createItemController.handle(request, response);
  }
};
exports.item = item;