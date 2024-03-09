import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login/Login.tsx";
import Register from "./routes/Register/Register.tsx";
import CreateForm from "./routes/Create/CreateForm.tsx";
import Followers from "./routes/Followers/Followers.tsx";
import Following from "./routes/Following/Following.tsx";
import ErrorPage from "./error.tsx";
import PostPage from "./components/PostPage/PostPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PostPage /> },
          { path: "/create", element: <CreateForm /> },
          { path: "/followers", element: <Followers /> },
          { path: "/following", element: <Following /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
