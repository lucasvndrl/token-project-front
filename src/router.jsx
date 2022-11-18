import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TokenGenerator } from "./pages/TokenGenerator";
import { TokenList } from "./pages/TokenList";
import { TokenViewer } from "./pages/TokenViewer";

const routes = [
  {
    component: <TokenList />,
    name: "Lista de Tokens",
    path: "/token-list",
  },
  {
    component: <TokenViewer />,
    name: "Visualizador de Token",
    path: "/token-viewer",
  },
  {
    component: <TokenGenerator />,
    name: "Gerar Token",
    path: "/token-generator",
  },
  {
    component: <Home />,
    name: "Home",
    path: "/",
  },
];

const Router = () => (
  <Routes>
    {routes.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))}
  </Routes>
);
export default Router;
