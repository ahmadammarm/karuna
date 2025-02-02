"use client"

import { useState, useEffect } from "react"
import Banner from "@/components/layout/Banner"
import Loading from "@/components/layout/Loading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react"

export default function WisataPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Banner
        title="Wisata Petik Jambu Firdaus"
        imageUrl="/aset-home/banner-1.jpeg"
        href="/"
        link="Beranda"
        subtitle="Wisata Petik Jambu Firdaus"
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Selamat Datang di Wisata Petik Jambu Firdaus</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tentang Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Wisata Petik Jambu Firdaus adalah destinasi agrowisata yang menawarkan pengalaman unik memetik jambu
                segar langsung dari pohonnya. Nikmati keindahan alam dan kesegaran buah jambu pilihan.
              </p>
              <Button>Pelajari Lebih Lanjut</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Galeri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/aset-home/hero2.png"
                  alt="Wisata Petik Jambu 1"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <Image
                  src="/aset-home/hero2.png"
                  alt="Wisata Petik Jambu 2"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <Image
                  src="/aset-home/hero2.png"
                  alt="Wisata Petik Jambu 3"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <Image
                  src="/aset-home/hero2.png"
                  alt="Wisata Petik Jambu 4"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Lokasi dan Kontak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <p>Desa Gunungsari, Kecamatan Tajinan, Kabupaten Malang, Jawa Timur</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <p>+62 123 4567 890</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Program Karuna</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Karuna adalah program pemberdayaan masyarakat yang berfokus pada pengembangan agrowisata dan peningkatan
                ekonomi lokal. Ikuti sosial media kami untuk informasi terbaru tentang program Karuna.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Facebook className="mr-2" />
                  Facebook
                </Button>
                <Button variant="outline">
                  <Instagram className="mr-2" />
                  Instagram
                </Button>
                <Button variant="outline">
                  <Twitter className="mr-2" />
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Lokasi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.507420955202!2d112.70717719999999!3d-8.0496091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd627005d181211%3A0x48323e0f76be6bc3!2sPaguyuban%20Orang%20Tua%20Penyandang%20Disabilitas%20Amanah%20Bersama!5e0!3m2!1sen!2sid!4v1738504714027!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

