import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="steps" className="bg-lumwhite relative pb-28">
        <div>
          <h2 className="text-lumblue font-bold text-4xl md:text-3xl px-16 py-24">
            En seulement <span className="text-white px-3 py-1 span-3">3</span>{" "}
            étapes
          </h2>

          <div className="flex md:flex-col justify-center md:items-center gap-x-10 pb-10 px-14">
            <div className="flex flex-col items-center w-full lg:w-1/3">
              <Image
                width={176}
                height={122}
                src="/img/lp/step-1.svg"
                alt="Pictogramme de téléphone"
              />
              <p className="text-center text-lumblue pt-4">
                Créé ton <span className="text-lumred">profil</span>
              </p>
            </div>
            <Image
              width={80}
              height={72}
              className="self-center md:py-16 md:block hidden md:transform rotate-90"
              src="/img/lp/blueline.png"
              alt="image d'une ligne bleu"
            />
            <Image
              width={70}
              height={72}
              className="self-center md:py-16 md:hidden"
              src="/img/lp/blueline.png"
              alt="image d'une ligne bleu"
            />
            <div className="flex flex-col items-center  w-full lg:w-1/3">
              <Image
                width={87.64}
                height={119.85}
                src="/img/lp/step-2.svg"
                alt="Pictogramme d'une boisson"
              />
              <p className="text-center text-lumblue pt-4">
                Trouve le <span className="text-lumred">match</span> parfait
              </p>
            </div>
            <Image
              width={80}
              height={72}
              className="self-center md:py-16 md:block hidden md:transform rotate-90"
              src="/img/lp/blueline.png"
              alt="image d'une ligne bleu"
            />
            <Image
              width={70}
              height={72}
              className="self-center md:py-16 md:hidden"
              src="/img/lp/blueline.png"
              alt="image d'une ligne bleu"
            />
            <div className="flex flex-col items-center lg:w-1/3">
              <Image
                width={248}
                height={122.61}
                src="/img/lp/step-3.svg"
                alt="Pictogramme de deux bières"
              />
              <p className="text-center text-lumblue pt-4">
                <span className="text-lumred">Rencontres </span>d&rsquo;autres
                personnes et passe un dîner innatendu !
              </p>
            </div>
          </div>

          <div className="relative ">
            <Link href="/register">
              <button className="absolute border-2 border-lumred font-bold rounded-[50px] py-3 px-6  bg-lumpink text-lumred  top-[65%] lg:left-[45%] left-[30%]">
                Inscrivez vous
              </button>
            </Link>
            <Image
              width={150.99}
              height={32}
              className="w-full md:hidden "
              src="/img/lp/pinkline.svg"
              alt="image d'une ligne rose"
            />
          </div>
        </div>
      </section>

      <section
        id="etablissements"
        className=" bg-etab bg-no-repeat bg-cover pb-20  "
      >
        <h3 className="text-white font-bold text-4xl md:text-3xl md:pb-6 pt-24 md:pt-10 px-20 md:px-12 pb-7">
          Quelques établissements
        </h3>
        <p className="text-white font-medium pb-7 md:pb-10 px-20 md:px-12 w-1/2 md:w-full">
          Découvrez nos restaurants partenaires et rejoignez-nous pour mettre le
          votre en avant. Attirez de nouveaux clients et faites briller votre
          restaurant avec Teameal !
        </p>

        <div className="flex md:justify-normal justify-center space-x-7 md:overflow-x-auto pl-10  ">
          <Image
            width={243.47}
            height={335}
            src="/img/lp/restaurant1.svg"
            alt="Photo de la devanture du restaurant Prunier"
          />
          <Image
            width={243.47}
            height={32}
            src="/img/lp/restaurant2.svg"
            alt="Photo de la devanture du restaurant Baobar"
          />
          <Image
            width={243.47}
            height={32}
            src="/img/lp/restaurant3.svg"
            alt="Photo de la devanture du fast-food East Side Burger"
          />
          <Image
            width={243.47}
            height={32}
            src="/img/lp/restaurant4.svg"
            alt="Photo de la devanture du restaurant Le Consulat"
          />
        </div>
      </section>

      <section
        id="partenaires"
        className=" bg-lumwhite flex md:flex-col px-20 md:px-10 pb-20 "
      >
        <div className=" w-1/2 md:w-full">
          <h4 className="text-lumblue font-bold  text-4xl md:text-3xl md:pb-6 pt-24 md:pt-10 px-20 md:px-12 pb-7">
            Nos partenaires
          </h4>
          <p className="text-lumblue font-medium pb-7 md:pb-10 px-20 md:px-12  md:w-full">
            Gérant d&rsquo;un restaurant, vous souhaitez{" "}
            <span className="text-lumred">faire connaître</span> votre
            établissement à une communauté{" "}
            <span className="text-lumred">passionnée</span> de découvertes
            culinaires ?
          </p>
          <p className="text-lumblue font-medium pb-7 md:pb-10 px-20 md:px-12  md:w-full">
            Rejoignez <span className="text-lumred">Teameal</span> dès
            maintenant et mettez en valeur votre restaurant, attirez de nouveaux
            clients et créez des{" "}
            <span className="text-lumred">
              expériences culinaires inoubliables
            </span>
            .
          </p>

          <Link href="/restauRegister">
            <button className=" border-2 border-lumblue font-bold rounded-[50px] py-3 px-6 ml-20 mb-10 bg-lumpink text-lumblue">
              Devenez partenaire
            </button>
          </Link>
        </div>
        <div className="  grid grid-cols-2 mt-20 md:mt-0 pl-44 md:pl-0 self-center items-center w-1/2 md:w-full gap-10 ">
          <Link href="https://www.hippopotamus.fr/">
            <Image
              width={198}
              height={69}
              src="/img/lp/hippopotamus.svg"
              alt="logo du restaurant Hippopotamus"
            />
          </Link>
          <Link href="https://prunier.com/fr/">
            <Image
              width={170}
              height={96}
              src="/img/lp/prunier.svg"
              alt="logo du restaurant Prunier"
            />
          </Link>
          <Link href="https://www.pandapandagroup.com/baobar/">
            <Image
              width={176}
              height={40}
              src="/img/lp/baobar.svg"
              alt="logo du restaurant Baobar"
            />
          </Link>
          <Link href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d3735287-Reviews-East_Side_Burgers-Paris_Ile_de_France.html">
            <Image
              className="ml-7"
              width={116}
              height={118}
              src="/img/lp/eastside.svg"
              alt="logo du restaurant fast-food East Side Burger"
            />
          </Link>
        </div>
      </section>
      <section id="newsletter"></section>
      <Footer />
    </>
  );
}
