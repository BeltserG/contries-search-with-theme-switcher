import React from 'react';
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
// import "./App.scss";

const appElement = ReactDOM.createRoot(document.getElementById("app"));
appElement.render(<App />);