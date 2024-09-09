"use client";
import { useState, useEffect } from "react";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseCircleLine } from "react-icons/ri";

import BackDrop from "../BackDrop/BackDrop";

const NavLink = ({ href, children }: any) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative pb-1 ${
        isActive ? "text-[#008080]" : "text-[#008080]"
      }`}
    >
      {children}
      {/* Underline with animation */}
      <span
        className={`absolute left-0 bottom-0 h-[2px]  w-full bg-teal-900 transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
};

const Header = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window is scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <>
      <main
        className={`fixed z-30 w-full top-0 text-white px-4 ${scrolled ? " bg-black/95 backdrop:blur-3xl" : "bg-transparent"} transition-all duration-700`}
      >
        <section className=" py-4 flex justify-between items-center container mx-auto ">
          <h3
            className=" uppercase font-bold text-lg text-teal-700 font-mono"
            onClick={() => push("/")}
          >
            Financier
          </h3>
          <main className=" justify-between items-center gap-16 flex   ">
            <nav className=" gap-10 font-bold cursor-pointer hidden lg:flex">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className=" hidden lg:flex gap-4">
              {session?.user ? (
                <Link
                  href={`/users/${session.user.id}`}
                  className="  w-[140px] py-2 uppercase btn text-center  hover:bg-indigo-900 transition-all duration-500  "
                >
                  Start investing
                </Link>
              ) : (
                <button
                  className=" uppercase w-[140px] text-center bg-gray-600 btn "
                  onClick={() => push("/auth")}
                >
                  Sign Up / Sign in
                </button>
              )}
            </div>

            {/* MOBILE VIEW */}
            <main className=" flex items-center gap-4">
              {session?.user ? (
                <Link
                  href={`/users/${session.user.id}`}
                  className=" uppercase w-[126px] text-center py-2 lg:hidden block  bg-teal-500 hover:bg-teal-600 transition-all duration-700 font-medium text-xs h-[30px] rounded-md border-none shadow-sm   text-white "
                >
                  Start investing
                </Link>
              ) : (
                <button
                  className=" capitalize w-[126px] text-center lg:hidden block  bg-teal-500 hover:bg-teal-600 transition-all duration-700 font-medium text-xs h-[30px] rounded-md border-none shadow-sm   text-white "
                  onClick={() => push("/auth")}
                >
                  Sign Up / Sign in
                </button>
              )}
              <RxHamburgerMenu
                size={25}
                className=" text-teal-600 flex lg:hidden"
                onClick={handleCloseNav}
              />
            </main>
          </main>
        </section>
        {showNav && (
          <div className={`nav-container ${showNav ? "show" : ""} lg:hidden`}>
            <header className="flex justify-between items-center">
              <h3
                className=" uppercase font-bold text-lg text-teal-700 font-mono"
                onClick={() => push("/")}
              >
                Financier{" "}
              </h3>
              <RiCloseCircleLine
                size={25}
                className="text-teal-600"
                onClick={handleCloseNav} // Close the navbar
              />
            </header>
            <main>
              <nav className="flex flex-col text-center text-white gap-10 font-bold cursor-pointer">
                <Link href="/" onClick={handleCloseNav}>
                  Home
                </Link>
                <Link href="/about" onClick={handleCloseNav}>
                  About Us
                </Link>
                <Link href="/contact" onClick={handleCloseNav}>
                  Contact Us
                </Link>
              </nav>
            </main>
            <main className="flex gap-10 items-center justify-center">
              {session?.user && (
                <Link
                  className="grid place-content-center h-8 w-8 rounded-full p-3 bg-teal-100 mt-1"
                  href={`/users/${session.user.id}`}
                >
                  <span className="uppercase font-bold text-base text-gray-800">
                    <FaUser size={20} />
                  </span>
                </Link>
              )}
            </main>
          </div>
        )}
        <BackDrop isOpen={showNav} />
      </main>
    </>
  );
};

export default Header;
