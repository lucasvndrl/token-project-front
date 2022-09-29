import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TokenList } from "./components/TokenList";
import { TokenViewer } from "./components/TokenViewer";

const routes = [
    {
      component: <TokenList />,
      name: 'Lista de Tokens',
      path: '/token-list',
    },
    {
      component: <TokenViewer />,
      name: 'Visualizador de Token',
      path: '/token-viewer',
    },
    // {
    //   component: Home,
    //   name: 'Home',
    //   path: '/',
    // },
  ];
  
  const Router = () => (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
  export default Router;