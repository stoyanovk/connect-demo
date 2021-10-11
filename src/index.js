import ReactDOM from "react-dom";
import { AppState } from "./hooks";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  rootElement
);
