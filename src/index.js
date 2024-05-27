import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

// Inicialize o GA4 com seu ID de medição
ReactGA.initialize("G-TN7EDE283Q");

const Root = () => {
  useEffect(() => {

    // Envie um pageview quando o componente Root for montado
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Site Completo",
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);