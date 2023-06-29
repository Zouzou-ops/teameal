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

          {/* Bouton S&rsquo;inscrire */}
          <div className="md:hidden">
            <Link
              href="/register"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumblue rounded-full group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lumblue group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full bg-lumblue text-lumpink font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                S&rsquo;inscrire
              </span>
              <span className="relative invisible">S&rsquo;inscrire</span>
            </Link>

            <Link
              href="/login"
              className="relative inline-flex items-center justify-center mx-8 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumblue rounded-full group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lumblue group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full bg-lumblue text-lumpink font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                Se connecter
              </span>
              <span className="relative invisible">Se connecter</span>
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
