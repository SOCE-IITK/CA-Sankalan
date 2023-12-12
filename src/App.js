// App.js
import React from "react";
import "./App.css";
import StarfieldAnimation from "react-starfield-animation"; // Import the StarfieldAnimation component
import Header from "./components/Header/Header";
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
      <StarfieldAnimation
        style={{
          zIndex: 0,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
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
