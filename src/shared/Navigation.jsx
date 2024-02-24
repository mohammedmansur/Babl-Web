import { createBrowserRouter } from "react-router-dom";
import Home from "../web/components/Home";
import Index from "../web/shared/Index";
import Qolonia from "../web/components/Qolonia";
import Charasat from "../web/components/Charasat";
import Coffee from "../web/components/Coffee";
import HotDrink from "../web/components/HotDrink";
import ColdDrink from "../web/components/ColdDrink";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "qolonia",
        element: <Qolonia />,
      },
      {
        path: "hotdrink",
        element: <HotDrink />,
      },
      {
        path: "colddrink",
        element: <ColdDrink />,
      },
      {
        path: "charasat",
        element: <Charasat />,
      },
      {
        path: "coffee",
        element: <Coffee />,
      },
    ],
  },
]);

export const NavBarList = [
  {
    ku: "سەرەکی",
    en: "Home",
    ar: "الرئيسية",
    key: "home",
    path: "/",
  },
];
