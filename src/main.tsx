import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/_main.scss";
import { Accueil } from "./pages/Accueil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <h1>Une erreur s'est produite</h1>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
