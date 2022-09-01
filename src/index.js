import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <button> - </button>
      <h2>{0}</h2>
      <button onClick={() => store.dispatch({ type: "INCREASE_COUNTER" })}>
        {" "}
        +{" "}
      </button>
    </Provider>
  </React.StrictMode>
);
