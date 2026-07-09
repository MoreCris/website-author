import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import Series from "@/pages/Series";
import Contos from "@/pages/Contos";
import Story from "@/pages/Story";
import Contact from "@/pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App min-h-screen bg-ivory text-ink flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Books />} />
            <Route path="/livros/:slug" element={<Series />} />
            <Route path="/contos" element={<Contos />} />
            <Route path="/contos/:slug" element={<Story />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
