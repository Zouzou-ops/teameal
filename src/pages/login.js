import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { getStore, removeStore, setStore } from "./store";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      errors.length === 0 && user.email !== "" && user.password !== ""
    );
  }, [errors, user]);

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors([]); // Clear errors when the user makes changes
  };

  const userLogin = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        user
      );
      if (response.data.msg === "login successfully") {
        setStore(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/home");
        console.log(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  const handleLogin = async () => {
    if (isFormValid) {
      await userLogin(user);
    } else {
      // Check for errors before submitting
      if (user.email === "") {
        setErrors([{ msg: "Email field is required." }]);
      }
      if (user.password === "") {
        setErrors([{ msg: "Password field is required." }]);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-lumpink flex flex-col justify-center items-center">
        <Image
          src="/img/mobile/logomob.png"
          width={199}
          height={43}
          alt="Logo du site web Teameal"
        />
        <p className="text-lumblue font-regular text-xs pb-52">
          À la recherche du match culinaire parfait !
        </p>
        {/* Display validation errors, if any */}
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="text-red-500">
                {error.msg}
              </p>
            ))}
          </div>
        )}
        <form className="flex flex-col justify-center items-center">
          <input
            className="mb-2.5 px-8 py-2.5 rounded-lg text-left text-lumpink placeholder-lumpink"
            name="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChangeUser}
          />
          <input
            className="mb-5 px-8 py-2.5 rounded-lg text-lumpink placeholder-lumpink"
            name="password"
            type="password"
            value={user.password}
            placeholder="********"
            onChange={handleChangeUser}
          />
        </form>
        {/* Render the button conditionally */}
        <button
          onClick={handleLogin}
          className={`bg-lumblue text-lumpink font-bold rounded-lg px-16 py-3 ${
            isFormValid ? "" : "cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Login;
