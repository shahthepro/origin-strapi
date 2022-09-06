'use strict';

/**
 * website-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-post.website-post');
