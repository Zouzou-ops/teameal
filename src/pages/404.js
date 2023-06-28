import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div className=" bg-home min-h-screen flex flex-col items-center justify-center text-lumred font-medium text-xl">
        <div className="error-img md:hidden"></div>
        <div className="error-phone-img md:block hidden"></div>
        <p className="font-medium pt-10">Oops ! Vous vous êtes perdu ?</p>
      </div>
      <Footer />
    </>
  );
}
