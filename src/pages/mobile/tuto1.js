import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Tuto() {
  return (
    <>
      <div className="h-screen bg-bluephone bg-cover bg-no-repeat flex flex-col items-center py-16 ">
        <p className="text-white pb-6">1/3</p>
        <Image
          width={322}
          height={375}
          className="pb-10"
          src="/img/mobile/1-3.png"
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
          Créer votre profil
        </h1>
        <p className="text-lumpink px-16 text-center pb-16">
          Des critères bien définis pour des matchs réussis !
        </p>
        <Link href="/tuto2">
          <button class="bg-lumpink text-lumblue font-bold rounded-lg px-16 py-3">
            Suivant
          </button>
        </Link>
      </div>
    </>
  );
}
