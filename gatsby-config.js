/**
 * Register the TypeScript evaluator in gatsby-config
 * Reads default configuration from tsconfig.json
 */
require('ts-node').register();

/**
 * Implement strongly typed gatsby-config
 */
module.exports = require('./gatsby-config.ts');