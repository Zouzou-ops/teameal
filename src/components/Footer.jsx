import Image from 'next/image'
import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsLinkedin  } from 'react-icons/bs';

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
                <p className='text-lumpink font-medium pt-5 pb-10'>À la recherche du match culinaire parfait ?</p>
                <div className='flex justify-center space-x-7 '>
                    <BsFacebook style={{ color: '#F7B9D2' }} size={25} />
                    <BsTwitter style={{ color: '#F7B9D2' }} size={25} />
                    <BsLinkedin style={{ color: '#F7B9D2' }} size={25} />
                    <BsInstagram style={{ color: '#F7B9D2' }} size={25} />
                    <BsTiktok style={{ color: '#F7B9D2' }} size={25} />
                </div>
            </div>

        </>
    );
};

export default Footer;