'use strict';

/**
 * story-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::story-post.story-post');
