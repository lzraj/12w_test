import "./App.scss";
import Jokes_API from "./src/Components/Jokes_API";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Joke's on you:</h1>
        <Jokes_API />
      </header>
    </div>
  );
}
