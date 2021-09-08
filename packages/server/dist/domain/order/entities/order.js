"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;

var _uuid = require("uuid");

class Order {
  constructor(props) {
    Object.assign(this, props);
    this.id = (0, _uuid.v4)();
  }

}

exports.Order = Order;