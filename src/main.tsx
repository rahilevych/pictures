import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import { ImagesContextProvider } from "./context/ImagesContext.tsx";
import { AuthContextProvider } from "./context/AutorizationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //REVIEW you install React Router Dom v6.23, but using elements from v.5
  //REVIEW inserting from Router in main takes out flexibility when scaling the project. Better leave it as cleaner as possible.
  <BrowserRouter>
    <AuthContextProvider>
      {" "}
      <ImagesContextProvider>
        <App />{" "}
      </ImagesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
