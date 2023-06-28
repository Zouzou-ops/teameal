import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

const updateUser = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const [regimeTest, setRegimeTest] = useState(false);
  const [restrictionTest, setRestrictionTest] = useState(false);
  const [allergiesTest, setAllergiesTest] = useState(false);

  const [newUser, setNewUser] = useState({
    nom: "",
    prenom: "",
    age: "",
    ville: "",
    telephone: "",
    genre: "",
    regime: "",
    restriction: "",
    offre: "",
    allergies: "",
    recommandations: "",
  });

  const handleChangeUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const userUpdate = async () => {
    try {
      setUser(newUser);
      const response = await axios.put(
        `http://localhost:5000/api/user/update/${user._id}`,
        newUser
      );

      localStorage.setItem("user", JSON.stringify(response.data.newUser));
      console.log(newUser);
      router.push("/profil");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-lumblue min-h-screen px-8">
      <div className="flex w-full justify-between items-center py-10">
        <Link href="/profil">
          <BsFillArrowLeftCircleFill size={36} />
        </Link>
        <h2 className="text-lumpink font-semibold">Changement du profil</h2>
        <div className="h-9 w-9 bg-lumblue"></div>
      </div>
      <p className="text-lumpink font-medium text-center pb-4">
        Tout les informations doivent être reprises afin de pouvoir les
        enregistrer !
      </p>
      <form className="flex flex-col  justify-center items-center">
        <input
          className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink"
          name="nom"
          type="text"
          value={newUser.nom}
          placeholder="Nom"
          onChange={handleChangeUser}
        />
        <input
          className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink "
          name="prenom"
          type="text"
          value={newUser.prenom}
          placeholder="Prénom"
          onChange={handleChangeUser}
        />
        <input
          className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink"
          name="age"
          value={newUser.age}
          type="text"
          placeholder="Âge"
          onChange={handleChangeUser}
        />
        <input
          className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink"
          name="ville"
          type="text"
          value={newUser.ville}
          placeholder="Ville"
          onChange={handleChangeUser}
        />
        <input
          className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink"
          name="telephone"
          type="text"
          value={newUser.telephone}
          placeholder="Téléphone"
          onChange={handleChangeUser}
        />
      </form>

      {/* Buttons genre */}
      <div className="flex justify-around py-10">
        <button
          className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
          onClick={() => {
            setNewUser({ ...newUser, genre: "homme" });
          }}
        >
          Homme
        </button>
        <button
          className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
          onClick={() => {
            setNewUser({ ...newUser, genre: "femme" });
          }}
        >
          Femme
        </button>
        <button
          className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
          onClick={() => {
            setNewUser({ ...newUser, genre: "autres" });
          }}
        >
          Autres
        </button>
      </div>
      {/* Buttons regime */}
      <div>
        <p className="text-lumpink font-medium text-center">
          Avez-vous un régime alimentaire ?
        </p>
        <div className="flex justify-around pb-10 pt-4">
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setRegimeTest(true);
            }}
          >
            Oui
          </button>
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setRegimeTest(false);
            }}
          >
            Non
          </button>
        </div>
        {regimeTest && (
          <div>
            <p className="text-lumpink font-medium text-center">
              Si oui, lequel ?
            </p>
            <input
              className="mb-5 rounded-md"
              name="regime"
              type="text"
              value={newUser.regime}
              placeholder="Mon régime alimentaire..."
              onChange={handleChangeUser}
            />
          </div>
        )}
      </div>
      {/* Restrictions */}
      <div>
        <p className="text-lumpink font-medium text-center">
          Avez-vous des restrictions ?
        </p>
        <div className="flex justify-around pb-10 pt-4">
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setRestrictionTest(true);
            }}
          >
            Oui
          </button>
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setRestrictionTest(false);
            }}
          >
            Non
          </button>
        </div>
        {restrictionTest && (
          <div>
            <p className="text-lumpink font-medium text-center">
              Si oui, lesquelles ?
            </p>
            <input
              className="mb-5 rounded-md pb-10 pt-4"
              name="restriction"
              type="text"
              value={newUser.restriction}
              placeholder="Mes restrictions sont..."
              onChange={handleChangeUser}
            />
          </div>
        )}
      </div>

      {/* offre et Allergie */}
      <div>
        <div className="flex flex-col ">
          <p className="text-lumpink font-medium text-center">
            Seriez-vous intéressé(e) par des offres spéciales, des promotions ou
            des réductions sur les restaurants partenaires de l'application ?
          </p>
          <div className="flex justify-around pb-10 pt-4">
            <button
              className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
              onClick={() => {
                setNewUser({ ...newUser, offre: true });
              }}
            >
              Oui
            </button>
            <button
              className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
              onClick={() => {
                setNewUser({ ...newUser, offre: false });
              }}
            >
              Non
            </button>
          </div>
          <p className="text-lumpink font-medium text-center">
            Avez-vous des allergies alimentaires ?
          </p>
          <div className="flex justify-around pb-10 pt-4">
            <button
              className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
              onClick={() => {
                setAllergiesTest(true);
              }}
            >
              Oui
            </button>
            <button
              className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
              onClick={() => {
                setAllergiesTest(false);
                setNewUser({ ...newUser, allergies: "" });
              }}
            >
              Non
            </button>
          </div>
        </div>
        {allergiesTest && (
          <div>
            <p className="text-lumpink font-medium text-center">
              Si oui, veuillez préciser les allergies alimentaires dont vous
              souffrez.
            </p>
            <input
              className="mb-5 rounded-md"
              name="allergies"
              type="text"
              value={newUser.allergies}
              placeholder="Mon régime alimentaire..."
              onChange={handleChangeUser}
            />
          </div>
        )}
      </div>
      {/* recommandations */}
      <div className="flex flex-col">
        <p className="text-lumpink font-medium text-center">
          Souhaitez-vous recevoir des recommandations personnalisées de
          restaurants et de plats en fonction de vos préférences et de votre
          historique de commande ?
        </p>
        <div className="flex justify-around pb-10 pt-4">
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setNewUser({ ...newUser, recommandations: true });
            }}
          >
            Oui
          </button>
          <button
            className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
            onClick={() => {
              setNewUser({ ...newUser, recommandations: false });
            }}
          >
            Non
          </button>
        </div>
        <button
          className="text-lumpink bg-white rounded-md px-2.5 py-0.5 mb-10 mx-auto flex"
          onClick={userUpdate}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default updateUser;
