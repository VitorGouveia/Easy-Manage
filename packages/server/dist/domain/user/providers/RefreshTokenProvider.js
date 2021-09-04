"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenProvider = void 0;

var _uuid = require("uuid");

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RefreshTokenProvider {
  constructor(refreshTokenRepository) {
    this.refreshTokenRepository = refreshTokenRepository;
  }

  async execute(userId) {
    const expiresIn = (0, _dayjs.default)().add(7, "days").unix();
    const refreshToken = await this.refreshTokenRepository.create({
      id: (0, _uuid.v4)(),
      userId,
      expiresIn
    });
    return {
      refreshToken
    };
  }

}

exports.RefreshTokenProvider = RefreshTokenProvider;