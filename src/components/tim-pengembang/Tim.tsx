"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import Link from "next/link"
import DecorativeCircle from "@/components/layout/DecorativeCircle"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Tim() {
    const atasan = [
        {
            name: "Nur Candra Eka Setiawan, S.Si., S.Pd., M.Pd",
            role: "Dosen Pendamping",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
        {
            name: "Ulfa Rahmawati",
            role: "Ketua Tim",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
    ]

    const teamMembers = [
        {
            name: "Devinda Pertiwi Wulandari",
            role: "English Teacher",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
        {
            name: "Khofifah Ilma Santika",
            role: "English Teacher",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
        {
            name: "Shabica Echa Yriani",
            role: "English Teacher",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
        {
            name: "Ahmad 'Ammar Musyaffa'",
            role: "English Teacher",
            imageUrl: "/aset-pengembang/author-3.png",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
    ]

    interface SocialLinksProps {
        links: {
            linkedin: string,
            facebook: string,
            twitter: string,
            instagram: string,
        }
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
            offset: 120,
            delay: 50,
        })
    }, [])

    const SocialLinks = ({ links }: SocialLinksProps) => (
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 transform translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <Link href={links.linkedin} className="bg-white p-2 rounded-full shadow-lg hover:bg-lime-400 transition-all ease-in-out duration-200">
                <Linkedin className="w-5 h-5 text-[#1c3621]" />
            </Link>
            <Link href={links.facebook} className="bg-white p-2 rounded-full shadow-lg hover:bg-lime-400 transition-all ease-in-out duration-200">
                <Facebook className="w-5 h-5 text-[#1c3621]" />
            </Link>
            <Link href={links.twitter} className="bg-white p-2 rounded-full shadow-lg hover:bg-lime-400 transition-all ease-in-out duration-200">
                <Twitter className="w-5 h-5 text-[#1c3621]" />
            </Link>
            <Link href={links.instagram} className="bg-white p-2 rounded-full shadow-lg hover:bg-lime-400 transition-all ease-in-out duration-200">
                <Instagram className="w-5 h-5 text-[#1c3621]" />
            </Link>
        </div>
    )

    return (
        <div className="bg-[#F0FFF0] py-16 relative overflow-hidden">
            <DecorativeCircle />
            <p className="text-center font-poppins text-2xl text-lime-800 font-bold" data-aos="fade-up">
                Our Team
            </p>
            <div className="w-24 h-1 bg-lime-800 mx-auto mb-4" data-aos="fade-up"></div>
            <p className="text-center font-bold font-fredoka text-3xl md:text-4xl mb-16 text-[#1c3621]" data-aos="fade-up">
                Kenalan yuk sama anggota tim Karuna
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center mb-20 space-y-8 px-5 lg:space-y-0 lg:space-x-10">
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl font-bold font-fredoka text-[#1c3621] mb-5" data-aos="fade-right">Mengenal Tim Pengembang Karuna</h1>
                    <p className="text-gray-600" data-aos="fade-right">Program Karuna memiliki tim pengembang yang terdiri dari dosen pendamping dan mahasiswa yang bertugas mengembangkan program pengabdian masyarakat ini.</p>
                </div>
                <div className="w-full lg:w-1/3" data-aos="fade-left">
                    <Image src="/aset-home/banner-3.jpg" alt="Tim Pengembang" width={400} height={300} className="rounded-md w-full h-72 object-cover" />
                </div>
            </div>
            <div className="grid grid-cols-1 px-5 md:flex items-center justify-center md:flex-row md:space-x-16 mb-16 md:mb-20">
                {atasan.map((item, index) => (
                    <Card key={index} className="group hover:bg-[#1c3621] relative mb-10 md:mb-0 overflow-hidden hover:shadow-xl transition-all duration-300 w-full md:w-80" data-aos="flip-right">
                        <CardContent className="p-0">
                            <Image
                                src={item.imageUrl}
                                alt={`Foto ${item.name}`}
                                width={300}
                                height={300}
                                className="mx-auto rounded-lg transition-transform duration-300"
                            />
                            <SocialLinks links={item} />
                            <div className="bg-gradient-to-r from-lime-500 to-lime-400 p-5 h-32 flex flex-col justify-center transition-colors duration-300">
                                <h2 className="text-center text-xl font-bold font-poppins text-[#1c3621] line-clamp-2">
                                    {item.name}
                                </h2>
                                <p className="text-center font-semibold text-lime-800 mt-2 font-poppins">
                                    {item.role}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 mb-10">
                {teamMembers.map((item, index) => (
                    <Card key={index} className="group hover:bg-[#1c3621] relative overflow-hidden hover:shadow-xl transition-all duration-300" data-aos="flip-right">
                        <CardContent className="p-0">
                            <Image
                                src={item.imageUrl}
                                alt={`Foto ${item.name}`}
                                width={300}
                                height={300}
                                className="mx-auto rounded-lg transition-transform duration-300"
                            />
                            <SocialLinks links={item} />
                            <div className="bg-gradient-to-r from-lime-500 to-lime-400 p-5 h-32 flex flex-col justify-center transition-colors duration-300">
                                <h2 className="text-center text-xl font-bold font-poppins text-[#1c3621] line-clamp-2">
                                    {item.name}
                                </h2>
                                <p className="text-center font-semibold text-lime-700 mt-2 font-poppins">
                                    {item.role}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}