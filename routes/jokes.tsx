/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { NavBar } from "../components/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import JokeList from "../islands/JokeList.tsx";

export const handler: Handlers<string[] | null> = {
  async GET(_, ctx) {
    const response = await fetch("http://localhost:8000/api/jokes/new");
    if (response.status === 404) {
      return ctx.render(null);
    }
    const json = await response.json();
    const jokes = ["Server sided joke: " + json.joke];
    return ctx.render(jokes);
  },
};

export default function Jokes({ data }: PageProps<string[] | null>) {
  if (!data) {
    return <h1>Joke not found</h1>;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <NavBar />
      <section>
        <p>
          /////////////////////////////////////////////////////////////////////////////////
        </p>
        <p>This part is static html only</p>
        <p>Jokes by https://jokeapi.dev</p>
        <p>{data}</p>
        <p>
          /////////////////////////////////////////////////////////////////////////////////
        </p>

        <JokeList jokes={data} />
      </section>
    </>
  );
}
