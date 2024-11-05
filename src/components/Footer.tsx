import React from "react";
import {
  Code2,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Let's Code</span>
            </div>
            <p className="mt-4 text-gray-400">
              Building exceptional digital experiences that drive business
              growth and user engagement.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/lets-code-forever/"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/lets__code/"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Lets__Code"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Lets-code-with-us"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Let's Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
