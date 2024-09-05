import  Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollTop from "./components/AdditionalComponents/ScrollTop";



function App(){
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollTop/>
    </>
  );
}

export default App;
