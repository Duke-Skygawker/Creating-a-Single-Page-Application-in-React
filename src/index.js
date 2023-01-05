import React from "react";
import ReactDOM from "react-dom/client";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand h1 text-light">Rick and Morty</span>
        {/* for some reason margin refuses to work on the nav */}
      </nav>
      <List />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
