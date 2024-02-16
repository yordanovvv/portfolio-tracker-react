import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Investments from "./components/Investments/investments";
import Settings from "./components/Settings/settings";
import { useTheme } from "./context/theme-context";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />{" "}
        <Route
          path="/investments"
          element={<Investments />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </div>
  );
}

export default App;
