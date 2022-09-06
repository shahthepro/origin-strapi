'use strict';

/**
 * ousd-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ousd-post.ousd-post', {
  only: ['find', 'findOne'],
  config: {
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  }
});

