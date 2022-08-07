module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc26575fc7f7ac25495016dd25e972b1'),
  },
});
