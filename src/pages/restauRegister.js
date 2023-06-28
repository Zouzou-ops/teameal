import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    nom: "",
    email: "",
    adresse: "",
    telephone: "",
    message: "",
  });

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const userRegister = (user) => async () => {
    if (passConfirm(user.password, user.passwordConfirm)) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/register",
          user
        );
        router.push("/test");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Les mots de passe ne sont pas identiques");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-lumblue flex  flex-col justify-center items-center">
        <h2 className="text-lumpink font-bold text-2xl pb-10">
          Vous êtes restaurateur ?
        </h2>
        <form className="flex flex-col justify-center items-center">
          <input
            className="mb-5 rounded-md"
            name="nom"
            type="text"
            value={user.nom}
            placeholder="Nom de l'enseigne"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5 rounded-md"
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5 rounded-md"
            name="ville"
            type="text"
            value={user.adresse}
            placeholder="Adresse"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5 rounded-md"
            name="telephone"
            type="text"
            value={user.telephone}
            placeholder="Téléphone"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5 rounded-md h-40 flex content-start"
            name="message"
            type="text"
            value={user.password}
            placeholder="Votre message"
            onChange={handleChangeUser}
          />
        </form>
        <p className="text-lumpink font-medium">
          J&rsquo;accepte que les informations saisies dans ce formulaire soient
          utilisées pour permettre de me recontacter.
        </p>
        <button onClick={userRegister(user)}>Contactez nous</button>
      </div>
      <Footer />
    </>
  );
};

export default Register;
