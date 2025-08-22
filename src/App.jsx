import "./App.css";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Home from "./Components/Home";
import RecentWork from "./Components/RecentWork";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import { ReactLenis, useLenis } from "lenis/react";
// import { RemoveScrollBar } from "react-remove-scroll-bar";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

  return (
    <>
    
      {/* <RemoveScrollBar/> */}
      <ReactLenis root />
      <Home />
      <AboutMe />
      <Skills />
      <RecentWork />
      <Resume />
      <Education />
    </>
  );
}

export default App;
