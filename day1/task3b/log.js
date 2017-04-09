const dateUtils = require('./date');

const log = (message, data = {}, level = 'log' ) => {
  console[level](dateUtils.now(), message, data);
};
log.debug = (message, options) => log(message, options, 'debug' );
log.warn = (message, options) => log(message, options,  'warn' );
log.error = (message, options) => log(message, options, 'error' );

module.exports = log;
