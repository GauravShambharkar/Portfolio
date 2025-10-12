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
