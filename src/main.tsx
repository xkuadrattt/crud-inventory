import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import { ToastProvider } from "./context/ToastContext/ToastContext.tsx";
import ErrorBoundary from "./components/error/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </ToastProvider>
  </StrictMode>
);
