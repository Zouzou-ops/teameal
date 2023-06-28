import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ValidationPage() {
  const router = useRouter();
  const { email } = router.query;

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-52">
        <h2 className="text-lumred font-bold text-3xl">
          Bienvenue dans la Team !
        </h2>
        <p className=" text-lumred font-regular">
          Un mail t&rsquo;a été envoyé à l&rsquo;adresse suivante : {email}
        </p>
      </div>
      <Footer />
    </>
  );
}
