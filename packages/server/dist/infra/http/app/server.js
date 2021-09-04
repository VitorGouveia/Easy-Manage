"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var _error = require("../middleware/error");

const server = ({
  port,
  app,
  router,
  cluster
}) => {
  app.use(router);
  app.use(_error.ErrorMiddleware);

  if (cluster) {
    cluster({
      app,
      port: Number(port)
    });
  } else {
    app.listen(port, () => console.log(`[server]: running on port ${port}`));
  }
};

exports.server = server;