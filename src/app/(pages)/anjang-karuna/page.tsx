"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Banner from "@/components/layout/Banner"
import { useEffect, useState } from "react"
import Loading from "@/components/layout/Loading"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Footer } from "@/components/layout/Footer"
import DecorativeCircle from "@/components/layout/DecorativeCircle"
import Contact from "@/components/layout/Contact"

export default function AnjangKaryaPage() {
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
        return <Loading />
    }

    return (
        <>
            <Banner
                title="Anjang Karya Karuna"
                imageUrl="/aset-home/banner-3.jpg"
                href="/"
                link="Beranda"
                subtitle="Program Kunjungan dan Pemberdayaan Masyarakat Disabilitas"
            />
            <div className="container relative mx-auto px-4 py-8 bg-gradient-to-b from-lime-50 to-white">
                <DecorativeCircle />
                <div className="relative">
                    <h1
                        className="text-5xl font-bold text-center mb-28 mt-20 text-lime-800 relative z-10 font-fredoka"
                        data-aos="fade-up"
                    >
                        Program Anjang Karya Karuna
                    </h1>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-lime-200 rounded-full filter blur-3xl opacity-20 -z-0"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div
                        data-aos="fade-up"
                        className="relative group transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <Image
                            src="/aset-home/banner-3.jpg"
                            alt="Kunjungan Masyarakat"
                            width={600}
                            height={400}
                            className="rounded-lg object-cover relative"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold mb-4 text-lime-700 font-poppins" data-aos="fade-up">
                            Tentang Program
                        </h2>
                        <p className="text-lg mb-4 text-lime-900 font-poppins" data-aos="fade-up">
                            Anjang Karya Karuna adalah program kunjungan dan pemberdayaan yang bertujuan untuk mendukung dan memberdayakan komunitas disabilitas di Desa Gunungronggo.
                        </p>
                        <p className="text-lg mb-4 text-lime-900 font-poppins" data-aos="fade-up">
                            Program ini berfokus pada kerjasama dengan Paguyuban Disabilitas Amanah Bersama, warga disabilitas, dan perangkat desa untuk menciptakan lingkungan yang lebih inklusif dan mendukung.
                        </p>
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-center mt-20 mb-12 text-lime-800 font-fredoka" data-aos="fade-up">
                    Tujuan Program
                </h2>

                <div className="grid md:grid-cols-3 gap-6 my-12" data-aos="fade-up">
                    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-lime-700 to-lime-800 border-lime-200 z-10">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                            <div className="w-16 h-16 bg-lime-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-lime-100 transition-colors duration-300">
                                <Image src="/aset-anjang/1.png" width={100} height={100} alt="aset anjang" className="rounded-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white font-poppins">Pemberdayaan</h3>
                            <p className="text-lime-300 font-poppins">Mendukung kemandirian dan pengembangan potensi masyarakat disabilitas</p>
                        </CardContent>
                    </Card>
                    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-lime-700 to-lime-800 border-lime-200 z-10">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                            <div className="bg-lime-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-lime-100 transition-colors duration-300">
                                <Image src="/aset-anjang/2.png" width={100} height={100} alt="aset anjang" className="rounded-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white font-poppins">Inklusivitas</h3>
                            <p className="text-lime-300 font-poppins">Menciptakan lingkungan yang ramah dan mendukung bagi semua warga</p>
                        </CardContent>
                    </Card>
                    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-lime-700 to-lime-800 border-lime-200 z-10">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                            <div className="w-16 h-16 bg-lime-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-lime-100 transition-colors duration-300">
                                <Image src="/aset-anjang/3.png" width={100} height={100} alt="aset anjang" className="rounded-full" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white font-poppins">Kolaborasi</h3>
                            <p className="text-lime-300 font-poppins">Membangun kerjasama antara berbagai pihak untuk kemajuan bersama</p>
                        </CardContent>
                    </Card>
                </div>

                {/* <div className="grid md:grid-cols-3 gap-6 my-16" data-aos="fade-up">
                    <Card className="bg-lime-50 text-white transform transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center justify-center p-8">
                            <AnimatedNumber value={50} duration={2000} className="text-4xl font-bold" />
                            <p className="text-xl mt-4">Anggota Aktif</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-lime-600 text-white transform transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center justify-center p-8">
                            <AnimatedNumber value={12} duration={2000} className="text-4xl font-bold" />
                            <p className="text-xl mt-4">Program Terlaksana</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-lime-50 text-white transform transition-all duration-300 hover:scale-105">
                        <CardContent className="flex flex-col items-center justify-center p-8">
                            <AnimatedNumber value={3} duration={2000} className="text-4xl font-bold" />
                            <p className="text-xl mt-4">Mitra Kerjasama</p>
                        </CardContent>
                    </Card>
                </div> */}

                <div className="text-center mt-24 mb-16">
                    <h3 className="text-4xl font-bold mb-12 text-lime-800 font-fredoka" data-aos="fade-up">
                        Dokumentasi Kegiatan
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 1"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kunjungan Masyarakat</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 2"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kegiatan Pemberdayaan</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 3"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kolaborasi Mitra</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 1"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kunjungan Masyarakat</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 2"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kegiatan Pemberdayaan</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent z-10"></div>
                            <Image
                                src="/aset-home/banner-3.jpg"
                                alt="Dokumentasi 3"
                                width={400}
                                height={300}
                                className="object-cover w-full h-72 transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg font-semibold">Kolaborasi Mitra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}