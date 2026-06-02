import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkTheme } from "./componant/DarkTheme";
import Layout from "./componant/Layout";
import Home from "./componant/Home";
import CountryInfo from "./componant/CountryInfo";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    return saved === "dark";
  }
  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

function App() {
  const [blackTheme, setBlackTheme] = useState(getInitialTheme);

  useEffect(() => {
    const theme = blackTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [blackTheme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout blackTheme={blackTheme} setBlackTheme={setBlackTheme} />,
      children: [
        { index: true, element: <Home /> },
        { path: ":code", element: <CountryInfo /> },
      ],
    },
  ]);

  return (
    <DarkTheme.Provider value={blackTheme}>
      <RouterProvider router={router} />
    </DarkTheme.Provider>
  );
}

export default App;
