'use strict';

/**
 * sla service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sla.sla');
