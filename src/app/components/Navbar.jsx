import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
           <h1>Oasis</h1> 
        </Link>
        
        <ul>
            <li><Link href="/home"></Link>Home</li>
            <li><Link href="/#galeria"></Link>Galeria</li>
            <li><Link href="/trabajos"></Link>Trabajos</li>
            <li><Link href="/contactos"></Link>Contactos</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
