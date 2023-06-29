import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const message = () => {
  return (
    <>
      <div className="bg-lumpink min-h-screen px-4">
        <div className="flex justify-center items-center">
          <Image
            className="object-contain py-8 "
            src="/img/mobile/smalmoblogo.png"
            width={113}
            height={24}
            alt="Logo du site web Teameal"
          />
        </div>
        <div className="overflow-x-auto flex justify-center items-center pb-10 ">
          <div className="flex flex-col justify-center items-center px-2.5">
            <Image
              className=""
              src="/img/mobile/memoji.png"
              width={40}
              height={40}
              alt="Logo du site web Teameal"
            />
            <p className="font-medium text-gray-800">@Gigabur...</p>
          </div>
          <div className="flex flex-col justify-center items-center px-2.5">
            <Image
              className=""
              src="/img/mobile/memoji 1.png"
              width={40}
              height={40}
              alt="Logo du site web Teameal"
            />
            <p className="font-medium text-gray-800">@Cruellacr...</p>
          </div>
          <div className="flex flex-col justify-center items-center px-2.5">
            <Image
              className="object-contain"
              src="/img/mobile/memoji 2.png"
              width={40}
              height={40}
              alt="Logo du site web Teameal"
            />
            <p className="font-medium text-gray-800">@Edouar...</p>
          </div>
        </div>

        <div className="bg-lumlightpink flex py-2.5 mx-2 pl-2 mb-4 rounded-md">
          <Image
            src="/img/mobile/eastside.png"
            className="object-none rounded-md  "
            width={56}
            height={56}
          />
          <div className=" flex flex-col pl-2 ">
            <div className="flex h-5 space-x-14">
              <p>#EASTSIDEBURGERS</p>
              <p className="text-lumlightgrey">11h21</p>
            </div>
            <div className="flex h-10 items-center ">
              <p className="text-lumlightgrey">
                C&rsquo;est la première fois que...
              </p>
              <Image
                src="/img/mobile/grp1.png"
                className="object-contain rounded-md"
                width={54}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="bg-lumlightpink flex py-2.5 mx-2 pl-2 rounded-md">
          <Image
            src="/img/mobile/prunier.png"
            className="object-none rounded-md  "
            width={56}
            height={56}
          />
          <div className=" flex flex-col pl-2 ">
            <div className="flex h-5 space-x-32">
              <p>#PRUNIER</p>
              <p className="text-lumlightgrey">13h10</p>
            </div>
            <div className="flex h-10 items-center ">
              <p className="text-lumlightgrey">
                Vous avez vue ce qu&rsquo;il nous...
              </p>
              <Image
                src="/img/mobile/grp1.png"
                className="object-contain "
                width={54}
                height={24}
              />
            </div>
          </div>
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
  );
};

export default message;
