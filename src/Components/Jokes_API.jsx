import { useEffect, useState } from "react";
import Jokes from "./Jokes";

export default function Jokes_API() {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.jokes);
        },

        (error) => {
          setErrorMsg(error.message);
        }
      );
  }, []);

  return (
    <ul>
      {errorMsg}

      {data.map((jokes, index) => (
        <Jokes
          key={index}
          jokes={jokes.joke}
          type={jokes.type}
          setup={jokes.setup}
          delivery={jokes.delivery}
          id={jokes.id}
        />
      ))}
    </ul>
  );
}
