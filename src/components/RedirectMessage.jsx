import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RedirectMessage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-lumpink min-h-screen pt-44">
        <h1 className="text-lumblue text-center font-bold text-4xl pt-10">
          Pour profiter d'une meilleur experience, veuillez accéder à cette page
          depuis votre appareil mobile !
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default RedirectMessage;
