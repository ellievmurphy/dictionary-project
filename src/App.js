import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          Open-sourced by Ellie Murphy on{" "}
          <a
            href="https://github.com/ellievmurphy/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
