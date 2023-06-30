// import { getStore, removeStore } from "./store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { AiFillHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Profil = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const deleteUser = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/user/delete/${user._id}`
      );
      if (result.data.user !== "") {
        removeStore();
        localStorage.removeItem("token");
        console.log("delete success");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-lumpink">
        <div className="w-full flex items-center justify-center">
          <Image
            className="py-10"
            src="/img/pp.png"
            alt="Photo de profil"
            width={76}
            height={79}
          />
        </div>
        <ul className="text-lumblue text-2xl flex flex-col justify-center items-center pb-20">
          <li>{user.nom}</li>
          <li>{user.prenom}</li>
          <li>{user.mail}</li>
          <li>{user.telephone}</li>
          <li>{user.age}</li>
          <li>{user.regime}</li>
          <li>{user.restriction}</li>
          <li>{user.allergies}</li>
        </ul>
        <div className=" flex justify-center gap-10 ">
          <Link href="/updateUser">
            <button className="text-white bg-lumblue rounded-md px-2.5 py-0.5 mb-10 ">
              Modifier
            </button>
          </Link>
          <Link href="/">
            <button
              className="text-white bg-lumblue rounded-md px-2.5 py-0.5 mb-10 "
              onClick={deleteUser}
            >
              Supprimer
            </button>
          </Link>
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
              <AiFillHeart size={30} />
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
      </div>
    </>
  );
};

export default Profil;
