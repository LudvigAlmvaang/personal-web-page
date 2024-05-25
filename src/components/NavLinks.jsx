import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarRef]);

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        ref={sidebarRef}
        onClose={toggleNavbar}
      />
      <button
        className="justify-self-start self-center ml-[40px] font-bold text-6xl"
        onClick={toggleNavbar}
      >
        {isOpen ? <X size={64} /> : <Menu size={64} />}
      </button>
    </>
  );
};

export default Nav;
