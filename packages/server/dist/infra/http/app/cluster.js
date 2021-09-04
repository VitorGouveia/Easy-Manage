"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusterMode = void 0;

var _cluster = _interopRequireDefault(require("cluster"));

var _os = require("os");

var _process = _interopRequireDefault(require("process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const clusterMode = ({
  app,
  port
}) => {
  const allCPUs = (0, _os.cpus)();

  if (_cluster.default.isPrimary) {
    console.log(`[server]: primary process #${_process.default.pid} is running`); // Fork workers.

    for (let i = 0; i < allCPUs.length; i++) {
      _cluster.default.fork();
    }

    _cluster.default.on('exit', worker => {
      console.log(`[server]: worker #${worker.process.pid} died`);
    });
  } else {
    app.listen(port, () => console.log(`[server]: running on port ${port}`));
  }
};

exports.clusterMode = clusterMode;