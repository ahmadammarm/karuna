"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Loading from "@/components/layout/Loading"
import Banner from "@/components/layout/Banner"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Footer } from "@/components/layout/Footer"

export default function EduguPickPage() {

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

  const batikSteps = [
    {
      title: "Persiapan Bahan",
      content:
        "Siapkan kain putih, daun-daunan, bunga, dan tali. Pilih daun yang memiliki bentuk unik dan tekstur yang menarik.",
      image: "/aset-home/banner-1.jpeg",
    },
    {
      title: "Penyusunan Motif",
      content:
        "Susun daun dan bunga di atas kain sesuai dengan pola yang diinginkan. Pastikan susunannya rapi dan menarik.",
      image: "/aset-home/banner-1.jpeg",
    },
    {
      title: "Pengikatan",
      content:
        "Gulung kain dengan hati-hati agar susunan daun tidak bergeser. Ikat kain dengan tali secara merata dan kencang.",
      image: "/aset-home/banner-1.jpeg",
    },
    {
      title: "Perebusan",
      content: "Rebus kain yang sudah diikat dalam air mendidih yang sudah dicampur dengan fiksator selama 1-2 jam.",
      image: "/aset-home/banner-1.jpeg",
    },
    {
      title: "Pendinginan",
      content: "Angkat kain dari air rebusan dan biarkan dingin secara alami. Jangan dibuka dulu ikatannya.",
      image: "/aset-home/banner-1.jpeg",
    },
    {
      title: "Pembukaan",
      content: "Setelah kain dingin, buka ikatan dan lepaskan daun-daunan. Lihat hasil motif yang terbentuk pada kain.",
      image: "/aset-home/banner-1.jpeg",
    },
  ]

  const jambuBudidaya = [
    {
      title: "Pemilihan Bibit",
      content: "Pilih bibit jambu unggul dari varietas yang diinginkan. Pastikan bibit sehat dan bebas penyakit.",
      image: "/aset-home/ecoprint.png",
    },
    {
      title: "Persiapan Lahan",
      content: "Siapkan lahan dengan tanah yang gembur dan kaya nutrisi. Pastikan drainase baik.",
      image: "/aset-home/ecoprint.png",
    },
    {
      title: "Penanaman",
      content: "Tanam bibit dengan jarak yang sesuai. Berikan pupuk dasar dan sirami secukupnya.",
      image: "/aset-home/ecoprint.png",
    },
    {
      title: "Perawatan",
      content: "Lakukan penyiraman rutin, pemupukan berkala, dan pemangkasan untuk bentuk pohon yang baik.",
      image: "/aset-home/ecoprint.png",
    },
  ]

  const jambuKreasi = [
    {
      title: "Selai Jambu",
      content: "Buat selai jambu dengan mencampurkan jambu matang, gula, dan perasan jeruk lemon. Masak hingga kental.",
      image: "/aset-home/ecoprint.png",
    },
    {
      title: "Jus Jambu",
      content: "Blender jambu segar dengan es batu dan sedikit gula atau madu untuk minuman segar.",
      image: "/aset-home/ecoprint.png",
    },
    {
      title: "Kue Jambu",
      content: "Buat kue dengan menambahkan potongan jambu ke dalam adonan kue favoritmu.",
      image: "/aset-home/ecoprint.png",
    },
  ]

  return (
    <>
     <Banner title="Edugu Pick" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Edugu Pick" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-10 text-center mt-20" data-aos="fade-up">Edugu Pick: Batik, Jambu, dan Kreasi</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">Pembuatan Batik Eco Print</h2>
          <Tabs defaultValue="alat-bahan" className="mb-6" data-aos="fade-up">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="alat-bahan">Alat dan Bahan</TabsTrigger>
              <TabsTrigger value="langkah-langkah">Langkah-langkah</TabsTrigger>
            </TabsList>
            <TabsContent value="alat-bahan">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Alat dan Bahan</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kain putih (katun atau sutra)</li>
                    <li>Daun-daunan dan bunga</li>
                    <li>Tali atau karet</li>
                    <li>Panci besar</li>
                    <li>Kompor</li>
                    <li>Air</li>
                    <li>Fiksator (tawas, kapur, atau tunjung)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="langkah-langkah" data-aos="fade-up">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {batikSteps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">
                        Langkah {index + 1}: {step.title}
                      </h3>
                      <Image
                        src={step.image || "/aset-home/banner-1.jpeg"}
                        alt={`Ilustrasi ${step.title}`}
                        width={300}
                        height={200}
                        className="mb-4 rounded-lg"
                      />
                      <p>{step.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center mt-10" data-aos="fade-up">Budidaya Jambu</h2>
          <div className="grid gap-6 md:grid-cols-2" data-aos="fade-up">
            {jambuBudidaya.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Ilustrasi ${step.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Tahap {index + 1}: {step.title}
                  </h3>
                  <p>{step.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-center mt-10" data-aos="fade-up">Kreasi Jambu</h2>
          <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
            {jambuKreasi.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Ilustrasi ${item.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.content}</p>
                  <Button className="mt-4">Lihat Resep</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

