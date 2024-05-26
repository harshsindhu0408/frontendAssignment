import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "LIKED MOVIES", link: "/liked" },
  ];

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-100 shadow-lg fixed shadow-gray-200 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full h-16">
            <div className="flex w-full items-center justify-between">
              <div className="flex-shrink-0 justify-between items-center">
                <h1 className='text-primary font-FjallaOne text-4xl'>MOVIES HUB</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 text-black gap-x-3 flex items-baseline font-Lato text-xs font-bold space-x-4">
                  {navlinks.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.link}
                      className="text-black hover:text-primary transition-all duration-200"
                      activeClassName="text-black font-bold"
                      onClick={closeNavbar}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navlinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.link}
                    className="text-black block px-3 py-2 rounded-md text-base font-Lato font-semibold"
                    activeClassName="text-white bg-gray-900 font-bold"
                    onClick={closeNavbar}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
