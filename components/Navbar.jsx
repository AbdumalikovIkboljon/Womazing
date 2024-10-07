import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <header className="">
      <nav className="max-w-[1240px] mx-auto shadow-xl flex justify-between items-center sm:px-16 px-6 pt-[51px] pb-[41px]">
        <Link className="flex items-center justify-center" href="/">
          <Image
            className="object-contain"
            src="/site-logo.svg"
            width={139}
            height={25}
            alt="Womazing site logo"
            priority={true}
          />
        </Link>

        <div className="flex items-center jusfify-center gap-x-[45px]">
          {navbarLinks.map((link) => (
            <Link
              className="text-base leading-5"
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-x-[67px]'>
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
    </header>
  );
};

export default Sidebar;
