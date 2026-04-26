import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";

import BlogDetail from "./Pages/Blog/BlogDetail";
import About from "./Pages/About";

import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;