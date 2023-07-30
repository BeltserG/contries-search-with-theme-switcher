import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./app/App"

const appElement = createRoot(document.getElementById("app"));
appElement.render(<App/ >);