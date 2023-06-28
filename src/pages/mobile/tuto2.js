import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Tuto() {
  return (
    <>
      <div className="h-screen bg-bluephone bg-cover bg-no-repeat flex flex-col items-center py-16 ">
        <p className="text-white pb-6">2/3</p>
        <Image
          width={322}
          height={375}
          className="pb-10"
          src="/img/mobile/2-3.png"
          alt=""
        />
        <Image
          className="pb-6"
          width={322}
          height={375}
          src="/img/mobile/phonetuto1.png"
          alt="Image d'un téléphone portable"
        ></Image>
        <h1 className="text-lumpink font-bold pb-3 text-2xl">
          A vos marques, prêt, matchez !
        </h1>
        <p className="text-lumpink px-16 text-center pb-16">
          C&rsquo;est la ou la magie commence, swippez jusqu&rsquo;a trouver LE
          MATCH !
        </p>
        <Link href="/tuto3">
          <button class="bg-lumpink text-lumblue font-bold rounded-lg px-16 py-3">
            Suivant
          </button>
        </Link>
      </div>
    </>
  );
}
