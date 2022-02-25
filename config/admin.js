module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '421e949991000a4e64c2835796d377bb'),
  },
});
