import ReactGA from "react-ga";

import { useEffect } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";

ReactGA.initialize("XCBHE38N1Z");

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
