import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import AlbumImage from "./assets/images/Bruno-Mars-Album-Doo-Wops-Hooligans-image.jpg";
import Song from "./assets/music/lazy-song.mp3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroOne from "./components/hero/HeroOne.tsx";
import HeroTwo from "./components/hero/HeroTwo.tsx";
import AlbumProvider, { Album } from "./context/AlbumContext.tsx";

const album: Album = {
  name: "Doo-Wops & Hooligans",
  year: 2010,
  image: AlbumImage,
  songs: [
    // {
    //   name: "Grenade",
    //   source: "",
    // },
    // {
    //   name: "Just the Way You Are",
    //   source: "",
    // },
    // {
    //   name: "Our First Time",
    //   source: "",
    // },
    // {
    //   name: "Runaway Baby",
    //   source: "",
    // },
    {
      name: "The Lazy Song",
      source: Song,
    },
    // {
    //   name: "Marry You",
    //   source: "",
    // },
    // {
    //   name: "Talking To The Moon",
    //   source: "",
    // },
    // {
    //   name: "Liquor Store Blues",
    //   source: "",
    // },
    // {
    //   name: "Count On Me",
    //   source: "",
    // },
    // {
    //   name: "The Other Side",
    //   source: "",
    // },
  ],
};

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
    element: (
      <AlbumProvider album={album}>
        <BrunoMars />
      </AlbumProvider>
    ),
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
