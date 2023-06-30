import React from "react";
import Image from "next/image";
import { BsFillFileArrowDownFill } from "react-icons/bs";

function Hero() {
  return (
    <section>
      <div className="bg-home md:h-[50vh]  bg-no-repeat bg-cover pt-24 md:px-8 px-20 flex ">
        <div className="md:w-full w-4/6 flex flex-col justify-center  ">
          <h1 className="md:text-4xl text-6xl text-lumred leading-snug font-bold">
            À la recherche du match culinaire{" "}
            <span className="span-parfait text-lumpink mx-1 ">parfait</span> ?{" "}
          </h1>
          <p className=" text-lumred font-medium text-xl py-10">
            Une expérience culinaire qui connecte les cœurs affamés autour
            d&rsquo;une table.
          </p>

          {/* Bouton découvrir */}
          <div className="md:hidden">
            <button className=" font-bold rounded-[50px] py-3 px-6  bg-lumblue text-lumpink  top-[65%] lg:left-[45%] left-[40%]">
              Découvrir
            </button>
          </div>
        </div>
        <div className="md:hidden  w-2/6 ">
          <Image
            src="/img/hero/smartphone.svg"
            alt="image d'un telephone portable"
            width={500}
            height={580}
          />
        </div>
        <div className="absolute "></div>
      </div>
    </section>
  );
}

export default Hero;
