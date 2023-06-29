import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

import Link from "next/link";

const home = () => {
  return (
    <div className="bg-lumpink relative h-screen flex flex-col items-center">
      <div className="flex w-full justify-between mb-12 mt-8">
        <div className="h-10 w-10 bg-lumpink mx-3"></div>
        <Link href="/home">
          <Image
            className="object-contain"
            src="/img/mobile/smalmoblogo.png"
            width={113}
            height={24}
            alt="Logo du site web Teameal"
          />
        </Link>
        <Image
          className=" mx-3"
          src="/img/mobile/settings.png"
          width={40}
          height={40}
          alt="parametres"
        />
      </div>
      <div className="">
        <Image
          src="/img/mobile/card.png"
          width={342}
          height={494}
          alt="Logo du site web Teameal"
        />
      </div>
      <div className="flex mt-8">
        <button class="bg-lumred rounded-lg px-5 py-3.5 mr-7">
          <ImCross size={30} color="white" />
        </button>
        <button class="bg-lumblue rounded-lg px-5 py-2.5">
          <AiFillHeart size={30} color="white" />
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
  );
};

export default home;
