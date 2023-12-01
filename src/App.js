import "./App.css";
import Header from "./components/Header/Header";
import "./assets/js/script";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/footer";
import ContactCard from "./components/contactcard";
import Contact from "./components/contact";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />

      <Portfolio />
      <Team />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
