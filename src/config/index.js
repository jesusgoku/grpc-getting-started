export default {
    app: {
        port: process.env.PORT || 9111,
    },
    db: {
      path: process.env.DB_PATH || 'mongodb://localhost:27017/test',
    },
};
