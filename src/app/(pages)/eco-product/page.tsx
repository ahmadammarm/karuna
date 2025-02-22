"use client"

import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from "@/components/layout/Loading"
import Banner from "@/components/layout/Banner"
import DecorativeCircle from "@/components/layout/DecorativeCircle"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Leaf, Recycle, Users } from "lucide-react"
import Contact from "@/components/layout/Contact"
import { Footer } from "@/components/layout/Footer"

export default function EcoProductPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, [])

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if (isLoading) {
        return (
            <Loading />
        )
    }

    const features = [
        {
            icon: <Leaf className="w-8 h-8 text-lime-500" />,
            title: "Ramah Lingkungan",
            description: "Produk kami dibuat dengan memperhatikan keberlanjutan lingkungan, menggunakan bahan-bahan alami dan proses produksi yang eco-friendly."
        },
        {
            icon: <Users className="w-8 h-8 text-lime-500" />,
            title: "Pemberdayaan Masyarakat",
            description: "Setiap produk dibuat oleh komunitas lokal Paguyuban Amanah Bersama, mendukung perekonomian dan kesejahteraan masyarakat setempat."
        },
        {
            icon: <Recycle className="w-8 h-8 text-lime-500" />,
            title: "Inovasi Berkelanjutan",
            description: "Kami terus berinovasi dalam mengolah sumber daya alam menjadi produk bernilai tinggi dengan tetap menjaga kelestarian lingkungan."
        }
    ];

    const products = [
        {
            nama: "Tas Eco-Print",
            deskripsi: "Produk fashion yang dibuat dari olahan daun jambu.",
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
        <div className="overflow-hidden">
            <Banner title="Eco-Product" imageUrl="/aset-home/banner-3.jpg" href="/" link="Beranda" subtitle="Mari mengenal produk Karuna" />
            <div className="relative px-10 md:px-14 bg-gradient-to-r from-lime-900 to-lime-800">
                <DecorativeCircle />

                {/* About Section */}
                <div className="py-16 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-lime-300 mb-4 font-fredoka">
                                Eco-Product Karuna
                            </h2>
                            <p className="text-white max-w-2xl mx-auto font-poppins">
                                Melalui Eco-Product, kami berkomitmen untuk menghadirkan produk-produk berkualitas yang tidak hanya bermanfaat bagi konsumen, tetapi juga bagi lingkungan dan masyarakat.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                            <div className="relative h-[400px] rounded-lg overflow-hidden" data-aos="fade-right">
                                <Image
                                    src="/aset-home/banner-3.jpg"
                                    alt="Eco Product Process"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-r from-lime-900/60 to-transparent"></div> */}
                            </div>

                            <div className="space-y-6" data-aos="fade-left">
                                <div className="grid gap-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 rounded-lg bg-lime-50 hover:bg-lime-100 transition-colors duration-300 z-10"
                                        >
                                            <div className="p-2 bg-white rounded-lg shadow-md">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-lime-800 mb-1 font-fredoka">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-lime-700 font-poppins">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-600 to-lime-500 text-white font-semibold rounded-md hover:from-lime-700 hover:to-lime-600 transition-colors duration-300">
                                    Pelajari Lebih Lanjut
                                    <ArrowRight className="w-5 h-5" />
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="py-10">
                    {/* <h2
                        className="bg-gradient-to-r from-lime-300 to-[#F0FFF0] bg-clip-text text-transparent text-center text-4xl md:text-5xl font-bold mb-5 font-fredoka"
                        data-aos="fade-up"
                    >
                        Produk Wisata
                    </h2>
                    <p className="text-center text-white mb-24 font-poppins font-semibold" data-aos="fade-up">
                        Produk kami di Karuna
                    </p> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center max-w-screen-lg mx-auto">
                        {products.map((item, index) => (
                            <Card
                                key={index}
                                className="flex flex-col bg-gradient-to-br from-[#F0FFF0] to-lime-100 border-none rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden w-[350px] z-10 mb-16"
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
                                            Pesan Sekarang
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}