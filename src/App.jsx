import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;