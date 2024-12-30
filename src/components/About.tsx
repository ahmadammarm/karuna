'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Card, CardContent, CardTitle } from "./ui/card"
import { Separator } from './ui/separator'
import AOS from 'aos'
import 'aos/dist/aos.css'

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

    return (
        <div className="bg-gradient-to-b from-white to-green-50 mt-96 md:mt-0 overflow-hidden">
            <div className="container mx-auto px-4 py-16 md:py-24 md:mt-0">
                <h1
                    className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div
                        className="flex items-center justify-center"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="bg-green-950 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24">
                                <svg viewBox="0 0 100 100" className="text-green-200 opacity-50">
                                    <path d="M100,0 C60,30 40,70 0,100 L100,100 Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative text-white">
                                Apa sih itu
                                <br />
                                <span className="text-green-300 relative">
                                    Program Karuna?
                                </span>
                            </h2>
                            <p className="text-white mb-8 text-lg relative z-10">
                                Program Karuna adalah program pengabdian yang berfokus pada pelatihan entrepreneur skills untuk Paguyubuan Bintang Harapan dalam mengoptimalkan potensi Perkebunan Jambu di Desa Gunung Sari.
                            </p>
                            <div
                                className="flex justify-center relative z-10"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <Image
                                    src="/aset-home/about.png"
                                    alt="Program Karuna Illustration"
                                    width={500}
                                    height={300}
                                    className="rounded-xl shadow-md object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 z-0" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center space-y-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-green-700">
                            Selamat Datang di Program Karuna!
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Kami hadir mengusung program pengabdian yang berfokus pada pelatihan entrepreneur skills untuk Paguyubuan Bintang Harapan dalam mengoptimalkan potensi
                            Perkebunan Jambu di Desa Gunung Sari.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Tidak berhenti di sana, kami juga menciptakan diversifikasi produk hasil perkebunan yang berupa ecoprint dan keripik
                            jambu. Selain itu, produk hasil integrated farming berupa pupuk Eco Farming juga menjadi fokus kami.
                        </p>
                        <div
                            className="flex items-center space-x-4 mt-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <Image src="/aset-home/2.png" alt="masyarakat" width={100} height={20} />
                            <span className="text-green-700 font-semibold">Pemberdayaan Masyarakat</span>
                        </div>
                        <div
                            className="flex items-center space-x-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/aset-home/3.png" alt="produk" width={100} height={20} />
                            <span className="text-green-700 font-semibold">Inovasi Produk Lokal</span>
                        </div>
                        <Separator className="my-12 md:my-0" />
                        <Image
                            alt="logo um"
                            src="/aset-home/logo-um.png"
                            width={450}
                            height={100}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                    </div>
                </div>

                <h2
                    className="text-3xl font-bold text-center mb-12"
                    data-aos="fade-up"
                >
                    Program Unggulan Kami
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "Pelatihan Product Eco-Print Daun Jambu",
                            imageUrl: "/aset-home/banner-1.jpeg",
                            description: "Mengajarkan teknik eco-print menggunakan daun jambu untuk menciptakan produk unik dan ramah lingkungan.",
                            rating: 5
                        },
                        {
                            title: "Petik Jambu Sepuasnya & Edukasi",
                            imageUrl: "/aset-home/banner-2.png",
                            description: "Pengalaman memetik jambu langsung dari kebun sambil belajar tentang budidaya dan manfaat jambu.",
                            rating: 5
                        },
                        {
                            title: "Pengelolaan Wisata Petik Jambu",
                            imageUrl: "/aset-home/banner-3.jpg",
                            description: "Pelatihan manajemen wisata untuk mengoptimalkan potensi kebun jambu sebagai destinasi agrowisata.",
                            rating: 5
                        },
                        {
                            title: "Pelatihan Integrated Farming",
                            imageUrl: "/aset-home/banner-4.jpg",
                            description: "Mengedukasi tentang sistem pertanian terpadu untuk meningkatkan produktivitas dan keberlanjutan.",
                            rating: 5
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-anchor-placement="top-bottom"
                        >
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105"
                                        loading='lazy'
                                    />
                                </div>
                                <CardContent className="p-4 text-center">
                                    <CardTitle className="text-lg font-semibold mb-2 text-green-700">
                                        {item.title}
                                    </CardTitle>
                                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                                    <div className="flex justify-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About