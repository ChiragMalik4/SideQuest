import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Parallax1 from "./components/Parallax1";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Parallax1 text="What We Do?" />
      </div>
      <Benefits />
      <div className="overflow-hidden">
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}

export default App;
