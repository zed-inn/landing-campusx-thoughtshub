import { useEffect, useState } from "react";
import images from "../utils/images";
import strings from "../utils/strings";
import { Link, useLocation } from "react-router";

interface SiteLinkProps {
  name: string;
  shortName: string;
  to: string;
  path: string;
}

// [name, url]
const links = [
  ["home", "Home", "/"],
  ["about", "About", "/about"],
  //   ["download", "Download", "/download"],
  ["privacy policy", "Privacy policy", "/privacy-policy"],
  ["terms & conditions", "T&C", "/terms-conditions"],
];

const NavBar = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  return (
    <div className={className}>
      <nav className="flex items-center">
        <img
          src={images.icon}
          alt="ThoughtsHub"
          className="aspect-square w-5 rounded-full select-none"
          id="logo"
        />

        <ul className="flex md:gap-5 gap-2.5 text-sm ml-auto md:px-4">
          {links.map((link) => (
            <SiteLink
              name={link[0]}
              shortName={link[1]}
              path={pathname}
              to={link[2]}
              key={link[2]} // unique url for every link
            ></SiteLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const SiteLink = ({ name, shortName, to, path }: SiteLinkProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link
      to={to}
      className={
        "text-gray-400 tracking-wider hover:text-gray-200 cursor-pointer transition-all w-max " +
        (path === to ? "text-white font-semibold" : null)
      }
    >
      {width<= 390 ? shortName : strings.title(name)}
    </Link>
  );
};

export default NavBar;
