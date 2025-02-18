'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '../ui/button';
import DecorativeCircle from '@/components/layout/DecorativeCircle'


const About = () => {
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

    const programs = [
        {
            nama: "Anjang Karya Karuna",
            deskripsi: "Tim Karuna keliling ke Paguyuban Amanah Bersama, komunitas disabilitas, dan kepala desa buat sharing bareng. Kita ngobrolin banyak hal seru dan saling berbagi pengalaman. Penasaran? Klik di sini!",
            imageUrl: "/aset-home/15.png",
            href: "#",
        },
        {
            nama: "Gema Karuna",
            deskripsi: "Kenalan lebih dalam sama Karuna! Di sini, kita bakal ngobrol bareng tentang program-program kece dari Karuna. Jangan sampai ketinggalan!",
            imageUrl: "/aset-home/16.png",
            href: "#",
        },
    ];

    const programs2 = [
        {
            nama: "Sanggar Karuna",
            deskripsi: "Belajar sambil praktek di Sanggar Karuna! Ada Pelatihan Keripik Jambu Merah, Eco-Print kece buat fashion unik, sampai bikin Selai Jambu Merah yang yummy banget! Cek selengkapnya disini yaa!",
            imageUrl: "/aset-home/17.png",
            href: "#",
        },
        {
            nama: "Kreasi Karuna",
            deskripsi: "Produk keren harus punya packaging kece! Di Kreasi Karuna, kamu bakal belajar cara bikin kemasan produk yang bikin pelanggan auto tertarik. Yuk, pelajari teknik packaging keren di sini!",
            imageUrl: "/aset-home/18.png",
            href: "#",
        },
        {
            nama: "Niaga Karuna",
            deskripsi: "Biar bisnis makin cuan, digital marketing wajib dikuasai! Di Niaga Karuna, kita bakal kupas tuntas strategi marketing digital biar produkmu makin dikenal. Penasaran kan? Langsung aja kepoin di sini!",
            imageUrl: "/aset-home/19.png",
            href: "#",
        },
    ];

    const products = [
        {
            nama: "Tas Eco-Print",
            deskripsi: "Produk fashion yang terbuat dari bahan daur ulang.",
            imageUrl: "/aset-home/10.png",
            harga: "Rp 20.000",
            tersedia: "Paguyuban Amanah Bersama",
            rating: 4.5,
        },
        {
            nama: "Selai Jambu",
            deskripsi: "Selai jambu yang dibuat dari olahan buah jambu merah.",
            imageUrl: "/aset-home/11.png",
            harga: "Rp 15.000",
            tersedia: "Paguyuban Amanah Bersama",
            rating: 4.2,
        },
    ]




    return (
        <div className="overflow-hidden bg-[#F0FFF0]">
            <div className="mt-16 md:mt-24">
                <h1
                    className="text-[#1c3621] text-4xl md:text-5xl mb-16 font-bold text-center relative mt-32 md:mt-0 font-fredoka"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>
                <div className="relative min-h-screen bg-[#F0FFF0] pb-4 px-8">
                    <DecorativeCircle />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 items-center lg:gap-4">
                            <div className="relative rounded-3xl overflow-hidden lg:pr-8" data-aos="fade-right">
                                <Image
                                    src="/aset-home/about.png"
                                    alt="Children learning"
                                    width={300}
                                    height={100}
                                    className="w-96 h-auto object-cover lg:ml-20"
                                />
                            </div>

                            <div className="lg:-ml-4" data-aos="fade-left">
                                <h1 className="text-[#1c3621] text-3xl lg:text-4xl font-bold leading-tight mt-10 md:mt-0 mb-5 md:mb-10 font-fredoka">
                                    Hai Karuners!
                                </h1>

                                <p className="text-gray-600 font-poppins mb-5 md:mb-10">
                                    Ada yang tau nggak sih apa itu program Karuna? Yupps betull, Karuna bukan hanya sekedar program, tapi gebrakan! Karuna hadir untuk menciptakan dampak nyata dengan memberdayakan temen-temen difabel melalui pelatihan enterpreneurship loh!
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FeatureItem text="Anjangkarya Karuna" />
                                    <FeatureItem text="Gema Karuna" />
                                    <FeatureItem text="Sanggar Karuna" />
                                    <FeatureItem text="Karya Karuna" />
                                    <FeatureItem text="Niaga Karuna" />
                                </div>

                                <div className="mt-16">
                                    <Link href="/tentang-kami" >
                                        <Button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-6 rounded-full text-lg font-fredoka">
                                            Selengkapnya
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full relative bg-cover bg-center bg-no-repeat py-16 md:py-24 px-12 md:px-24 mb-0 mt-10 md:mt-[-130px]"
                    style={{
                        backgroundImage: `url('/aset-home/banner-5.jpg')`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div className="relative z-10">
                        <h2
                            className="text-4xl md:text-5xl text-center text-white relative mt-10 font-fredoka font-bold mb-24"
                            data-aos="fade-up"
                        >
                            Tujuan Kami
                        </h2>

                        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
                            {[
                                {
                                    title: "Pemberdayaan Paguyuban",
                                    imageUrl: "/aset-home/banner-3.jpg",
                                    description:
                                        "Mengembangkan desain Karuna sebagai program pemberdayaan pada Paguyuban Amanah Bersama di Desa Gunungronggo, Kabupaten Malang.",
                                },
                                {
                                    title: "Peningkatan Enterpreneur Skills",
                                    imageUrl: "/aset-home/banner-2.png",
                                    description:
                                        "Menyusun langkah strategis program Karuna untuk meningkatkan enterpreneur skills berbasis Community-Based Inclusive Development pada Paguyuban Amanah Bersama di Desa Gunungronggo, Kabupaten Malang.",
                                },
                                {
                                    title: "Meningkatkan Kemandirian Ekonomi",
                                    imageUrl: "/aset-home/banner-3.jpg",
                                    description:
                                        "Mengetahui efektivitas Program Karuna dalam meningkatkan kemandirian ekonomi anggota Paguyuban Amanah Bersama di Desa Gunungronggo, Kabupaten Malang.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-100 h-full flex flex-col">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-300 hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <CardContent className="p-4 text-center flex flex-col flex-grow">
                                            <CardTitle className="text-lg font-bold mb-2 text-lime-600 font-poppins">
                                                {item.title}
                                            </CardTitle>
                                            <p className="text-sm text-gray-600 mb-3 font-poppins flex-grow">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="px-10 md:px-14">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-5 text-[#1c3621] relative mt-24 font-fredoka"
                            data-aos="fade-up"
                        >
                            Program Kami
                        </h2>
                        <p className="text-center text-lime-900 mb-24 font-poppins font-semibold" data-aos="fade-up">
                            Yuk kepoin program seru di Karuna!
                        </p>
                        <div className="relative grid grid-cols-1 mb-10 md:mb-0 md:grid-cols-2 gap-12 px-4">
                            <DecorativeCircle />
                            {programs.map((item, index) => (
                                <Card key={index}
                                    className="relative flex flex-col items-center pt-16 bg-lime-900 border-none mt-10 shadow-lg"
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
                                        <h3 className="text-2xl font-bold text-lime-300 font-poppins">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8 font-poppins">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-bold px-4 py-2 rounded-lg bg-lime-600 text-white hover:bg-lime-700 transition-all ease-in-out duration-200 font-poppins"
                                        >
                                            Jelajahi
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <div className="relative grid grid-cols-1 mb-10 md:mb-0 md:grid-cols-3 gap-12 px-4 mt-20">
                            <DecorativeCircle />
                            {programs2.map((item, index) => (
                                <Card key={index}
                                    className="relative flex flex-col items-center pt-16 bg-lime-900 border-none mt-10 shadow-lg"
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
                                        <h3 className="text-2xl font-bold text-lime-300 font-poppins">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8 font-poppins">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-bold px-4 py-2 rounded-lg bg-lime-600 text-white hover:bg-lime-700 transition-all ease-in-out duration-200 font-poppins"
                                        >
                                            Jelajahi
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative px-10 md:px-14 bg-gradient-to-r from-lime-900 to-lime-800 mt-24">
                    <div className="py-20">
                        <h2
                            className="bg-gradient-to-r from-lime-300 to-[#F0FFF0] bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold mb-5 font-fredoka"
                            data-aos="fade-up"
                        >
                            Produk Wisata
                        </h2>
                        <p className="text-center text-lime-500 mb-24 font-poppins font-semibold" data-aos="fade-up">
                            Produk kami di Karuna
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center max-w-screen-lg mx-auto">
                            {products.map((item, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col bg-gradient-to-br from-[#F0FFF0] to-lime-100 border-none rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden w-[350px]"
                                    style={{ height: "420px" }}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div className="relative h-48 overflow-hidden group">
                                        <Image
                                            src={item.imageUrl || "/placeholder.svg"}
                                            alt={item.nama}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-lime-900/70 transition-opacity duration-300 group-hover:opacity-80"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                            <h3 className="text-xl font-bold text-white font-poppins line-clamp-2">{item.nama}</h3>
                                            <div className="flex items-center bg-lime-500 px-2 py-1 rounded-full">
                                                <Star className="w-4 h-4 text-white mr-1" />
                                                <span className="text-white font-semibold">{item.rating.toFixed(1)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow flex flex-col p-4">
                                        <p className="text-lime-700 font-fredoka font-semibold text-lg line-clamp-2 mb-2">{item.deskripsi}</p>
                                        <div className="mt-auto">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-lg font-bold text-lime-800">{item.harga}</span>
                                                <div className="flex items-center text-lime-600">
                                                    <CheckCircle className="w-5 h-5 mr-1" />
                                                    <span className="font-semibold text-sm">{item.tersedia ? "Tersedia" : "Tidak Tersedia"}</span>
                                                </div>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-lime-600 to-lime-500 text-white font-semibold py-2 rounded-md transition-colors duration-300 hover:from-lime-700 hover:to-lime-600">
                                                Lihat Detail
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

function FeatureItem({ text, variant = "blue" }: { text: string; variant?: "blue" | "lime" }) {
    return (
        <div className="flex items-center gap-2">
            <CheckCircle className={`w-5 h-5 ${variant === "lime" ? "text-lime-500" : "text-[#1c3621]"}`} />
            <span className="text-gray-700 font-poppins font-semibold">{text}</span>
        </div>
    )
}