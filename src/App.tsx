import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Cta />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
