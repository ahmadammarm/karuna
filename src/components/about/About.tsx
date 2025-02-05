'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"
// import { Separator } from '../ui/separator'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { AnimatePresence } from 'framer-motion'

const About = () => {

    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
            offset: 120,
            delay: 50,
        })

        const handleRoute = () => {
            AOS.refresh()
        }

        window.addEventListener('popstate', handleRoute)

        window.addEventListener('scroll', () => {
            AOS.refresh()
        })

        return () => {
            window.removeEventListener('popstate', handleRoute)
            window.removeEventListener('scroll', () => {
                AOS.refresh()
            })
        }
    }, [])

    const faqItems = [
        {
            question: "Apa itu Program Karuna?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Apa saja kegiatan yang dilakukan di Program Karuna?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Apa lagi yaaaa",
            answer:
                "Waktu terbaik untuk berkunjung adalah pada musim panen jambu, biasanya antara bulan Oktober hingga Desember. Namun, Wisata Petik Jambu Firdaus buka sepanjang tahun dengan aktivitas yang bervariasi setiap musim.",
        },
        {
            question: "Apa lagi yaaaa 2",
            answer:
                "Waktu terbaik untuk berkunjung adalah pada musim panen jambu, biasanya antara bulan Oktober hingga Desember. Namun, Wisata Petik Jambu Firdaus buka sepanjang tahun dengan aktivitas yang bervariasi setiap musim.",
        },
    ]

    return (
        <div className="overflow-hidden bg-lime-500">
            <div className="py-16 md:py-20 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24 px-4">
                    {/* Gambar - Order 2 di mobile, Order 1 di desktop */}
                    <div
                        className="flex items-center justify-center order-2 md:order-1"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <Image src={'/aset-home/14.png'} width={200} height={500} alt="" />
                    </div>

                    {/* Accordion - Order 1 di mobile, Order 2 di desktop */}
                    <div
                        className="flex flex-col justify-center space-y-6 order-1 md:order-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                            value={activeItem}
                            onValueChange={setActiveItem}
                        >
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                    className="border border-lime-500 rounded-lg overflow-hidden shadow-sm font-poppins"
                                >
                                    <AccordionTrigger
                                        className="flex justify-between items-center w-full p-4 text-left text-white bg-[#321007] hover:bg-[#4a1a0a] transition-colors duration-200"
                                        onClick={() => setActiveItem(activeItem === `item-${index + 1}` ? undefined : `item-${index + 1}`)}
                                    >
                                        <span className="font-semibold text-lg font-popins">{item.question}</span>
                                    </AccordionTrigger>
                                    <AnimatePresence>
                                        {activeItem === `item-${index + 1}` && (
                                            <AccordionContent className="p-4 bg-[#321007]" forceMount>
                                                <div>
                                                    <p className="text-white font-poppins">{item.answer}</p>
                                                </div>
                                            </AccordionContent>
                                        )}
                                    </AnimatePresence>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>


                <div
                    className="w-full relative bg-cover bg-center bg-no-repeat py-16 md:py-24 px-12 md:px-24 mb-0"
                    style={{
                        backgroundImage: `url('/aset-home/banner-5.jpg')`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div className="relative z-10">
                        <h2
                            className="text-4xl md:text-5xl text-center text-white relative mt-10 font-poppins font-bold"
                            data-aos="fade-up"
                        >
                            Program Kami
                        </h2>

                        <p className="text-center text-white mt-5 mb-16 font-poppins" data-aos="fade-up">
                            Yuk kepoin kegiatan-kegiatan seru di Program Karuna
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                            {[
                                {
                                    nama: "Disability Empowerment",
                                    deskripsi: "Melayani untuk mewujudkan presence online Anda dengan website modern yang responsif, cepat, dan sesuai dengan kebutuhan Anda.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/layanan",
                                },
                                {
                                    nama: "CBID Approach",
                                    deskripsi: "Melayani untuk menciptakan pengalaman pengguna yang modern melalui desain UI/UX yang intuitif dan memukau.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/layanan",
                                },
                                {
                                    nama: "Marketing Strategy",
                                    deskripsi: "Melayani kebutuhan Anda dengan teknologi IoT canggih untuk otomatisasi dan efisiensi yang optimal.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/layanan",
                                },
                            ].map((item, index) => (
                                <Card key={index}
                                    className="relative flex flex-col items-center pt-16 bg-[#1b0000] border-none mb-20"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.nama}
                                            width={200}
                                            height={200}
                                            className="hover:scale-125 transition-all ease-in-out duration-200"
                                        />
                                    </div>
                                    <div className="mt-14 text-center mb-10 px-6">
                                        <h3 className="text-2xl font-bold text-lime-500 font-poppins">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8 font-poppins">
                                            {item.deskripsi}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-lime-500 py-16 md:py-24 px-10 md:px-14">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-black relative mt-10 font-poppins"
                            data-aos="fade-up"
                        >
                            Dokumentasi
                        </h2>
                        <p className="text-center text-[#1b0000] mt-5 mb-16 font-poppins font-semibold italic" data-aos="fade-up">
                            Berisikan foto foto kegiatan
                        </p>
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                            {[
                                {
                                    nama: "Edu Product",
                                    deskripsi: "Produk edukasi berupa buku dan media pembelajaran untuk anak-anak.",
                                    imageUrl: "/aset-home/4.png",
                                    href: "/produk/edu-product",
                                },
                                {
                                    nama: "Eco-eduwisata",
                                    deskripsi: "Paket wisata edukasi yang mengajak peserta untuk belajar sambil berwisata.",
                                    imageUrl: "/aset-home/5.png",
                                    href: "/produk/eco-ed",
                                },
                                {
                                    nama: "Tour Guide",
                                    deskripsi: "Paket wisata yang dilengkapi dengan pemandu wisata yang berpengalaman.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/produk/tour-guide",
                                },
                            ].map((item, index) => (
                                <Card key={index}
                                    className="relative flex flex-col items-center pt-16 bg-[#1b0000] border-none mb-10 mt-10"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div className="absolute -top-24">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.nama}
                                            width={200}
                                            height={200}
                                            className="hover:scale-110 transition-all ease-in-out duration-150"
                                        />
                                    </div>
                                    <div className="mt-16 text-center mb-10 px-4">
                                        <h3 className="text-2xl font-bold text-lime-500 font-poppins">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8 font-poppins">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-bold px-4 py-2 rounded-lg bg-lime-700 text-white hover:opacity-75 transition-all ease-in-out duration-200 font-poppins"
                                        >
                                            Jelajahi
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About