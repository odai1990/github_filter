import logo from "./logo.svg";
import "./App.css";
import callAPi from "./API/configuration";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    callAPi({
      search: "TheAlgorithms/Python",
      url: "GET /search/repositories",
    }).then((data) => {
      console.log("dsfdsfsdfsdf", data.data.items);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
