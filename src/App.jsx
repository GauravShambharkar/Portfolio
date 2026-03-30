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
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
// import { RemoveScrollBar } from "react-remove-scroll-bar";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

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
