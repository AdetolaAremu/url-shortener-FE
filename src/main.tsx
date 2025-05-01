import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/Store.ts";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
