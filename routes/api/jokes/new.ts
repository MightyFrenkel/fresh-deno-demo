import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req) {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/any?type=single&safe-mode",
      {
        method: "get",
      }
    );
    return response;
  },
};
