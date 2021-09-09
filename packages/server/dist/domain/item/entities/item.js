"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _uuid = require("uuid");

class Item {
  constructor(props) {
    Object.assign(this, props);
    this.quantity = Number(this.quantity);
    this.price = Number(this.price);
    this.discount = Number(this.discount);
    this.id = (0, _uuid.v4)();
  }

}

exports.Item = Item;