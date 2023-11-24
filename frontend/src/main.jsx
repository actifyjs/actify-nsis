import "./style.css";
import React from "react";
import EditTemplate from "./pages/edit-template";
import ChooseTemplate from "./pages/choose-template";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename={"/"}>
      <Routes>
        <Route
          path="/"
          exact
          element={<ChooseTemplate />}
        />
        <Route
          exact
          path="/template"
          element={<EditTemplate />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
