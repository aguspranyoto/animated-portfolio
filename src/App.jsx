import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section id="">Portfolio1</section>
      <section id="">Portfolio2</section>
      <section id="">Portfolio3</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
}

export default App;
