import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Configure public permissions for global content type
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const globalPermissions = await strapi.query('plugin::users-permissions.permission').findMany({
          where: {
            role: publicRole.id,
            action: { $in: ['api::global.global.find', 'api::global.global.findOne'] },
          },
        });

        // If permissions don't exist, create them
        if (globalPermissions.length === 0) {
          await strapi.query('plugin::users-permissions.permission').createMany({
            data: [
              {
                role: publicRole.id,
                action: 'api::global.global.find',
                subject: null,
                properties: {},
                conditions: [],
                fields: [],
              },
              {
                role: publicRole.id,
                action: 'api::global.global.findOne',
                subject: null,
                properties: {},
                conditions: [],
                fields: [],
              },
            ],
          });
          console.log('✅ Public permissions configured for global content type');
        } else {
          console.log('✅ Public permissions already exist for global content type');
        }
      }
    } catch (error) {
      console.error('❌ Error configuring permissions:', error);
    }
  },
};
