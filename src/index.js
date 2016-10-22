import printit from 'printit';

/**
 * class Console based on printit
 * @class Console
 */
class Console {

  /**
   * constructor of the Console object
   * @constructor
   * @param {{date: boolean, prefix: string}} params parameters pass to printit
   */
  constructor(params) {
    this.logger = printit(params || {});
  }

  /**
   * log function
   * @param {string} level level of the log
   * @param {string} message description of the message
   */
  log(level, message) {
    this.logger[level](message);
  }
}

module.exports = Console;
