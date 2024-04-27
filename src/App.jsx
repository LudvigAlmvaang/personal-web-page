import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Chat from "./components/Chat";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    async function initLocomotiveScroll() {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });
    }
    initLocomotiveScroll();
  }, []);

  return (
    <>
      <Header />
      <main ref={containerRef}>
        <Hero />
        <Highlights />
        <Chat />
      </main>
      <footer><h2>Footer</h2></footer>
    </>
  );
}

export default App;
