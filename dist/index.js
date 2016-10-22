'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _printit = require('printit');

var _printit2 = _interopRequireDefault(_printit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * class Console based on printit
 * @class Console
 */
var Console = function () {

  /**
   * constructor of the Console object
   * @constructor
   * @param {{date: boolean, prefix: string}} params parameters pass to printit
   */
  function Console(params) {
    _classCallCheck(this, Console);

    this.logger = (0, _printit2.default)(params || {});
  }

  /**
   * log function
   * @param {string} level level of the log
   * @param {string} message description of the message
   */


  _createClass(Console, [{
    key: 'log',
    value: function log(level, message) {
      this.logger[level](message);
    }
  }]);

  return Console;
}();

module.exports = Console;