import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = React.forwardRef(({ isOpen, onClose }, ref) => {
  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform transform z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className="space-y-4">
        <li>
          <NavLink to="/" onClick={onClose}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={onClose}>Blog</NavLink>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
