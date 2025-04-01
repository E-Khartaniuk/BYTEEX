import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <div className="App">
      <Hero />
      <Benefits />
      <About />
      <HowItWorks />
    </div>
  );
}

export default App;
