'use client';

import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl">
      <nav className="max-w-[1240px] mx-auto flex justify-between items-center sm:px-16 px-6 pt-5 pb-4">
        <Link className="flex items-center" href="/">
          <Image
            className="object-contain"
            src="/site-logo.svg"
            width={139}
            height={25}
            alt="Womazing site logo"
            priority={true}
          />
        </Link>

        {/* Mobile Navbar Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <Image src='/close-icon.svg' alt='close icon' width={29} height={30} />
            ) : (
              <Image src='/burger-menu-icon.svg' alt='burger menu icon' width={42} height={25} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-[45px]">
          {navbarLinks.map((link) => (
            <Link
              className="text-base leading-5"
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
          <Link
            className="flex items-center justify-between gap-[9px]"
            href="/"
          >
            <Image src="/phone-icon.svg" width={27} height={27} alt='phone icon' />
            <span>+7 (495) 823-54-12</span>
          </Link>
          <button>
            <Image src='shopping-bag.svg' width={24} height={24} alt='shopping bag icon' />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            {navbarLinks.map((link) => (
              <Link
                className="text-base leading-5 py-2"
                href={link.url}
                key={link.title}
                onClick={() => setNavbarOpen(false)} // Close menu on link click
              >
                {link.title}
              </Link>
            ))}
            <Link
              className="flex items-center justify-between gap-[9px] py-2"
              href="/"
              onClick={() => setNavbarOpen(false)} // Close menu on link click
            >
              <Image src="/phone-icon.svg" width={27} height={27} alt='phone icon' />
              <span>+7 (495) 823-54-12</span>
            </Link>
            <button onClick={() => setNavbarOpen(false)} className="py-2">
              <Image src='shopping-bag.svg' width={24} height={24} alt='shopping bag icon' />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
