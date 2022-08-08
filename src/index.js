import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {unstable_HistoryRouter as BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "./redux/store";
import { history } from "./services";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
