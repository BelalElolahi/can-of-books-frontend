import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain= {process.env.REACT_APP_AOUT0_DOMIN}
    clientId={process.env.REACT_APP_AOUT_CLIENTID}
    redirectUri="http://localhost:3000"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);