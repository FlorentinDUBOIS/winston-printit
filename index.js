// requirements
var printit = require('printit');

/**
 * @class Console
 * @param {{date: boolean, prefix: string}} params parameter for printit directly pass to it
 */
function Console(params) {
  this.logger = printit(params || {});
}

Console.prototype.log = function(level, message) {
  this.logger[level](message);
};

module.exports = Console;
