import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "./lib/useLenis";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Listing from "./pages/Listing";
import Dashboard from "./pages/Dashboard";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.__lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);
  return null;
}

export default function App() {
  useLenis();
  return (
    <>
      <Intro />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <ScrollToTop />
      <main className="bg-paper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/space/:id" element={<Listing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
