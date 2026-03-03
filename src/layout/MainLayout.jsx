import { Outlet } from "react-router-dom";
import Footer from "../Component/globalComp/Footer";
import Navbar from "../Component/globalComp/Navbar";
import ScrollToTop from "../Component/globalComp/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex flex-col">

      {/* ⭐ Scroll reset on page change */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}