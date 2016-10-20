module.exports = (function() {
  let printit = require('printit');

  function Console(params) {
    this.log = printit(params);
  }

  Console.prototype.log = function(level, message) {
    this.log[level](message);
  };

  return Console;
})();
