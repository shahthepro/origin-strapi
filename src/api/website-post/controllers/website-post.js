'use strict';

/**
 * website-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website-post.website-post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;

    if (!query.filters) query.filters = {}
    query.filters.slug = slug

    const { results } = await strapi.service('api::website-post.website-post').find(query);
    const sanitizedEntity = await this.sanitizeOutput(results[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
