module.exports = ({ env }) => ({
    url: env('https://strapi-api-holidaze.herokuapp.com/'),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '6d4335d3dc9ae6d6b9d5fd8e67492842'),
      },
    },
  });