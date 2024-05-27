import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-TN7EDE283Q");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Custom Title",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
