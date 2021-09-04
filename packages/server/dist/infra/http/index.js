"use strict";

var _app = require("./app/app");

var _routes = require("./app/routes");

var _server = require("./app/server");

var _cluster = require("./app/cluster");

/* separates the app & express configuration in it's own file */

/* separates the router in it's own file */

/* separates the server in it's own file */

/* gives the server function the drivers it needs */
(0, _server.server)({
  app: _app.app,
  router: _routes.router,
  port: Number(process.env.PORT) || 3333,
  cluster: _cluster.clusterMode
});