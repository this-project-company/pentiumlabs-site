import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileApp from "./components/MobileApp";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <MobileApp />
        <Product />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;