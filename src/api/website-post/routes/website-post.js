'use strict';

/**
 * website-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::website-post.website-post', {
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
