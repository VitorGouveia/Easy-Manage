"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessTokenProvider = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _jsonwebtoken = require("jsonwebtoken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AccessTokenProvider {
  accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  async execute(payload) {
    const expiresIn = (0, _dayjs.default)().add(15, "minute").unix();
    const accessToken = (0, _jsonwebtoken.sign)(payload, this.accessTokenSecret, {
      expiresIn
    });
    return {
      accessToken
    };
  }

  validate(token) {
    try {
      const validatedToken = (0, _jsonwebtoken.verify)(token, this.accessTokenSecret);
      return validatedToken;
    } catch (error) {
      throw new Error("This access user account token is not valid.");
    }
  }

}

exports.AccessTokenProvider = AccessTokenProvider;