import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Page from "../components/page/Page";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import getAuthRouter from "./auth/getAuthRouter";

/**
 * @use AppRouter
 * @description This component is used to create the router for the application. It uses the BrowserRouter from react-router-dom to create a router that uses the HTML5 history API to keep your UI in sync with the URL. 
 */

export default function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {getAuthRouter()}


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}