import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed left-0 top-0 w-full z-10 px-16 md:px-8 bg-lumpink border-b-2 border-b-lumdarkpink">
      <div className="max-[1240px] m-auto flex justify-between items-center p-4 ">
        <h1>
          <Link href="/">
            <Image
              src="img/navbar/logo.svg"
              width={150.99}
              height={32}
              className="md:hidden"
              alt="Logo du site web Teameal"
            />
            <Image
              src="/img/navbar/logomob.png"
              width={44}
              height={44}
              className="hidden md:block"
              alt="Logo du site web Teameal vesrion mobile"
            />
          </Link>
        </h1>
        <ul className=" md:hidden flex text-lumblue space-x-7 font-medium">
          <li className="p-4">
            <Link href="#steps">Comment?</Link>
          </li>
          <li className="p-4">
            <Link href="#etablissements">Établissements</Link>
          </li>
          <li className="p-4">
            <Link href="#partenaires">Partenaires</Link>
          </li>

          {/* Bouton s'inscrire et se connecter */}
          <div className="md:hidden space-x-7 pt-1">
            <Link href="/register" c>
              <button className=" font-bold rounded-[50px] py-3 px-6  bg-lumblue text-lumpink  top-[65%] lg:left-[45%] left-[40%]">
              S&rsquo;inscrire
              </button>
            </Link>

            <Link href="/login">
              <button className=" font-bold rounded-[50px] py-3 px-6  bg-lumblue text-lumpink top-[65%] lg:left-[45%] left-[40%]">
                Se connecter
              </button>
            </Link>
          </div>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="md:block hidden z-10 ">
          {/* <button>S&rsquo;inscrire</button> */}
          {nav ? (
            <AiOutlineClose style={{ color: "white" }} size={35} />
          ) : (
            <AiOutlineMenu style={{ color: "#0E337D" }} size={35} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex items-center w-full h-screen bg-menuburger ease-in duration-300"
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-menuburger ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl text-white">
              <Link href="#steps">Comment ?</Link>
            </li>
            <li className="p-4 text-4xl text-white">
              <Link href="#etablissements">Établissements</Link>
            </li>
            <li className="p-4 text-4xl text-white">
              <Link href="#partenaires">Partenaires</Link>
            </li>
            <li className="p-4 text-4xl text-white">
              <Link href="/register">S&rsquo;inscrire</Link>
            </li>
            <li className="p-4 text-4xl text-white">
              <Link href="/login">Se connecter</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
