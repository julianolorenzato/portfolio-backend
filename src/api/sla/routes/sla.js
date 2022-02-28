'use strict';

/**
 * sla router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sla.sla');
