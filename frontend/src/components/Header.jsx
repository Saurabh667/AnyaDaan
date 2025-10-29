import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Bell, Mail } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contribute", path: "/contribute" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-green-600 font-bold text-xl"
        >
          <img
            src="/logo.png"
            alt="Replate Clone Logo"
            className="h-8 w-8 rounded-full"
          />
          <span>Replate Clone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-green-600 transition font-medium ${
                  isActive ? "text-green-600 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Icons & Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Gmail */}
          <button className="relative text-gray-700 hover:text-green-600 transition">
            <Mail size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Notification */}
          <button className="relative text-gray-700 hover:text-green-600 transition">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              5
            </span>
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-green-600 text-green-600 font-medium hover:bg-green-50 transition"
          >
            Login
          </Link>

          {/* Signup */}
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-green-600"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          {/* Nav links */}
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 border-b text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Icons */}
          <div className="flex justify-center gap-6 py-4 border-b">
            <button className="relative text-gray-700 hover:text-green-600">
              <Mail size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            <button className="relative text-gray-700 hover:text-green-600">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                5
              </span>
            </button>
          </div>

          {/* Auth buttons */}
          <div className="p-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="w-full px-4 py-2 rounded-lg border border-green-600 text-green-600 text-center font-medium hover:bg-green-50 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="w-full px-4 py-2 rounded-lg bg-green-600 text-white text-center font-medium hover:bg-green-700 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
