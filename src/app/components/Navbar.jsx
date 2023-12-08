"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const [color, setColor] =useState('transparent')
    const [textColor, setTextColor] =useState('White')

    const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full duration-300 ease-in">
      <div className="max-width-[1240px] m-auto flex  justify-between items-center p-4  text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">Oasis de arte</h1>
        </Link>

        <ul className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/home"></Link>Home
          </li>
          <li className="p-4">
            <Link href="/#galeria"></Link>Galeria
          </li>
          <li className="p-4">
            <Link href="/trabajos"></Link>Trabajos
          </li>
          <li className="p-4">
            <Link href="/contactos"></Link>Contactos
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="z-10 block sm:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Button */}
        <div
          className={
            nav
              ? "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden"
              : "absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden "
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/home"></Link>Home
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#galeria"></Link>Galeria
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/trabajos"></Link>Trabajos
            </li>
            <li className="p-4 text-4xl hover:text-gray-400">
              <Link href="/contactos"></Link>Contactos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
