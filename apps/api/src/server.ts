import Fastify from "fastify";

export function buildServer() {
  const app = Fastify({ logger: true });

  app.get("/health", () => {
    return {
      service: "api",
      status: "ok",
    };
  });

  return app;
}
