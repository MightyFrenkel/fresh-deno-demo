/** @jsx h */
import { h } from "preact";

// Components in the components folder are rendered on the server by default
export function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jokes">Jokes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
