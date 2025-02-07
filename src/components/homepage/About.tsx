'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link';
import { CheckCircle, Eye, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

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

    const DecorativeCircles = () => {
        return (
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lime-700/20 transform translate-x-1/4 -translate-y-1/4"
                    data-aos="zoom-out"
                    data-aos-delay="0"
                />
                <div
                    className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-lime-400/30 transform -translate-x-1/4 translate-y-1/4"
                    data-aos="zoom-out"
                    data-aos-delay="100"
                />

                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-700/15"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-lime-400/25"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                />
                <div
                    className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-lime-200/20"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                />

                <div
                    className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-lime-500/15"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                />
                <div
                    className="absolute bottom-1/2 left-1/3 w-24 h-24 rounded-full bg-lime-200/20"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                />
                <div
                    className="absolute top-2/3 right-1/2 w-20 h-20 rounded-full bg-lime-400/25"
                    data-aos="zoom-out"
                    data-aos-delay="700"
                />

                <div
                    className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-lime-500/20"
                    data-aos="zoom-out"
                    data-aos-delay="800"
                />
                <div
                    className="absolute bottom-1/3 left-1/2 w-12 h-12 rounded-full bg-lime-200/25"
                    data-aos="zoom-out"
                    data-aos-delay="900"
                />
                <div
                    className="absolute top-1/2 right-2/3 w-10 h-10 rounded-full bg-lime-400/20"
                    data-aos="zoom-out"
                    data-aos-delay="1000"
                />

                <div
                    className="absolute top-2/3 left-2/3 w-8 h-8 rounded-full bg-lime-500/15"
                    data-aos="zoom-out"
                    data-aos-delay="1100"
                />
                <div
                    className="absolute bottom-2/3 right-1/3 w-6 h-6 rounded-full bg-lime-200/20"
                    data-aos="zoom-out"
                    data-aos-delay="1200"
                />
                <div
                    className="absolute top-3/4 right-3/4 w-4 h-4 rounded-full bg-lime-400/25"
                    data-aos="zoom-out"
                    data-aos-delay="1300"
                />

                <div
                    className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-lime-700/10"
                    data-aos="zoom-out"
                    data-aos-delay="1400"
                />
                <div
                    className="absolute bottom-1/4 right-2/3 w-36 h-36 rounded-full bg-lime-400/15"
                    data-aos="zoom-out"
                    data-aos-delay="1500"
                />
                <div
                    className="absolute top-3/4 right-1/3 w-28 h-28 rounded-full bg-lime-300/10"
                    data-aos="zoom-out"
                    data-aos-delay="1600"
                />
            </div>
        );
    };

    return (
        <div className="overflow-hidden bg-[#F0FFF0]">
            <div className="mt-16 md:mt-24">
                <h1
                    className="text-[#1c3621] text-4xl md:text-5xl mb-16 font-bold text-center relative mt-32 md:mt-0 font-poppins"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>
                <div className="relative min-h-screen bg-[#F0FFF0] pb-4 px-8">
                    <DecorativeCircles />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 items-center lg:gap-4">
                            {/* Image Section */}
                            <div className="relative rounded-3xl overflow-hidden lg:pr-8" data-aos="fade-right">
                                <Image
                                    src="/aset-home/about.png"
                                    alt="Children learning"
                                    width={300}
                                    height={100}
                                    className="w-96 h-auto object-cover lg:ml-20"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="lg:-ml-4" data-aos="fade-left">
                                <h1 className="text-[#1c3621] text-3xl lg:text-4xl font-bold leading-tight mt-10 md:mt-0 mb-5 md:mb-10 font-poppins">
                                    Hai Karuners!
                                </h1>

                                <p className="text-gray-600 font-poppins mb-5 md:mb-10">
                                    Ada yang tau nggak sih apa itu program Karuna? Yupps betull, Karuna bukan hanya sekedar program, tapi gebrakan! Karuna hadir untuk menciptakan dampak nyata dengan memberdayakan temen-temen difabel melalui pelatihan enterpreneurship loh!
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FeatureItem text="Edugu Pick" />
                                    <FeatureItem text="Animal Explore" />
                                    <FeatureItem text="Edu Product" />
                                    <FeatureItem text="Tour Guide" />
                                </div>

                                <div className="mt-16">
                                    <Link href="about" >
                                        <Button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-6 rounded-full text-lg font-popins">
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
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div className="relative z-10">
                        <h2
                            className="text-4xl md:text-5xl text-center text-white relative mt-10 font-poppins font-bold mb-24"
                            data-aos="fade-up"
                        >
                            Galeri
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Pelatihan Product Eco-Print Daun Jambu",
                                    imageUrl: "/aset-home/banner-1.jpeg",
                                    description:
                                        "Mengajarkan teknik eco-print menggunakan daun jambu untuk menciptakan produk unik dan ramah lingkungan.",
                                    rating: 5,
                                },
                                {
                                    title: "Petik Jambu Sepuasnya & Edukasi",
                                    imageUrl: "/aset-home/banner-2.png",
                                    description:
                                        "Pengalaman memetik jambu langsung dari kebun sambil belajar tentang budidaya dan manfaat jambu.",
                                    rating: 5,
                                },
                                {
                                    title: "Pengelolaan Wisata Petik Jambu",
                                    imageUrl: "/aset-home/banner-3.jpg",
                                    description:
                                        "Pelatihan manajemen wisata untuk mengoptimalkan potensi kebun jambu sebagai destinasi agrowisata.",
                                    rating: 5,
                                },
                                {
                                    title: "Pelatihan Integrated Farming",
                                    imageUrl: "/aset-home/banner-4.jpg",
                                    description:
                                        "Mengedukasi tentang sistem pertanian terpadu untuk meningkatkan produktivitas dan keberlanjutan.",
                                    rating: 5,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-100">
                                        <div className="relative h-48">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="transition-transform duration-300 hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <CardContent className="p-4 text-center">
                                            <CardTitle className="text-lg font-bold mb-2 text-lime-600 font-poppins">
                                                {item.title}
                                            </CardTitle>
                                            <p className="text-sm text-gray-600 mb-3 font-poppins">
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
                            className="text-4xl md:text-5xl font-bold text-center mb-5 text-[#1c3621] relative mt-24 font-poppins"
                            data-aos="fade-up"
                        >
                            Program Kami
                        </h2>
                        <p className="text-center text-lime-900 mb-24 font-poppins font-semibold" data-aos="fade-up">
                            Yuk kepoin program seru di Karuna!
                        </p>
                        <div className="relative grid grid-cols-1 mb-10 md:mb-0 md:grid-cols-2 gap-12 px-4">
                            <DecorativeCircles />
                            {[
                                {
                                    nama: "Edugu Pick",
                                    deskripsi: "Produk edukasi berupa buku dan media pembelajaran untuk anak-anak.",
                                    imageUrl: "/aset-home/4.png",
                                    href: "/produk/edu-product",
                                },
                                {
                                    nama: "Animal Explore",
                                    deskripsi: "Paket wisata edukasi yang mengajak peserta untuk belajar sambil berwisata.",
                                    imageUrl: "/aset-home/5.png",
                                    href: "/produk/eco-ed",
                                },
                                {
                                    nama: "Edu Product",
                                    deskripsi: "Paket wisata yang dilengkapi dengan pemandu wisata yang berpengalaman.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/produk/tour-guide",
                                },
                                {
                                    nama: "Tour Guide",
                                    deskripsi: "Paket wisata yang dilengkapi dengan pemandu wisata yang berpengalaman.",
                                    imageUrl: "/aset-home/6.png",
                                    href: "/produk/tour-guide",
                                },
                            ].map((item, index) => (
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
                    <DecorativeCircles />
                    <div className="py-20">
                        <h2 className="bg-gradient-to-r from-lime-300 to-[#F0FFF0] bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold mb-5 font-poppins" data-aos="fade-up">Produk Wisata</h2>
                        <p className="text-center text-lime-500 mb-24 font-poppins font-semibold" data-aos="fade-up">Produk kami di Karuna</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
                            {[
                                {
                                    nama: "Fashion",
                                    deskripsi: "Produk fashion yang terbuat dari bahan daur ulang.",
                                    imageUrl: "/aset-home/hero2.webp",
                                    waktu: "10:00 - 17:00",
                                    lokasi: "Paguyuban Amanah Bersama",
                                },
                                {
                                    nama: "Kerajinan",
                                    deskripsi: "Berbagai kerajinan tangan dari material ramah lingkungan.",
                                    imageUrl: "/aset-home/hero2.webp",
                                    waktu: "09:00 - 18:00",
                                    lokasi: "Paguyuban Amanah Bersama",
                                },
                                {
                                    nama: "Aksesoris",
                                    deskripsi: "Aksesoris unik hasil kreasi pengrajin lokal.",
                                    imageUrl: "/aset-home/hero2.webp",
                                    waktu: "10:00 - 16:00",
                                    lokasi: "Paguyuban Amanah Bersama",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-lime-100 rounded-3xl overflow-hidden shadow-xl z-10"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <div className="relative group">
                                        <div className="absolute top-4 left-4 bg-lime-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
                                            Tersedia
                                        </div>

                                        {/* Hover Overlay with Eye Icon */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="absolute inset-0 bg-gradient-to-t from-lime-200/90 to-lime-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer z-10">
                                                    <Eye className="w-10 h-10 text-lime-900" />
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-4xl [&>button]:hidden">
                                                <div className="relative w-full aspect-video">
                                                    <Image
                                                        src={item.imageUrl || "/placeholder.svg"}
                                                        alt={item.nama}
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        <Image
                                            src={item.imageUrl || "/placeholder.svg"}
                                            alt={item.nama}
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-lime-700 mb-3">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{item.lokasi}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-lime-900 mb-2">{item.nama}</h3>
                                        <p className="text-lime-700">{item.deskripsi}</p>
                                    </div>
                                </div>
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