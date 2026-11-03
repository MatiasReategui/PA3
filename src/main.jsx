import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SolicitudesProvider } from "./context/SolicitudesContext.jsx";
import "./index.css";

// El Provider envuelve a toda la aplicación (dentro del Router) para que
// cualquier componente descendiente pueda consumir el estado global.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SolicitudesProvider>
        <App />
      </SolicitudesProvider>
    </BrowserRouter>
  </StrictMode>
);
