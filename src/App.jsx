import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Details from "./Components/Details/Details";
import Socials from "./Components/Socials/Socials";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Outro from "./Components/Outro/Outro";
import { useEffect } from "react";
import loadClarity from "./clarity";

// import { RemoveScrollBar } from "react-remove-scroll-bar";
import ReactGA from "react-ga4";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

  const clarity_tag_id = import.meta.env.VITE_CLARITY_TAG_ID;

  useEffect(() => {
    loadClarity(clarity_tag_id);
  }, []);
  return (
    <>
      <div className="w-full relative">
        <ReactLenis root />
        {/* <RemoveScrollBar/> */}
        <Nav />
        <Header />
        <Profile />
        <Details />
        <Socials />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Outro />
        <Footer />
      </div>
    </>
  );
}

export default App;
