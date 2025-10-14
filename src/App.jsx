import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Details from "./Components/Details";
import Socials from "./Components/Socials";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Outro from "./Components/Outro";
import AudioPlayer from "./Components/AudioPlayer";
import { useEffect } from "react";
import loadClarity from "./clarity";
// import { RemoveScrollBar } from "react-remove-scroll-bar";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GA);

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

  // const clarity_tag_id = import.meta.env.VITE_CLARITY_TAG_ID;
  async function initTracking() {
    try {
      // Google Analytics
      const gaId = import.meta.env.VITE_GA;
      if (gaId) {
        ReactGA.initialize(gaId);
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        // console.log("GA initialized:", gaId);
      } else {
        console.warn("GA ID missing!");
      }

      // Microsoft Clarity
      const clarityId = import.meta.env.VITE_CLARITY_TAG_ID;
      if (clarityId) {
        await loadClarity(clarityId); // if loadClarity returns a promise
        // console.log("Clarity initialized:", clarityId);
      } else {
        console.warn("Clarity ID missing!");
      }
    } catch (error) {
      console.error("Error initializing tracking:", error);
    }
  }

  useEffect(() => {
    async function startTracking() {
      await initTracking();
    }
    startTracking();

    // loadClarity(clarity_tag_id);
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
        <About />
        <Skills />
        <Projects />
        <Outro />
        {/* <AudioPlayer /> */}
      </div>
    </>
  );
}

export default App;
