import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";

import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;