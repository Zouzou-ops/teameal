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
      <div className="min-h-screen bg-lumpink flex  flex-col justify-center items-center">
        <h2 className="text-lumred font-bold text-2xl pb-10">
          Vous souhaitez nous rejoindre ?
        </h2>
        <form className="flex flex-col justify-center items-center">
          <input
            className="mb-5"
            name="nom"
            type="text"
            value={user.nom}
            placeholder="Nom"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="prenom"
            type="text"
            value={user.prenom}
            placeholder="Prénom"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="ville"
            type="text"
            value={user.ville}
            placeholder="Ville"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="telephone"
            type="text"
            value={user.telephone}
            placeholder="Téléphone"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="password"
            type="password"
            value={user.password}
            placeholder="Créer un mot de passe*"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5"
            name="passwordConfirm"
            type="password"
            value={user.passwordConfirm}
            placeholder="Répète ton mot de passe*"
            onChange={handleChangeUser}
          />
        </form>
        <p>
          J&rsquo;accepte que les informations saisies dans ce formulaire soient
          utilisées pour permettre de me recontacter.
        </p>

        <button onClick={userRegister(user)}>S'inscrire</button>
      </div>
      <Footer />
    </>
  );
};

export default Register;
