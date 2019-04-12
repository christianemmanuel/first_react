import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from "./App";
// import Counter from "./components/counter";
import LightSwitch from "./components/lightSwitch";
import Navigation from "./components/navigation";

ReactDOM.render(<Navigation />, document.getElementById("navigationRoot"));
ReactDOM.render(<LightSwitch />, document.getElementById("customRoot"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
