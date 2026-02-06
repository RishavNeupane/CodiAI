// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="
                text-2xl font-bold tracking-tight
                bg-gradient-to-r from-white via-red-500 to-red-700
                bg-clip-text text-transparent
              "
            >
              CodiAI
            </Link>


            <p className="mt-5 text-sm text-zinc-400 leading-relaxed max-w-sm">
              A focused learning platform built to help developers think
              clearly, move faster, and build with confidence.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/learning"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  AI Tutor
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  Learning Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-zinc-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Stay Connected
            </h4>

            <p className="text-sm text-zinc-400 mb-4">
              Product updates and insights — no noise.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full px-4 py-2 text-sm
                  bg-zinc-900 text-zinc-100
                  border border-zinc-800
                  rounded-l-lg
                  focus:outline-none focus:border-red-500
                "
              />
              <button
                className="
                  px-4 py-2
                  bg-red-600 text-white text-sm font-medium
                  rounded-r-lg
                  hover:bg-red-500 transition
                "
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} CodiAI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-xs text-zinc-500 hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-zinc-500 hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
