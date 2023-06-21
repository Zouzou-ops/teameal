import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <nav className="fixed left-0 top-0 w-full z-10 px-16 ">
            <div className="max-[1240px] m-auto flex justify-between items-center p-4 ">
                <Link href="/">
                    <Image src="img/navbar/logo.svg"
                        width={150.99}
                        height={32}
                        alt="Logo du site web Teameal"
                    />
                </Link>
                <ul className=" md:hidden flex text-lumblue space-x-7 font-medium" >
                    <li className="p-4">
                        <Link href="steps">Comment?</Link>
                    </li>
                    <li className="p-4">
                        <Link href="#etablissements">Établissements</Link>
                    </li>
                    <li className="p-4">
                        <Link href="#partenaires">Partenaires</Link>
                    </li>

                    {/* Bouton S&rsquo;inscrire */}
                    <div className="md:hidden">
                        <Link href="/register" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumblue rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lumblue group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full bg-lumblue text-lumpink font-bold transition-all duration-300 transform group-hover:translate-x-full ease">S&rsquo;inscrire</span>
                            <span class="relative invisible">S&rsquo;inscrire</span>
                        </Link>
                    </div>
                </ul>


                {/* Mobile Button */}
                <div onClick={handleNav} className="md:block hidden z-10 ">
                    {/* <button>S&rsquo;inscrire</button> */}
                    {nav ? <AiOutlineClose style={{ color: 'white' }} size={35} /> : <AiOutlineMenu style={{ color: '#0E337D' }} size={35} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex   items-center w-full h-screen bg-blue-700 ease-in duration-300" : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-700 ease-in duration-300"}>
                    <ul>
                        <li className="p-4 text-4xl hover:text-blue-500">
                            <Link href="#comment">Comment ?</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-blue-500">
                            <Link href="#etablissements">Établissements</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-blue-500">
                            <Link href="#partenaires">Partenaires</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;
