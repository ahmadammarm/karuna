import Link from 'next/link'
import React from 'react'


const Contact = () => {
    return (
        <div
            className="w-full relative bg-cover bg-center bg-no-repeat py-10 md:py-16 px-12 md:px-24 mb-0"
            style={{
                backgroundImage: `url('/aset-home/banner-5.jpg')`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10">
                <h2
                    className="text-4xl md:text-5xl font-bold text-center text-white relative mt-10 font-poppins"

                >
                    Hubungi Kami
                </h2>

                <p className="text-center text-white mt-5 font-poppins">
                    Ingin bertanya lebih lanjut tentang Program Karuna? Yuk hubungi Minkar!!
                </p>
                <div className="flex items-center justify-center mt-5" >
                    <Link href="https://wa.me/6285746353092" className="text-lg font-bold px-4 py-2 rounded-lg bg-lime-700 text-white hover:opacity-75 transition-all ease-in-out duration-200 font-poppins">
                        Admin Karuna
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
