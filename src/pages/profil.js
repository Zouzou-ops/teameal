import { getStore, removeStore } from "./store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <ul>
        <li>{user.prenom}</li>
        <li>{user.nom}</li>
        <li>{user.email}</li>
        <li>{user.ville}</li>
      </ul>
      <Link href="/updateUser">
        <button>Modifier</button>
      </Link>

      <button onClick={deleteUser}>Supprimer</button>
    </>
  );
};

export default Profil;
