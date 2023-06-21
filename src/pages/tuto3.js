import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Tuto() {
    return (
        <>
            <Head>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <link rel="apple-touch-icon" href="/path/to/icon.png"></link>
            </Head>
            <div className="h-screen bg-bluephone bg-cover bg-no-repeat flex flex-col items-center py-16 ">
                <p className="text-white pb-6">3/3</p>
                <Image
                    width={322}
                    height={375}
                    className="pb-10"
                    src="/img/mobile/3-3.png"
                    alt="" /> 
                <Image
                   
                    className="pb-6"
                    width={322}
                    height={375}
                    src="/img/mobile/phonetuto3.svg"
                    alt="Image d'un téléphone portable"
                ></Image>
                <h1 className="text-lumpink font-bold pb-3 text-2xl">L&rsquo;explosion de dopamine !</h1>
                <p className="text-lumpink px-16 text-center pb-16">Convenez une date et rencontrez vous avec les bonnes personnes au bon endroit</p>
                <Link href="/tuto4"> <button class="bg-lumpink text-lumblue font-bold rounded-lg px-16 py-3">Suivant</button>
                </Link>
            </div>
        </>
    );
}



