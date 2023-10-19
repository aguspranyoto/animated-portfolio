import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section id="">Portfolio2</section>
      <section id="">Portfolio3</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
}

export default App;
