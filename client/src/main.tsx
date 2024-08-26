import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "./components/contextApi/ApiContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ApiProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ApiProvider>
);
