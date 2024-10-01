import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
