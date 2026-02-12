import { getEnv } from "./env.js";
import { buildServer } from "./server.js";

const env = getEnv();
const app = buildServer();

async function start() {
  try {
    await app.listen({ host: env.API_HOST, port: env.API_PORT });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
