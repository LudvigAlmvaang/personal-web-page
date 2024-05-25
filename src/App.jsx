import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

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
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main ref={containerRef} className="bg-white flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
