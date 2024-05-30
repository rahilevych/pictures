import { Route, Routes } from "react-router";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "./pages/AutorizationPage/AutorizationPage";
import Layout from "./components/Layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ImageType } from "./assets/types/ImageType";
// REVIEW the config file is a necesary file. we better ignore the variables we want to keep secret, not the whole file, unless it is something very sensible or a company's secret.
import { apiKey } from "./config/APIKey";
import { ImagesContext, ImagesContextProvider } from "./context/ImagesContext";
import AutorizationPage from "./pages/AutorizationPage/AutorizationPage";
// REVIEW clean up unusued imports.
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import LogInComponent from "./components/LogInComponent/LogInComponent";
import SavedImagesPage from "./pages/SavedImagesPage/SavedImagesPage";
import { Toaster } from "react-hot-toast";

function App() {
  // REVIEW remember that every component subscribed to a context will re-render if the context does it. Do you need to pass images at this level? why not directly from the component?
  const { images } = useContext(ImagesContext);

  return (
    <>
      {" "}
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="image/:id" element={<DetailedPage images={images} />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="registration" element={<AutorizationPage />} />
          <Route path="saved" element={<SavedImagesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
