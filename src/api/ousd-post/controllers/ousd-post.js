'use strict';

/**
 * ousd-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ousd-post.ousd-post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;

    if (!query.filters) query.filters = {}
    query.filters.slug = slug

    const { results } = await strapi.service('api::ousd-post.ousd-post').find(query);
    const sanitizedEntity = await this.sanitizeOutput(results[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
