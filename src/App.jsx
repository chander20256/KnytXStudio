import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/Blog/BlogDetail";

import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/pricing"
          element={<Pricing />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetail />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>

    </Routes>
  );
}

export default App;