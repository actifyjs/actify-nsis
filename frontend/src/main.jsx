import "./style.css";
import React from "react";
import Start from "./pages/start";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Finish from "./pages/finish";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <Routes>
        <Route
          path="/"
          exact
          element={<Start />}
        />
        <Route
          path="/page1"
          element={<Page1 />}
        />
        <Route
          path="/page2"
          element={<Page2 />}
        />
        <Route
          path="/page3"
          element={<Page3 />}
        />
        <Route
          path="/finish"
          element={<Finish />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
