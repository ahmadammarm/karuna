"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Loading from "@/components/layout/Loading"
import Banner from "@/components/layout/Banner"
import AOS from "aos"
import "aos/dist/aos.css"
import { Footer } from "@/components/layout/Footer"
import { Award, Leaf, Cherry, Target, Camera, Users, FileText } from "lucide-react"

export default function SanggarKarunaPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: "ease-out-cubic",
        })
    }, [])

    setTimeout(() => {
        setIsLoading(false)
    }, 1500)

    if (isLoading) {
        return <Loading />
    }

    const programDescriptions = [
        {
            id: "keripik-jambu",
            title: "Pelatihan Keripik Jambu Merah",
            description:
                "Program pelatihan pembuatan keripik jambu merah adalah inisiatif pemberdayaan yang dirancang khusus untuk anggota Paguyuban Disabilitas Amanah Bersama di Desa Gunungronggo. Program ini mengajarkan keterampilan mengolah jambu merah lokal menjadi produk keripik yang memiliki nilai jual tinggi dengan menggunakan metode dan peralatan yang inklusif. Peserta akan mempelajari seluruh proses produksi mulai dari pemilihan bahan baku, pengolahan, hingga pengemasan dan pemasaran produk.",
            goals: [
                "Memberikan keterampilan produksi keripik jambu kepada penyandang disabilitas",
                "Menciptakan peluang ekonomi melalui produk olahan jambu bernilai jual tinggi",
                "Memanfaatkan potensi buah jambu lokal dari Desa Gunungronggo",
                "Membangun kemandirian ekonomi anggota paguyuban melalui keterampilan produktif",
            ],
            icon: <Cherry className="w-6 h-6" />,
        },
        {
            id: "eco-print",
            title: "Pelatihan Eco-Print",
            description:
                "Program pelatihan eco-print adalah kegiatan kreatif yang mengajarkan teknik mencetak pola alami dari daun dan bunga pada kain dengan cara yang ramah lingkungan. Dirancang secara inklusif untuk anggota Paguyuban Disabilitas Amanah Bersama, pelatihan ini memungkinkan peserta mengekspresikan kreativitas mereka sambil menciptakan produk tekstil yang unik dan bernilai ekonomi. Metode yang digunakan telah disesuaikan agar mudah diikuti oleh semua peserta terlepas dari jenis disabilitas yang dimiliki.",
            goals: [
                "Mengembangkan keterampilan seni tekstil yang ramah lingkungan",
                "Mendorong ekspresi kreatif para penyandang disabilitas",
                "Menciptakan produk fashion dan dekorasi yang dapat dipasarkan",
                "Meningkatkan kesadaran tentang teknik pewarnaan alami yang berkelanjutan",
            ],
            icon: <Leaf className="w-6 h-6" />,
        },
        {
            id: "selai-jambu",
            title: "Pelatihan Selai Jambu Merah",
            description:
                "Program pelatihan pembuatan selai jambu merah mengajarkan peserta cara mengolah jambu merah segar menjadi selai lezat dengan teknik yang telah disesuaikan untuk kebutuhan penyandang disabilitas. Pelatihan ini mencakup seluruh proses produksi mulai dari pemilihan bahan, pengolahan, hingga pengemasan dan strategi pemasaran. Produk selai jambu menawarkan peluang usaha rumahan yang berkelanjutan dengan modal relatif kecil namun memiliki potensi pasar yang menjanjikan.",
            goals: [
                "Memberikan keterampilan pengolahan pangan yang dapat diterapkan di rumah",
                "Menciptakan produk kuliner yang memiliki daya simpan lama",
                "Memaksimalkan nilai ekonomi buah jambu merah lokal",
                "Membuka peluang wirausaha mandiri bagi penyandang disabilitas",
            ],
            icon: <Cherry className="w-6 h-6" />,
        },
    ]

    const documentationImages = [
        {
            url: "/aset-home/dokumentasi-1.jpg",
            caption: "Peserta sedang belajar teknik pengikatan kain untuk eco-print",
        },
        {
            url: "/aset-home/dokumentasi-2.jpg",
            caption: "Proses pemotongan jambu untuk pembuatan keripik",
        },
        {
            url: "/aset-home/dokumentasi-3.jpg",
            caption: "Hasil karya eco-print dari peserta pelatihan",
        },
        {
            url: "/aset-home/dokumentasi-4.jpg",
            caption: "Pengemasan produk selai jambu merah",
        },
        {
            url: "/aset-home/dokumentasi-5.jpg",
            caption: "Sesi pembelajaran bersama tentang pemasaran produk",
        },
        {
            url: "/aset-home/dokumentasi-6.jpg",
            caption: "Kebersamaan anggota Paguyuban Disabilitas Amanah Bersama",
        },
    ]


    return (
        <>
            <Banner
                title="Sanggar Karuna"
                imageUrl="/aset-home/banner-3.jpg"
                href="/"
                link="Beranda"
                subtitle="Program Pelatihan Inklusif"
            />

            <div className="bg-gradient-to-b from-lime-50 to-white font-poppins">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center mb-20 gap-8" data-aos="fade-up">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-lime-800">Sanggar Karuna</h1>
                            <p className="text-xl text-lime-700 mb-6">Program Pelatihan untuk Paguyuban Disabilitas Amanah Bersama</p>
                            <p className="text-gray-700 mb-8">
                                Memberdayakan masyarakat disabilitas di Desa Gunungronggo melalui pelatihan keterampilan kreatif dan
                                produktif yang inklusif, menghargai keberagaman, dan menciptakan peluang ekonomi berkelanjutan.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-lime-600 hover:bg-lime-700 text-white">Daftar Sekarang</Button>
                                <Button variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-100">
                                    Pelajari Lebih Lanjut
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/aset-home/banner-3.jpg"
                                    alt="Sanggar Karuna"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-lime-900/20 rounded-2xl"></div>
                            </div>
                        </div>
                    </div>

                    <section className="mb-20" data-aos="fade-up">
                        <div className="bg-lime-50 rounded-3xl p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-lime-100 p-3 rounded-full">
                                    <FileText className="w-6 h-6 text-lime-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-lime-800">Tentang Program</h2>
                            </div>

                            <div className="mb-8">
                                <p className="text-gray-700 mb-4">
                                    Sanggar Karuna adalah program pelatihan inklusif yang didesain khusus untuk memberdayakan anggota
                                    Paguyuban Disabilitas Amanah Bersama di Desa Gunungronggo. Melalui pendekatan yang menghargai
                                    keberagaman, program ini fokus pada pengembangan keterampilan produktif yang sesuai dengan potensi
                                    lokal dan kebutuhan pasar.
                                </p>
                                <p className="text-gray-700">
                                    Dengan memanfaatkan sumber daya lokal seperti jambu merah yang melimpah di desa Gunungronggo, program
                                    ini mengajarkan berbagai teknik pengolahan menjadi produk bernilai ekonomi tinggi sambil memperhatikan
                                    aksesibilitas dan kemudahan bagi penyandang disabilitas.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="border-lime-900 bg-lime-900">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="bg-lime-800 p-3 rounded-full mb-4">
                                                <Target className="w-6 h-6 text-lime-200" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3 text-lime-100">Tujuan Utama</h3>
                                            <p className="text-lime-200">
                                                Menciptakan kemandirian ekonomi dan meningkatkan kualitas hidup penyandang disabilitas melalui
                                                pelatihan keterampilan yang membuka peluang wirausaha.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-lime-900 bg-lime-900">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="bg-lime-800 p-3 rounded-full mb-4">
                                                <Users className="w-6 h-6 text-lime-200" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3 text-lime-100">Peserta</h3>
                                            <p className="text-lime-200">
                                                Anggota Paguyuban Disabilitas Amanah Bersama dari berbagai jenis disabilitas dengan minat dalam
                                                pengembangan keterampilan produktif.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-lime-900 bg-lime-900">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="bg-lime-800 p-3 rounded-full mb-4">
                                                <Award className="w-6 h-6 text-lime-200" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3 text-lime-100">Hasil</h3>
                                            <p className="text-lime-200">
                                                Peserta memiliki keterampilan dan kepercayaan diri untuk memproduksi dan memasarkan produk
                                                bernilai ekonomi dari bahan lokal.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center text-lime-800" data-aos="fade-up">
                            Program Pelatihan Inklusif
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
                            <Card className="overflow-hidden border-lime-900 hover:shadow-lg hover:shadow-lime-800/50 transition-all duration-300 bg-lime-900">
                                <div className="relative h-56">
                                    <Image
                                        src="/aset-home/banner-3.jpg"
                                        alt="Pelatihan Keripik Jambu"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-xl font-bold">Keripik Jambu Merah</h3>
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <p className="text-lime-200 mb-4">
                                        Mengolah jambu merah segar menjadi camilan renyah bernilai ekonomi tinggi, dengan teknik pengolahan
                                        yang disesuaikan untuk peserta disabilitas.
                                    </p>

                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden border-lime-900 hover:shadow-lg hover:shadow-lime-800/50 transition-all duration-300 bg-lime-900">
                                <div className="relative h-56">
                                    <Image src="/aset-home/banner-3.jpg" alt="Pelatihan Eco-Print" layout="fill" objectFit="cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-xl font-bold">Eco-Print</h3>
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <p className="text-lime-200 mb-4">
                                        Menciptakan tekstil unik dan ramah lingkungan dengan teknik cetak alami menggunakan daun dan bunga,
                                        mendorong ekspresi kreatif bagi semua peserta.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden border-lime-900 hover:shadow-lg hover:shadow-lime-800/50 transition-all duration-300 bg-lime-900">
                                <div className="relative h-56">
                                    <Image src="/aset-home/banner-3.jpg" alt="Pelatihan Selai Jambu" layout="fill" objectFit="cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white text-xl font-bold">Selai Jambu Merah</h3>
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <p className="text-lime-200 mb-4">
                                        Mengolah jambu merah menjadi selai lezat dengan proses yang inklusif dan adaptif, membuka peluang
                                        usaha rumahan yang menjanjikan.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <section className="mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-10 text-center text-lime-800">Deskripsi dan Tujuan Program</h2>

                        {programDescriptions.map((program, index) => (
                            <div
                                key={program.id}
                                className={`mb-12 ${index < programDescriptions.length - 1 ? "pb-12 border-b border-lime-200" : ""}`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-lime-100 p-3 rounded-full">{program.icon}</div>
                                    <h3 className="text-2xl font-bold text-lime-800">{program.title}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <h4 className="text-xl font-semibold mb-3 text-lime-700">Deskripsi Program</h4>
                                        <p className="text-gray-700 mb-6">{program.description}</p>
                                    </div>

                                    <div className="bg-lime-50 p-6 rounded-xl border border-lime-200">
                                        <h4 className="text-xl font-semibold mb-4 text-lime-700 flex items-center">
                                            <Target className="w-5 h-5 mr-2 text-lime-600" /> Tujuan Program
                                        </h4>
                                        <ul className="space-y-3">
                                            {program.goals.map((goal, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-lime-500 mt-2"></div>
                                                    <span className="text-gray-700">{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="mb-20" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-lime-100 p-3 rounded-full">
                                <Camera className="w-6 h-6 text-lime-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-lime-800">Dokumentasi Kegiatan</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documentationImages.map((image, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-xl">
                                    <div className="relative h-64">
                                        <Image
                                            src={image.url || "/aset-home/banner-3.jpg"}
                                            alt={image.caption}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-sm">{image.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

