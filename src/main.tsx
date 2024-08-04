import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PageNotFound from "./components/Error/PageNotFound.tsx";
import IndexPage from "./pages/IndexPage.tsx";
import App from "./App.tsx";
import ExplorerPage from "./pages/app/ExplorerPage.tsx";

// & tailwind style file
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/auth/login',
    // element:
  },
  {
    path: '/auth/register',
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <PageNotFound/>
  },
  {
    path: '/app/explorer',
    element: <ExplorerPage />
  }
  // {
  //   path: '/app/post/:user'
  // }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
