import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

/**
 * @use AppRouter
 * @description This component is used to create the router for the application. It uses the BrowserRouter from react-router-dom to create a router that uses the HTML5 history API to keep your UI in sync with the URL. 
 */

export default function AppRouter(): React.JSX.Element {
  return (
    <BrowserRouter>
        <Routes>
            
        </Routes>
    </BrowserRouter>
  );
}