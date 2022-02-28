module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"])
  }
});
