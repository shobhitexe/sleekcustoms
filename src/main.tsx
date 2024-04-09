import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* @ts-ignore */}
      <chat-widget
        location-id="aiSbxDdoqu7uXJUiIX3l"
        prompt-avatar="https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/locationPhotos%2FaiSbxDdoqu7uXJUiIX3l%2Fchat-widget-person?alt=media&token=3eb218cc-88db-4e64-9743-ac1a5772a22e"
        agency-name="DRS"
        agency-website="www.drs.win"
        show-consent-checkbox="true"
      />
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      ></script>
    </BrowserRouter>
  </React.StrictMode>
);
