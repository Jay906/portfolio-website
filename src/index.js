import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
