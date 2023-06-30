import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    ville: "",
    telephone: "",
    password: "",
    passwordConfirm: "",
  });

  // fonction pour vérifier le mot de passe
  const passConfirm = (pass, passConfirm) => {
    if (pass === passConfirm) {
      return true;
    } else {
      return false;
    }
  };

  // fonction pour changer les valeurs de l'objet user
  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // fonction pour envoyer les données de l'objet user à la bdd
  const userRegister = (user) => async () => {
    if (passConfirm(user.password, user.passwordConfirm)) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/register",
          user
        );
        router.push(`/validationPage?email=${encodeURIComponent(user.email)}`);
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
      <div className="min-h-screen bg-lumpink flex  flex-col justify-center items-center px-14">
        <h2 className="text-lumred font-bold text-2xl pb-7 ">
          Vous souhaitez nous rejoindre ?
        </h2>
        <form className="flex flex-col justify-center items-center">
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="nom"
            type="text"
            value={user.nom}
            placeholder="Nom"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="prenom"
            type="text"
            value={user.prenom}
            placeholder="Prénom"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="ville"
            type="text"
            value={user.ville}
            placeholder="Ville"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="telephone"
            type="text"
            value={user.telephone}
            placeholder="Téléphone"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="password"
            type="password"
            value={user.password}
            placeholder="Créer un mot de passe*"
            onChange={handleChangeUser}
          />
          <input
            className="mb-3 px-8 py-2 rounded-lg text-lumpink placeholder-lumpink"
            name="passwordConfirm"
            type="password"
            value={user.passwordConfirm}
            placeholder="Répète ton mot de passe*"
            onChange={handleChangeUser}
          />
        </form>
        <label className="text-lumblue pb-4">
          <input type="checkbox" className="" style={{ transform: 'scale(1.2)'}}/>
          J&rsquo;accepte que les informations saisies dans ce formulaire soient
          utilisées pour permettre de me recontacter.
        </label>

        <button
          className=" border-2 border-lumblue font-bold rounded-[50px] py-3 px-6  bg-lumblue text-lumpink"
          onClick={userRegister(user)}
        >
          S'inscrire
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Register;
