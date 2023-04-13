import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./componant/Home";
import CountryInfo from "./componant/CountryInfo";
import { useState } from "react";
import { DarkTheme } from "./componant/DarkTheme";
import Header from "./componant/Header";

function App() {
  const [blackTheme, setBlackTheme] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: ":code", element: <CountryInfo /> },
      ],
    },
  ]);

  return (
    <DarkTheme.Provider value={blackTheme}>
      <div>
        <Header blackTheme={blackTheme} setBlackTheme={setBlackTheme} />
        <RouterProvider router={router} />
      </div>
    </DarkTheme.Provider>
  );
}

export default App;
