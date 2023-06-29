import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-foot bg-no-repeat bg-cover flex flex-col items-center py-9">
        <Image
          src="img/footer/logopink.svg"
          width={150.99}
          height={32}
          alt="Logo du footer web Teameal"
        />
        <p className="text-lumpink font-medium pt-5 pb-10">
          À la recherche du match culinaire parfait ?
        </p>
        <div className="flex justify-center space-x-7 ">
          <Link href="https://www.facebook.com/people/Teameal/100093300715273/">
            <BsFacebook style={{ color: "#F7B9D2" }} size={25} />
          </Link>
          <Link href="https://www.linkedin.com/company/teameal/">
            <BsLinkedin style={{ color: "#F7B9D2" }} size={25} />
          </Link>
          <Link href="https://www.instagram.com/teameal.app/">
            <BsInstagram style={{ color: "#F7B9D2" }} size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
