"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { EcoFarmingProcess } from "@/components/animal-explore/EcoFarmingProcess"
import { AnimatedNumber } from "@/components/animal-explore/AnimatedNumber"
import Banner from "@/components/layout/Banner"
import { useEffect, useState } from "react"
import Loading from "@/components/layout/Loading"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Footer } from "@/components/layout/Footer"

export default function AnimalExplorePage() {

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

    if(isLoading) {
        return <Loading/>
    }

  return (
    <>
    <Banner title="Animal Explore" imageUrl="/aset-home/banner-4.jpg" href="/" link="Beranda" subtitle="Anjang Karuna" />
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-4xl font-bold text-center mb-8 mt-20"
        data-aos="fade-up"
      >
        Selamat Datang di Program Anjang Karuna
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div
        >
          <Image
            src="/aset-home/about_animal.png"
            alt="Animal Explore"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            data-aos="fade-up"
          />
        </div>
        <div
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Tentang Kami</h2>
          <p className="text-lg mb-4" data-aos="fade-up">
            Animal Explore adalah destinasi wisata unik yang menggabungkan pengalaman berinteraksi dengan hewan dan
            pembelajaran tentang praktik pertanian berkelanjutan.
          </p>
          <div
          >
            <p className="text-lg mb-4" data-aos="fade-up">
              Kami berkomitmen untuk memberikan pengalaman edukatif yang menyenangkan bagi pengunjung dari segala usia,
              sambil mempromosikan praktik pertanian ramah lingkungan dan kesejahteraan hewan.
            </p>
          </div>
        </div>
      </div>

      <h2
        className="text-3xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Eco-Farming: Dari Limbah Menjadi Berkah
      </h2>

      <EcoFarmingProcess />

      <div className="grid md:grid-cols-3 gap-6 my-12" data-aos="fade-up">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 shadow-md shadow-green-900">
            <AnimatedNumber value={1000} duration={2000} />
            <p className="text-lg mt-2">Pengunjung per Bulan</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 shadow-md shadow-green-900">
            <AnimatedNumber value={500} duration={2000} />
            <p className="text-lg mt-2">Kg Pupuk Dihasilkan</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 shadow-md shadow-green-900">
            <AnimatedNumber value={50} duration={2000} />
            <p className="text-lg mt-2">Spesies Hewan</p>
          </CardContent>
        </Card>
      </div>

      <div
        className="bg-green-100 rounded-lg p-8 mb-12"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-semibold mb-4">Manfaat Pupuk Eco-Farming Kami:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Meningkatkan kesuburan tanah secara alami</li>
          <li>Ramah lingkungan dan bebas bahan kimia berbahaya</li>
          <li>Mendukung pertanian berkelanjutan</li>
          <li>Mengurangi limbah dan menciptakan siklus nutrisi tertutup</li>
          <li>Memberikan pengalaman edukasi bagi pengunjung tentang proses eco-farming</li>
        </ul>
      </div>

      <div
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">Dokumentasi Kegiatan</h3>
      </div>
    </div>
    <Footer />
    </>
  )
}

