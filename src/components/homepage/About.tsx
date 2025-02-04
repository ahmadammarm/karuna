'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Separator } from '../ui/separator'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';

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
        <div className="overflow-hidden bg-green-900">
            <div className="py-16 md:py-24 md:mt-0">
                <h1
                    className="text-white text-4xl md:text-5xl font-bold text-center mb-16 relative mt-24 md:mt-0"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    Tentang Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 px-4">
                    <div
                        className="flex items-center justify-center"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden border">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative text-black font-serif">
                                Seputar
                                <br />
                                <span className="text-green-900 relative font-serif">
                                    Karuna
                                </span>
                            </h2>
                            <p className="text-black mb-8 text-lg relative z-10">
                                Hai Karuners! Ada yang tau nggak sih apa itu program Karuna? Yupps betull, Karuna bukan hanya sekedar program, tapi gebrakan! Karuna hadir untuk menciptakan dampak nyata dengan memberdayakan temen-temen difabel melalui pelatihan enterpreneurship loh!
                            </p>
                            <div
                                className="flex justify-center relative z-10"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <Image
                                    src="/aset-home/about.png"
                                    alt="Program Karuna Illustration"
                                    width={400}
                                    height={200}
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center space-y-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-green-300 font-serif">
                            Menarik banget kan??
                        </h3>
                        <p className="text-white text-lg leading-relaxed">
                             Apalagi program karuna ini dilaksanakan di Paguyuban Amanah Bersama yang berada di Desa Gunungronggo. Bukan cuma pelatihan ajaa, serunya lagii, hasil dari pelatihan ini nggak sekadar berhenti di teori aja, tapi langsung dipraktikkan!
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            Dari produk-produk handmade yang unik sampai inovasi berbasis keberlanjutan, semuanya dibuat dengan penuh cinta dan semangat.
                        </p>
                        <div
                            className="flex items-center space-x-4 mt-4 bg-zinc-900 rounded-lg"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <Image src="/aset-home/2.png" alt="masyarakat" width={200} height={40} />
                            <span className="text-white font-bold text-xl">Pemberdayaan Masyarakat</span>
                        </div>
                        <div
                            className="flex items-center space-x-4 bg-zinc-900 rounded-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/aset-home/3.png" alt="produk" width={200} height={40} />
                            <span className="text-white font-bold text-xl">Inovasi Produk Lokal</span>
                        </div>
                        <Separator className="my-12 md:my-0" />
                        <div className="p-3 bg-white rounded-lg w-[80%]" data-aos="fade-up" data-aos-delay="300">
                            <Image
                                alt="logo um"
                                src="/aset-home/logo-um.png"
                                width={450}
                                height={100}
                            />
                        </div>
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
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center text-white relative mt-10"
                            data-aos="fade-up"
                        >
                            Galeri
                        </h2>

                        <p className="text-center text-white mt-5 mb-16" data-aos="fade-up">
                            Yuk kepoin kegiatan-kegiatan seru di Program Karuna
                        </p>

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
                                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                                            <CardTitle className="text-lg font-bold mb-2 text-green-700">
                                                {item.title}
                                            </CardTitle>
                                            <p className="text-sm text-gray-600 mb-3">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-green-900 py-16 md:py-24 px-10 md:px-14">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative mt-10"
                            data-aos="fade-up"
                        >
                            Produk Kami
                        </h2>
                        <p className="text-center text-white mt-5 mb-16" data-aos="fade-up">
                            Gimana, penasaran kan sama produk dari Karuna?
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
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
                                    className="relative flex flex-col items-center pt-16 bg-zinc-900 border-none mb-10 mt-10"
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
                                        <h3 className="text-2xl font-bold text-green-700">
                                            {item.nama}
                                        </h3>
                                        <p className="text-white mt-4 mb-8">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-bold px-4 py-2 rounded-lg bg-green-700 text-white hover:opacity-75 transition-all ease-in-out duration-200"
                                        >
                                            Jelajahi
                                        </Link>
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