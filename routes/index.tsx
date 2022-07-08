/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { NavBar } from "../components/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <NavBar />
      <section>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1>Welcome to the FreshJS Demo!</h1>
        <p>
          The source code for this demo can be found on{" "}
          <a href="https://github.com/MightyFrenkel/svelte-kit-demo">Github</a>
        </p>
        <h2>This demo contains the following features</h2>
        <ul>
          <li>
            NO prefetching pages by hovering over navbar links (not supported)
          </li>
          <li>Routing pages</li>
          <li>
            Routing endpoints{" "}
            <a href="http://localhost:8000/api/jokes/new">
              http://localhost:8000/api/jokes/new
            </a>
          </li>
          <li>
            Loading jokes at <a href="/jokes">/jokes</a>
          </li>

          <li>
            Server sided rendering on page load, it loads a joke on the server
            before it is send to the client. This way you will even get a joke
            when javascript is turned off.
          </li>
          <li>Adding new jokes to a list and re-render on the client side</li>
        </ul>
      </section>
    </>
  );
}
