import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroOne from "./components/hero/HeroOne.tsx";
import HeroTwo from "./components/hero/HeroTwo.tsx";
import BrunoMars from "./pages/BrunoMars.tsx";
import Test from "./pages/Test.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hero-one",
    element: <HeroOne />,
  },
  {
    path: "hero-two",
    element: <HeroTwo />,
  },
  {
    path: "bruno-mars",
    element: <BrunoMars />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
