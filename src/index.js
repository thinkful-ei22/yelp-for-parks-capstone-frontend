import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Favicon from 'react-favicon';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

ReactDOM.render(
  <div>
  <Favicon url="https://s3.us-east-2.amazonaws.com/mg-icons/yfpfavicon.png" />
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
