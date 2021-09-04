"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshUserTokenUseCase = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RefreshUserTokenUseCase {
  constructor(refeshTokenRepository, accessTokenProvider, refreshTokenProvider) {
    this.refeshTokenRepository = refeshTokenRepository;
    this.accessTokenProvider = accessTokenProvider;
    this.refreshTokenProvider = refreshTokenProvider;
  }

  async execute({
    refreshToken: refreshTokenUser
  }) {
    const refreshToken = await this.refeshTokenRepository.find(refreshTokenUser);

    if (!refreshToken) {
      throw new Error("Invalid refresh token!");
    }

    const {
      accessToken
    } = await this.accessTokenProvider.execute({
      id: refreshToken.userId
    });
    const refreshTokenExpired = (0, _dayjs.default)().isAfter(_dayjs.default.unix(refreshToken.expiresIn));

    if (refreshTokenExpired) {
      await this.refeshTokenRepository.clean(refreshToken.userId);
      const {
        refreshToken: newRefreshToken
      } = await this.refreshTokenProvider.execute(refreshToken.userId);
      return {
        message: "Here, take your a new refresh token, you might need it ;)",
        accessToken,
        refreshToken: newRefreshToken
      };
    }

    return {
      message: "here is your token.",
      accessToken
    };
  }

}

exports.RefreshUserTokenUseCase = RefreshUserTokenUseCase;