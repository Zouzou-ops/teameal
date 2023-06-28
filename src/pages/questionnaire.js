import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const questionnaire1 = () => {
  const [loginPage, setloginPage] = useState(true);
  const [questionnaire1, setQuestionnaire1] = useState(false);
  const [questionnaire2, setQuestionnaire2] = useState(false);
  const [questionnaire3, setQuestionnaire3] = useState(false);
  const [questionnaire4, setQuestionnaire4] = useState(false);
  const [questionnaire5, setQuestionnaire5] = useState(false);
  const [questionnaire6, setQuestionnaire6] = useState(false);

  const [regimeTest, setRegimeTest] = useState(false);

  const [restrictionTest, setRestrictionTest] = useState(false);

  const [newUser, setNewUser] = useState({
    prenom: "",
    nom: "",
    age: "",
    email: "",
    telephone: "",
    ville: "",
    genre: "",
    regime: "",
    restriction: "",
    platsfavoris: [],
  });

  const [checkedItems, setCheckedItems] = useState([]);
  const [cuisineChecked, setCuisineChecked] = useState(false);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  const addPlats = (list) => {
    const updatedUser = { ...newUser };
    updatedUser.platsfavoris = list;
    setNewUser(updatedUser);
  };

  const addComment = (list) => {
    const updatedUser = { ...newUser };
    updatedUser.comment = list;
    setNewUser(updatedUser);
  };

  const handleChangeUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  //   const handleChangePlats = (e) => {
  //     setNewPlat(e.target.value);
  //   };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (checkedItems.includes(value)) {
      // Si l'élément est déjà coché, on le retire de la liste des éléments cochés
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      // Sinon, on l'ajoute à la liste des éléments cochés
      setCheckedItems([...checkedItems, value]);
    }
  };
  const handleCheckboxChangeComment = (event) => {
    const value = event.target.value;

    if (comments.includes(value)) {
      // Si l'élément est déjà coché, on le retire de la liste des éléments cochés
      setComments(comments.filter((item) => item !== value));
    } else {
      // Sinon, on l'ajoute à la liste des éléments cochés
      setComments([...comments, value]);
    }
  };

  const [offre, setOffre] = useState(true);
  const [allergiesTest, setAllergiesTest] = useState(false);

  const userUpdate = () => async () => {
    try {
      addPlats(checkedItems);
      setUser(newUser);
      const response = await axios.put(
        `http://localhost:5000/api/user/update/${user._id}`,
        newUser
      );
      router.push("/mobile/home");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loginPage && (
        <div>
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
                value={newUser.nom}
                placeholder="Nom"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="prenom"
                type="text"
                value={newUser.prenom}
                placeholder="Prénom"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="email"
                type="email"
                value={newUser.email}
                placeholder="Email"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="password"
                type="password"
                value={newUser.password}
                placeholder="Créer un mot de passe*"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="passwordConfirm"
                type="password"
                value={newUser.passwordConfirm}
                placeholder="Répète ton mot de passe*"
                onChange={handleChangeUser}
              />
            </form>
            <p>
              J&rsquo;accepte que les informations saisies dans ce formulaire
              soient utilisées pour permettre de me recontacter.
            </p>

            <button
              onClick={() => {
                setloginPage(false);
                setQuestionnaire1(true);
                console.log(newUser);
              }}
            >
              S'inscrire
            </button>
          </div>
          <Footer />
        </div>
      )}
      {/* test */}
      {questionnaire1 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">1/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <p className="text-lumpink font-medium">Mieux vous connaîtres</p>
          <div>
            <form className="flex flex-col justify-center items-center">
              <input
                className="mb-5"
                name="age"
                value={newUser.age}
                type="text"
                placeholder="Âge"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="telephone"
                type="text"
                value={newUser.telephone}
                placeholder="Téléphone"
                onChange={handleChangeUser}
              />
              <input
                className="mb-5"
                name="ville"
                type="text"
                value={newUser.ville}
                placeholder="Ville"
                onChange={handleChangeUser}
              />
            </form>
            <p className="text-lumpink font-medium">Genre</p>
            <div className="flex justify-around">
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
            <div className="flex justify-center items-center pt-10">
              <button
                className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
                onClick={() => {
                  setQuestionnaire1(false);
                  setQuestionnaire2(true);
                  console.log(newUser);
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      )}
      {questionnaire2 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">2/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <div className="flex flex-col">
            <p className="text-lumpink font-medium">
              Avez-vous un régime alimentaire ?
            </p>
            <div className="flex justify-around">
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
                <p className="text-lumpink font-medium">Si oui, lequel ?</p>
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

            <p className="text-lumpink font-medium">
              Avez-vous des restrictions ?
            </p>

            <div className="flex justify-around">
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
          </div>
          {restrictionTest && (
            <div>
              <p className="text-lumpink font-medium">Si oui, lesquelles ?</p>
              <input
                className="mb-5 rounded-md"
                name="restriction"
                type="text"
                value={newUser.restriction}
                placeholder="Mes restrictions sont..."
                onChange={handleChangeUser}
              />
            </div>
          )}
          <div className="flex justify-center items-center pt-10">
            <button
              className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
              onClick={() => {
                setQuestionnaire2(false);
                setQuestionnaire3(true);
                console.log(newUser);
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
      {questionnaire3 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">3/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <div className="flex flex-col">
            <p className="text-lumpink font-medium">
              Quels types de plats préférez-vous ?
            </p>
            <p>Cochez toutes les options qui s&rsquo;appliquent</p>
          </div>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Cuisine locale et traditionnelle "
                  checked={checkedItems.includes(
                    "Cuisine locale et traditionnelle "
                  )}
                  onChange={handleCheckboxChange}
                />
                Cuisine locale et traditionnelle
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="cuisine internationale"
                  checked={checkedItems.includes("cuisine internationale")}
                  onChange={handleCheckboxChange}
                />
                Cuisine internationale
              </label>
              {/* {cuisineChecked && (
                <div>
                  <p className="text-lumpink font-medium">Si oui, lequel ?</p>
                  <input
                    className="mb-5 rounded-md"
                    type="text"
                    value={newPlat}
                    placeholder="Précisez lesquels..."
                    onChange={handleChangePlats}
                  />
                </div>
              )} */}
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Plats végétariens/végétaliens "
                  checked={checkedItems.includes(
                    "Plats végétariens/végétaliens "
                  )}
                  onChange={handleCheckboxChange}
                />
                Plats végétariens/végétaliens
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Plats de fruits de mer"
                  checked={checkedItems.includes("Plats de fruits de mer")}
                  onChange={handleCheckboxChange}
                />
                Plats de fruits de mer
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Plats de viande "
                  checked={checkedItems.includes("Plats de viande ")}
                  onChange={handleCheckboxChange}
                />
                Plats de viande
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Plats sucrés/desserts "
                  checked={checkedItems.includes("Plats sucrés/desserts ")}
                  onChange={handleCheckboxChange}
                />
                Plats sucrés/desserts
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checkedItems
                  value="Plats épicés "
                  checked={checkedItems.includes("Plats épicés ")}
                  onChange={handleCheckboxChange}
                />
                Plats épicés
              </label>
            </li>
          </ul>
          <p>Autres</p>
          {/* <input
            className="mb-5 rounded-md"
            type="text"
            value={newUser.typesdeplats}
            placeholder="Précisez lesquels..."
            onChange={handleChangeUser}
          /> */}

          <div className="flex justify-center items-center pt-10">
            <button
              className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
              onClick={() => {
                setQuestionnaire3(false);
                setQuestionnaire4(true);
                addPlats(checkedItems);
                console.log(checkedItems);
                console.log(newUser);
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
      {questionnaire4 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">4/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <div className="flex flex-col">
            <p className="text-lumpink font-medium">
              Seriez-vous intéressé(e) par des offres spéciales, des promotions
              ou des réductions sur les restaurants partenaires de l'application
              ?
            </p>
            <div className="flex justify-around">
              <button
                className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
                onClick={() => {
                  setOffre(true);
                  setNewUser({ ...newUser, offre: true });
                }}
              >
                Oui
              </button>
              <button
                className="text-lumpink bg-white rounded-md px-2.5 py-0.5"
                onClick={() => {
                  setOffre(false);
                  setNewUser({ ...newUser, offre: false });
                }}
              >
                Non
              </button>
            </div>
            <p className="text-lumpink font-medium">
              Avez-vous des allergies alimentaires ?
            </p>

            <div className="flex justify-around">
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
              <p className="text-lumpink font-medium">
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
          <div className="flex justify-center items-center pt-10">
            <button
              className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
              onClick={() => {
                setQuestionnaire4(false);
                setQuestionnaire5(true);
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
      {questionnaire5 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">5/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <div className="flex flex-col">
            <p className="text-lumpink font-medium">
              Souhaitez-vous recevoir des recommandations personnalisées de
              restaurants et de plats en fonction de vos préférences et de votre
              historique de commande ?
            </p>
            <div className="flex justify-around">
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
          </div>
          <div className="flex justify-center items-center pt-10">
            <button
              className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
              onClick={() => {
                setQuestionnaire5(false);
                setQuestionnaire6(true);
                console.log(newUser);
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
      {questionnaire6 && (
        <div className="bg-bluephone min-h-screen">
          <p className="text-white">6/6</p>
          <h2 className="text-lumpink font-semibold">Questionnaire</h2>
          <div className="flex flex-col">
            <p className="text-lumpink font-medium">
              Comment avez-vous connu notre application ?
            </p>
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Publicité en ligne "
                    checked={comments.includes("Publicité en ligne ")}
                    onChange={handleCheckboxChangeComment}
                  />
                  Publicité en ligne
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Recommandation"
                    checked={comments.includes("Recommandation")}
                    onChange={handleCheckboxChangeComment}
                  />
                  Recommandation
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Réseaux sociaux"
                    checked={comments.includes("Réseaux sociaux")}
                    onChange={handleCheckboxChangeComment}
                  />
                  Réseaux sociaux
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Recherche sur internet"
                    checked={comments.includes("Recherche sur internet")}
                    onChange={handleCheckboxChangeComment}
                  />
                  Recherche sur internet
                </label>
              </li>
            </ul>
            <div className="flex justify-center items-center pt-10">
              <button
                className="text-lumblue bg-lumpink rounded-md px-2.5 py-0.5"
                onClick={() => {
                  setQuestionnaire6(false);
                  setQuestionnaire6(true);
                  addComment(comments);
                  console.log(newUser);
                }}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default questionnaire1;
