import "./App.css";
import Home from "./components/Home.jsx";
import Overview from "./components/Overview.jsx";
import About from "./components/About.jsx";
import Ceremony from "./components/Ceremony.jsx";
import Honeymoon from "./components/Honeymoon.jsx";

function App() {
  return (
    <>
      <div>
        <Home />
        <Overview />
        <About />
        <Ceremony />
        <Honeymoon />
      </div>
    </>
  );
}

export default App;
