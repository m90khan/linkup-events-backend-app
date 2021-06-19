module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '413ff3b95d2c4ca769b5e7d1e4ddbb23'),
    },
  },
});
