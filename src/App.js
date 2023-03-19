import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("https://deploy-node-againn.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
