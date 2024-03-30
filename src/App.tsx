import { Outlet } from "react-router-dom";
import ReactGA from "react-ga";

import { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";

ReactGA.initialize("G-XCBHE38N1Z");

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
