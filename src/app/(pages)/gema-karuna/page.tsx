"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Banner from "@/components/layout/Banner"
import Loading from "@/components/layout/Loading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/layout/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Camera, Target, Users } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import DecorativeCircle from "@/components/layout/DecorativeCircle"
import Contact from "@/components/layout/Contact"

const programs = [
    {
        id: 1,
        title: "Sosialisasi Program",
        date: "15 Maret 2024",
        image: "/placeholder.svg?height=400&width=600",
        description: "Pertemuan dengan Paguyuban Disabilitas Amanah Bersama untuk membahas program Karuna",
    },
    {
        id: 2,
        title: "Diskusi dengan Stakeholder",
        date: "16 Maret 2024",
        image: "/placeholder.svg?height=400&width=600",
        description: "Pembahasan program bersama stakeholder setempat di Desa Gunungronggo",
    },
    {
        id: 3,
        title: "Penandatanganan MoU",
        date: "17 Maret 2024",
        image: "/placeholder.svg?height=400&width=600",
        description: "Kesepakatan kerjasama antara tim PKM dengan mitra",
    },
]

export default function EduProductPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        })
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-lime-50 to-white overflow-hidden">
            <Banner title="Gema Karuna" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Program Sosialisasi bersama Paguyuban Amanah Bersama" />
            <div className="relative">
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <DecorativeCircle />
                </div>
                <div className="relative z-10">
                    <h1
                        className="text-6xl font-bold text-center pt-20 text-lime-800 font-fredoka"
                        data-aos="fade-up"
                    >
                        Program Gema Karuna
                    </h1>
                    <div className="container mx-auto px-4 py-20 relative z-10">
                        <Tabs defaultValue="description" className="w-full" data-aos="fade-up">
                            <TabsList className="grid w-full grid-cols-3 bg-transparent rounded-full px-4 mb-8">
                                <TabsTrigger value="description" className="rounded-full text-lg border">Deskripsi Program</TabsTrigger>
                                <TabsTrigger value="objectives" className="rounded-full text-lg border">Tujuan Program</TabsTrigger>
                                <TabsTrigger value="documentation" className="rounded-full text-lg border">Dokumentasi</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" data-aos="fade-up">
                                <Card className="border-none bg-gradient-to-r from-lime-900 to-lime-800 shadow-xl rounded-3xl overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-lime-200 p-3 rounded-full">
                                                <Calendar className="w-8 h-8 text-lime-800" />
                                            </div>
                                            <h2 className="text-3xl font-semibold text-lime-200 font-poppins">Tentang Gema Karuna</h2>
                                        </div>
                                        <p className="text-lime-100 leading-relaxed text-lg font-poppins">
                                            Gema Karuna adalah program sosialisasi yang diselenggarakan bersama Paguyuban Disabilitas Amanah
                                            Bersama dan stakeholder setempat di desa Gunungronggo. Program ini bertujuan untuk memberikan
                                            pemahaman mendalam tentang berbagai inisiatif dan layanan yang ditawarkan, serta membangun kerjasama
                                            yang kuat antara tim PKM dengan mitra.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="objectives" data-aos="fade-up">
                                <Card className="bg-lime-900 border-none shadow-xl rounded-3xl overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="bg-lime-100 p-3 rounded-full">
                                                <Target className="w-8 h-8 text-lime-800" />
                                            </div>
                                            <h2 className="text-3xl font-semibold text-lime-100 font-poppins">Tujuan Program</h2>
                                        </div>
                                        <div className="grid gap-6">
                                            <div className="bg-lime-50 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                                                <Badge className="bg-lime-200 text-lime-900 text-lg px-4 py-2">01</Badge>
                                                <p className="text-gray-700 mt-4 text-lg font-poppins">Meningkatkan pemahaman masyarakat tentang program Karuna</p>
                                            </div>
                                            <div className="bg-lime-50 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                                                <Badge className="bg-lime-200 text-lime-900 text-lg px-4 py-2">02</Badge>
                                                <p className="text-gray-700 mt-4 text-lg font-poppins">Membangun kerjasama yang berkelanjutan dengan stakeholder</p>
                                            </div>
                                            <div className="bg-lime-50 p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                                                <Badge className="bg-lime-200 text-lime-900 text-lg px-4 py-2">03</Badge>
                                                <p className="text-gray-700 mt-4 text-lg font-poppins">Menciptakan dampak positif bagi komunitas disabilitas</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="documentation" data-aos="fade-up">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {programs.map((program) => (
                                        <Card key={program.id} className="border-none shadow-xl rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                                            <div className="relative h-64">
                                                <Image
                                                    src={program.image || "/placeholder.svg"}
                                                    alt={program.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <CardContent className="p-6 bg-white">
                                                <h3 className="text-2xl font-semibold text-lime-900 mb-4 font-poppins">{program.title}</h3>
                                                <div className="flex items-center gap-2 text-lime-600 mb-4">
                                                    <Calendar className="w-5 h-5" />
                                                    <span className="text-base font-poppins">{program.date}</span>
                                                </div>
                                                <p className="text-gray-600 text-lg font-poppins">{program.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
                <Card className="bg-lime-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <CardContent className="p-6 text-center">
                        <div className="flex items-center justify-center">
                            <Image src="/aset-gema/4.png" alt="aset gema karuna" width={100} height={100} />
                        </div>
                        <h3 className="text-3xl font-bold text-lime-100 font-poppins">50+</h3>
                        <p className="text-lime-400 font-poppins">Peserta Program</p>
                    </CardContent>
                </Card>
                <Card className="bg-lime-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <CardContent className="p-6 text-center">
                        <div className="flex items-center justify-center">
                            <Image src="/aset-gema/5.png" alt="aset gema karuna" width={100} height={100} />
                        </div>
                        <h3 className="text-3xl font-bold text-lime-100 font-poppins">3</h3>
                        <p className="text-lime-400 font-poppins">Program Utama</p>
                    </CardContent>
                </Card>
                <Card className="bg-lime-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <CardContent className="p-6 text-center">
                        <div className="flex items-center justify-center">
                            <Image src="/aset-gema/6.png" alt="aset gema karuna" width={100} height={100} />
                        </div>
                        <h3 className="text-3xl font-bold text-lime-100 font-poppins">10+</h3>
                        <p className="text-lime-400 font-poppins">Dokumentasi Kegiatan</p>
                    </CardContent>
                </Card>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}