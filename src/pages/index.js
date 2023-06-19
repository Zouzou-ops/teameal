import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Teameal</title>
                <meta name="description" content="Teameal" />
                <link rel="icon" href="favicon.svg" />
            </Head>

            <Hero />
            <section id="steps" className="bg-lumwhite px-16 py-24 relative ">
                <h2 className="text-4xl md:text-3xl pb-24">En seulement 3 étapes</h2>

                <div className="flex md:flex-col justify-center  gap-x-10">
                    <Image
                        width={150.99}
                        height={32}
                        src="/img/step1.png"
                        alt="step1" />
                    <Image
                        width={150.99}
                        height={32}
                        className="self-center md:py-16 md:block hidden md:transform rotate-90"
                        src="/img/blueline.png"
                        alt="" />
                    <Image
                        width={150.99}
                        height={32}
                        className="self-center md:py-16 md:hidden"
                        src="/img/blueline.png"
                        alt="" />
                    <Image
                        width={150.99}
                        height={32}
                        src="/img/step2.png"
                        alt="step2" />
                    <Image
                        width={150.99}
                        height={32}
                        className="self-center md:py-16 md:block hidden md:transform rotate-90"
                        src="/img/blueline.png"
                        alt="" />
                    <Image
                        width={150.99}
                        height={32}
                        className="self-center md:py-16 md:hidden"
                        src="/img/blueline.png" 
                        alt="" />
                    <Image
                        width={150.99} 
                        height={32}
                        src="/img/step3.png"
                        alt="step3" />
                </div>

                <div className=" flex justify-center pt-16 ">
                    <Image width={150.99} height={32} className=" absolute  w-screen " src="pinkline.svg" alt="" />

                    {/* Bouton Inscrivez-vous */}
                    <div className="md:hidden py-28">
                        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumred rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-lumred duration-300 -translate-x-full bg-lumpink group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full bg-lumpink text-lumred transition-all duration-300 transform group-hover:translate-x-full ease">Inscrivez-vous</span>
                            <span class="relative invisible">Inscrivez-vous</span>
                        </a>
                    </div>
                </div>


            </section>

            <section id="establishment" className=" bg-etab bg-no-repeat bg-cover pb-20  " >
                <h3 className="text-4xl md:text-3xl md:pb-6 pt-24 md:pt-10 px-20 md:px-12 pb-7">Quelques établissements</h3>
                <p className="pb-7 md:pb-10 px-20 md:px-12 w-1/2 md:w-full">Découvrez nos restaurants partenaires et rejoignez-nous pour mettre le votre en avant. Attirez de nouveaux clients et faites briller votre restaurant avec Teameal !</p>

                <div className="flex md:justify-normal justify-center space-x-7 md:overflow-x-auto pl-10  ">
                    <Image width={243.47} height={335} src="/img/restaurant1.png" alt="" />
                    <Image width={150.99} height={32} src="/img/restaurant2.png" alt="" />
                    <Image width={150.99} height={32} src="/img/restaurant3.png" alt="" />
                    <Image width={150.99} height={32} src="/img/restaurant4.png" alt="" />
                </div>
            </section>

            <section id="partners" className=" bg-lumwhite flex md:flex-col px-20 md:px-10 pb-20 ">
                <div className=" w-1/2 md:w-full">
                    <h4 className="text-4xl md:text-3xl md:pb-6 pt-24 md:pt-10 px-20 md:px-12 pb-7">Nos partenaires</h4>
                    <p className="pb-7 md:pb-10 px-20 md:px-12  md:w-full">Gérant d&rsquo;un restaurant, vous souhaitez faire connaître votre établissement à une communauté passionnée de découvertes culinaires ?</p>
                    <p className="pb-7 md:pb-10 px-20 md:px-12  md:w-full">Rejoignez Teameal dès maintenant et mettez en valeur votre restaurant, attirez de nouveaux clients et créez des expériences culinaires inoubliables.</p>

                    {/* Bouton Devenez partenaire */}
                    <div className="md:hidden px-20">
                        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-lumblue rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-lumblue duration-300 -translate-x-full bg-lumpink group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full bg-lumpink text-lumblue transition-all duration-300 transform group-hover:translate-x-full ease">Devenez partenaire</span>
                            <span class="relative invisible">Devenez partenaire</span>
                        </a>
                    </div>

                </div>
                <div className="  grid grid-cols-2 mt-20 md:mt-0 pl-44 md:pl-0 self-center items-center w-1/2 md:w-full gap-10 ">
                    <Image width={150.99} height={32} src="/img/part1.svg" alt="" />
                    <Image width={150.99} height={32} src="/img/part2.svg" alt="" />
                    <Image width={150.99} height={32} src="/img/part3.svg" alt="" />
                    <Image width={150.99} height={32} src="/img/part4.svg" alt="" />
                </div>
            </section>

            <section id="newsletter">

            </section>
            <Footer />
        </>
    );
};


