import { HeaderLogo } from "@/assets/Icons/HeaderLogo";
import { navLinks } from "@/static/data/navLinks";
import ApLink from "./LInk";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="max-w-[1024px] w-full">
        <div className="flex">
          <div className="flex items-center justify-between w-full min-h-20">
            <ApLink to="/" className="flex gap-2 items-center">
              <HeaderLogo /> Aaron
            </ApLink>

            <ul className="hidden md:flex gap-4 items-center text-pri">
              <li className="flex gap-4">
                {navLinks.map((el, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span>#</span> <ApLink to={el.url}>{el.title}</ApLink>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
