import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/home" },
    { name: "Learning", path: "/learning" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black border-b border-red-900/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-extrabold tracking-tight
          bg-gradient-to-r from-white via-red-500 to-red-700
          bg-clip-text text-transparent"
        >
          CodiAI
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition
                  ${
                    active
                      ? "text-red-500"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* User */}
        <div className="flex items-center gap-6">
          <div className="text-right leading-tight">
            <p className="text-[10px] uppercase tracking-widest text-white/50">
              Logged in
            </p>
            <p className="text-sm font-medium text-white">
              {user?.firstName || "User"}
            </p>
          </div>

          <button
            onClick={() => signOut(() => (window.location.href = "/"))}
            className="px-5 py-2 rounded-full text-xs font-bold
            bg-red-600 text-white
            hover:bg-red-700
            transition-all duration-300"
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
