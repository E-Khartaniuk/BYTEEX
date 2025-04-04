import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import FAQ from "./components/FaqSection/FAQ";

import FinalCTA from "./components/FinalCTA/FinalCTA";

import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Hero />
      <Benefits />
      <About />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <InfoBanner />
      <FinalCTA />
    </div>
  );
}

export default App;
