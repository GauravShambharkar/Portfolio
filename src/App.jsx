import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
// import { RemoveScrollBar } from "react-remove-scroll-bar";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
  });

  return (
    <>
      <div className="w-full h-screen">
        {/* <RemoveScrollBar/> */}
        <ReactLenis root />
        <Nav />
        <Header />
        <Profile />
      </div>
    </>
  );
}

export default App;
