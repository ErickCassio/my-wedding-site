import "./App.css";
import Home from "./components/Home.jsx";
import Overview from "./components/Overview.jsx";
import About from "./components/About.jsx";
import Ceremony from "./components/Ceremony.jsx";

function App() {
  return (
    <>
      <div>
        <Home />
        <Overview />
        <About />
        <Ceremony />
      </div>
    </>
  );
}

export default App;
