import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1>
            <div className="Antonio">Schmirriam-Schwebster</div>
            <div className="AlfaSlabOne">Dictionary</div>
          </h1>
          <Dictionary />
        </main>
        <footer>
          <a href="https://github.com/RobDLev" target="_blank" rel="noreferrer">
            Open-source code{" "}
          </a>
          by Robin Levinson; Hosting by{" "}
          <a href="https://netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
