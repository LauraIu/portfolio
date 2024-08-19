import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const MobileMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div
      // isOpen={isOpen}
      // onClick={toggle}
      id="MobileMenu"
      className={`fixed w-full h-screen top-0 left-0 z-20 transition-transform duration-500 ease-in-out bg-gray-light ${
        isOpen ? "translate-x-0" : "-translate-y-full"
      }`}
    >
      {/* Close icon */}
      <div onClick={toggleMenu} className="hover:cursor-pointer">
        <FaTimes />
      </div>

      {/* Menu */}
      <div className="mx-auto transition-all *:h-1/3" role="group">
        <Link href="/adatbazis" smooth onClick={toggleMenu}>
          Adatbázis
        </Link>
        <Link href="/setautvonalak" smooth onClick={toggleMenu}>
          Sétaútvonalak
        </Link>
        <Link href="/projekt" smooth onClick={toggleMenu}>
          Projekt
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

---------------------------------


