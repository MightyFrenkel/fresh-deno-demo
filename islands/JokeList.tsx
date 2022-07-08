/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

interface JokeListProps {
  jokes: string[];
}

// Components in the islands folder can be interactive
export default function JokeList(props: JokeListProps) {
  const [jokes, setJokes] = useState(props.jokes);

  async function addJoke() {
    const response = await fetch("/api/jokes/new", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();
    setJokes(jokes.concat([json.joke]));
  }
  return (
    <div>
      <ul>
        {jokes.map((j) => (
          <li>{j}</li>
        ))}
      </ul>
      <button onClick={addJoke}> Add joke!</button>
    </div>
  );
}
