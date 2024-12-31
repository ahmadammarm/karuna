'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Separator } from '../ui/separator'
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
        <div className="mt-96 md:mt-0 overflow-hidden">
            <div className="py-16 md:py-24 md:mt-0">
                <h1
                    className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 md:mb-10 px-4">
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
                        <h3 className="text-2xl md:text-3xl font-bold text-green-700">
                            Selamat Datang di Program Karuna!
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Karuna merupakan program hasil Pekan Kreativitas Mahasiswa bidang Pengabdian Masyarakat yang berada di bawah naungan Kemendikbud Ristek.
                        </p>
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
                            <span className="text-green-700 font-bold text-xl">Pemberdayaan Masyarakat</span>
                        </div>
                        <div
                            className="flex items-center space-x-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/aset-home/3.png" alt="produk" width={100} height={20} />
                            <span className="text-green-700 font-bold text-xl">Inovasi Produk Lokal</span>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 md:px-10">
                    <div className="md:mt-24" data-aos="fade-up">
                        <h2 className="text-center font-bold text-4xl ">
                            Apa sih tujuan dari Program Karuna itu ?
                        </h2>
                    </div>
                    <div className="md:mt-10" data-aos="fade-up">
                        <Image src="/aset-about/tujuan.png" alt="konten" width={500} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About