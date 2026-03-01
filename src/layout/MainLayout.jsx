import Footer from "../Component/globalComp/Footer";
import Navbar from "../Component/globalComp/Navbar";
import ScrollToTop from "../Component/globalComp/ScrollToTop"; // ⭐ ADDED

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

      {/* ⭐ Scroll reset on page change */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />

    </div>
  );
}