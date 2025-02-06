"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export const Faq = () => {
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    const faqItems = [
        {
            question: "Apa itu Wisata Petik Jambu Firdaus?",
            answer:
                "Wisata Petik Jambu Firdaus adalah destinasi agrowisata di Desa Gunungsari, Kecamatan Tajinan, Kabupaten Malang, di mana pengunjung dapat menikmati pengalaman memetik jambu langsung dari pohonnya. Selain memetik buah, pengunjung juga dapat belajar tentang budidaya jambu dan menikmati pemandangan alam yang asri.",
        },
        {
            question: "Di mana lokasi Wisata Petik Jambu Firdaus?",
            answer:
                "Wisata ini terletak di Desa Gunungsari, Kecamatan Tajinan, Kabupaten Malang, Jawa Timur. Lokasinya mudah diakses dari pusat Kota Malang, dengan perjalanan sekitar 45 menit hingga 1 jam menggunakan kendaraan pribadi.",
        },
        {
            question: "Kapan waktu terbaik untuk berkunjung?",
            answer:
                "Waktu terbaik untuk berkunjung adalah pada musim panen jambu, biasanya antara bulan Oktober hingga Desember. Namun, Wisata Petik Jambu Firdaus buka sepanjang tahun dengan aktivitas yang bervariasi setiap musim.",
        },
        {
            question: "Apa saja jenis jambu yang tersedia untuk dipetik?",
            answer:
                "Di Wisata Petik Jambu Firdaus, tersedia berbagai jenis jambu seperti jambu biji merah, jambu biji putih, dan jambu air. Pengunjung dapat memilih dan memetik jambu sesuai dengan preferensi mereka.",
        },
    ]

    return (
        <section
            className="relative bg-[url('/aset-home/hero2.webp')] bg-cover bg-center bg-fixed w-full pb-20"
        >
            <div className="absolute inset-0 bg-[#F0FFF0] opacity-90"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex items-center justify-center" data-aos="fade-up">
                        <HelpCircle className="w-12 h-12 text-[#2D3356] mt-20" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#2D3356] font-poppins" data-aos="fade-up">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-xl text-[#2D3356] max-w-2xl font-poppins" data-aos="fade-up">
                        Pertanyaan yang sering ditanyakan oleh pengunjung dan mungkin kamu juga menanyakannya.
                    </p>
                    <div className="h-1 w-20 bg-white rounded-full mt-2" data-aos="fade-up" />
                </div>
                <div className="mx-auto max-w-3xl mt-12" data-aos="fade-up">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                        value={activeItem}
                        onValueChange={setActiveItem}
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="border border-lime-500 rounded-lg overflow-hidden shadow-sm font-poppins"
                            >
                                <AccordionTrigger
                                    className="flex justify-between items-center w-full p-4 text-left text-white bg-lime-900 hover:bg-lime-800 transition-colors duration-200"
                                    onClick={() => setActiveItem(activeItem === `item-${index + 1}` ? undefined : `item-${index + 1}`)}
                                >
                                    <span className="font-semibold text-lg font-poppins">{item.question}</span>
                                </AccordionTrigger>
                                <AnimatePresence>
                                    {activeItem === `item-${index + 1}` && (
                                        <AccordionContent className="p-4 bg-white" forceMount>
                                            <div>
                                                <p className="text-lime-900 font-poppins">{item.answer}</p>
                                            </div>
                                        </AccordionContent>
                                    )}
                                </AnimatePresence>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
