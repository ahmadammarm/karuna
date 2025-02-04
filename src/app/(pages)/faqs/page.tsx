"use client"

import Banner from "@/components/layout/Banner";
import Loading from "@/components/layout/Loading";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/layout/Footer";

export default function FaqsPage() {

    const [isLoading, setIsLoading] = useState(true)
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if (isLoading) {
        return (
            <Loading />
        )
    }


    const faqItems = [
        {
            question: "Apa itu Wisata Petik Jambu Firdaus?",
            answer: "Wisata Petik Jambu Firdaus adalah destinasi agrowisata di Desa Gunungsari, Kecamatan Tajinan, Kabupaten Malang, di mana pengunjung dapat menikmati pengalaman memetik jambu langsung dari pohonnya. Selain memetik buah, pengunjung juga dapat belajar tentang budidaya jambu dan menikmati pemandangan alam yang asri."
        },
        {
            question: "Di mana lokasi Wisata Petik Jambu Firdaus?",
            answer: "Wisata ini terletak di Desa Gunungsari, Kecamatan Tajinan, Kabupaten Malang, Jawa Timur. Lokasinya mudah diakses dari pusat Kota Malang, dengan perjalanan sekitar 45 menit hingga 1 jam menggunakan kendaraan pribadi."
        },
        {
            question: "Kapan waktu terbaik untuk berkunjung?",
            answer: "Waktu terbaik untuk berkunjung adalah pada musim panen jambu, biasanya antara bulan Oktober hingga Desember. Namun, Wisata Petik Jambu Firdaus buka sepanjang tahun dengan aktivitas yang bervariasi setiap musim."
        },
        {
            question: "Apa saja jenis jambu yang tersedia untuk dipetik?",
            answer: "Di Wisata Petik Jambu Firdaus, tersedia berbagai jenis jambu seperti jambu biji merah, jambu biji putih, dan jambu air. Pengunjung dapat memilih dan memetik jambu sesuai dengan preferensi mereka."
        }
    ]

    return (
        <div>
            <Banner title="FAQs" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="FAQs" />
            <section className="w-full pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center mt-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HelpCircle className="w-12 h-12 text-green-600" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Temukan jawaban untuk pertanyaan umum tentang Program Karuna
                        </p>
                        <div className="h-1 w-20 bg-green-600 rounded-full mt-2" />
                    </motion.div>
                    <div className="mx-auto max-w-3xl mt-12">
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
                                    className="border border-green-200 rounded-lg overflow-hidden shadow-sm"
                                >
                                    <AccordionTrigger
                                        className="flex justify-between items-center w-full p-4 text-left text-gray-800 hover:bg-green-50 transition-colors duration-200"
                                        onClick={() => setActiveItem(activeItem === `item-${index + 1}` ? undefined : `item-${index + 1}`)}
                                    >
                                        <span className="font-semibold text-lg">{item.question}</span>
                                    </AccordionTrigger>
                                    <AnimatePresence>
                                        {activeItem === `item-${index + 1}` && (
                                            <AccordionContent
                                                className="p-4 bg-white"
                                                forceMount
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-gray-600">{item.answer}</p>
                                                </motion.div>
                                            </AccordionContent>
                                        )}
                                    </AnimatePresence>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}