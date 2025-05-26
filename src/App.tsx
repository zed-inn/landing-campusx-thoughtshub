import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";
import images from "./utils/images";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  const pathsWithFooter = [
    "/",
    "/about",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return (
    <div className="md:w-full md:h-[calc(100vh-0.75rem*2)] w-screen h-screen md:rounded-2xl bg-black text-white transition-all font-space-grotesk overflow-hidden mx-auto max-w-[1440px!important]">
      <NavBar className="p-2 border-b border-gray-600 font-urban" />

      <main className="md:h-[calc(100vh-1.9rem*2)] h-[calc(100vh-2.3rem)] w-full transition-all overflow-hidden bg-gradient-to-bl from-black via-black/25 via-75% to-purple-800/55 relative text-gray-100">
        <div className="">
          <img
            src={
              pathname === "/"
                ? images.bg2
                : pathname === "/about"
                ? images.bg1
                : images.bg2
            }
            alt="background_img"
            className={
              "absolute top-0 left-0 w-full h-full object-cover z-0 object-center " +
              (pathname === "/"
                ? "opacity-20"
                : pathname === "/about"
                ? "opacity-40"
                : "opacity-0")
            }
          />
        </div>
        <div className="w-full h-full relative overflow-auto p-2">
          <div
            className={
              pathsWithFooter.includes(pathname) ? "w-full" : "w-full h-full"
            }
          >
            <Outlet />
          </div>
          {pathsWithFooter.includes(pathname) && <Footer />}
        </div>
      </main>
    </div>
  );
}

export default App;
