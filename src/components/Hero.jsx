import React from "react";
import Image from 'next/image'

function Hero() {
    return (
        <section>
            <div className="bg-home md:h-[50vh] bg-no-repeat bg-cover pt-20 md:px-8 px-20 flex  " >
                <div className="md:w-full w-4/6 flex flex-col justify-center " >
                    <h1 className="md:text-4xl text-6xl text-lumred leading-snug font-bold">À la recherche du match culinaire <span className="span-parfait text-lumpink mx-1 ">parfait</span> ?  </h1>
                    <p className=" text-lumred font-medium text-xl py-10">Une expérience culinaire qui connecte les cœurs affamés autour d&rsquo;une table.</p>

                    {/* Bouton découvrir */}
                    <div className="md:hidden">
                        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumblue rounded-full group">
                            <span class=" absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lumblue group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full bg-lumblue text-lumpink transition-all duration-300 transform group-hover:translate-x-full ease">Découvrir</span>
                            <span class="relative invisible">Découvrir</span>
                        </a>
                    </div>

                </div>
                <div className="md:hidden  w-2/6 ">
                    <Image
                        src="/img/hero/smartphone.png"
                        alt="image d'un telephone portable"
                        width={500}
                        height={580}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;