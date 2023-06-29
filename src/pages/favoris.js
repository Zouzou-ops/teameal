import { useRouter } from "next/router";
import RedirectMessage from "@/components/RedirectMessage";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const favoris = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;
  return (
    <div>
      {!isDesktop && (
        <>
          <div className="bg-lumpink min-h-screen">
            <div className="flex justify-center items-center">
              <Image
                className="object-contain py-8 "
                src="/img/mobile/smalmoblogo.png"
                width={113}
                height={24}
                alt="Logo du site web Teameal"
              />
            </div>
            <p className="font-bold text-2xl text-lumblue text-left pl-4">
              Les adresses{" "}
              <span className="text-white span-tendances">tendances</span>
            </p>
            <div>
              <Image
                className="object-contain "
                src="/img/mobile/premium.png"
                width={700}
                height={400}
                alt="image floue de l'adresse"
              />
              <Image
                className="object-contain "
                src="/img/mobile/premium2.png"
                width={700}
                height={400}
                alt="image floue de l'adresse"
              />
            </div>
            <div className="flex justify-center items-center pt-6">
              <button className="text-lumpink font-bold bg-lumblue rounded-md px-24 py-3 mb-10">
                Passez PREMIUM
              </button>
            </div>
            <nav className="absolute inset-x-0 bottom-0 h-20 mb-5 w-screen border-t-2 flex justify-evenly border-lumdarkpink">
              <button>
                <Link href="/home">
                  <Image
                    src="/img/mobile/home.png"
                    width={30}
                    height={30}
                    alt="Logo du site web Teameal"
                  />
                </Link>
              </button>
              <button>
                {" "}
                <Link href="/favoris">
                  <AiFillHeart size={30} />
                </Link>
              </button>
              <button>
                {" "}
                <Link href="/message">
                  <FiMessageCircle size={30} />
                </Link>
              </button>
              <button>
                <Link href="/profil">
                  {" "}
                  <AiOutlineUser size={30} />
                </Link>
              </button>
            </nav>
          </div>
        </>
      )}
      {isDesktop && <RedirectMessage />}{" "}
      {/* Display redirect message for desktop users */}
    </div>
  );
};

export default favoris;
