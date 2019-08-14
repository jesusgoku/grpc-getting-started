import grpc from 'grpc';
import mongoose from 'mongoose';
import config from '../config';
import services from './services';

const PORT = config.app.port;
const DB_PATH = config.db.path;

(async () => {
  try {
    await mongoose.connect(DB_PATH, { useNewUrlParser: true });
  } catch (e) {
    console.log({ e });
  }

  const server = new grpc.Server();

  services.forEach(service => server.addService(...service));

  server.bind(
      `0.0.0.0:${PORT}`,
      grpc.ServerCredentials.createInsecure()
  );

  console.log(`Server running at: http://0.0.0.0:${PORT}`);
  server.start();
})();
