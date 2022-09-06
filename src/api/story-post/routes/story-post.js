'use strict';

/**
 * story-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::story-post.story-post', {
  only: ['find', 'findOnly'],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOnly: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  }
});

