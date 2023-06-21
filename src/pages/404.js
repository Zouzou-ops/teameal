import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Custom404() {
    return (
        <>
            <Navbar />
            <div className=' bg-home h-screen flex flex-col items-center justify-center text-lumred font-medium text-xl'>
                    <Image                    
                        width={322}
                        height={375}
                        className="pb-10"
                        src="/img/error/404.png"
                        alt="" />
                    <p>Oops ! Vous vous êtes perdu ?</p>
            </div>

        </>
    )
}
