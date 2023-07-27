import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

    
      return (
        <div className="bg-gray-900">
          <nav className="shadow-lg fixed top-0 w-full z-10">
            <div className="container mx-auto px-4 py-2 md:flex md:justify-between md:items-center h-20">
              <div className="flex justify-between items-center">
                <a
                  className="font-bold text-xl text-primary"
                  href="/"
                  style={{ fontFamily: "'Lumanosimo', cursive" }}
                >
                  Gouda's portfolio
                </a>
                <button
                  className="md:hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
              <div className={"md:flex flex-col md:flex-row" + (isOpen ? " flex" : " hidden")}>
                <a
                  className="my-1 text-primary text-lg font-medium hover:text-darkAccent md:mx-4 md:my-0 cursor-pointer"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="my-1 text-primary text-lg font-medium hover:text-darkAccent md:mx-4 md:my-0 cursor-pointer"
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="my-1 text-primary text-lg font-medium hover:text-darkAccent md:mx-4 md:my-0 cursor-pointer"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="my-1 text-primary text-lg font-medium hover:text-darkAccent md:mx-4 md:my-0 cursor-pointer"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="my-1 text-primary text-lg font-medium hover:text-darkAccent md:mx-4 md:my-0 cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </nav>
          <div className="container mx-auto py-10">
          </div>
        </div>
      );
    }
    
export default Header;