'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo and Description Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo-white.png"
                                alt="Karuna"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="text-2xl font-bold text-green-500">
                                Karuna
                            </div>
                        </div>
                        <p className="text-gray-300 mt-4 max-w-md">
                            Program pengabdian yang berfokus pada pelatihan entrepreneur skills untuk Paguyubuan Amanah Bersama dalam mengoptimalkan potensi Perkebunan Jambu di Dusun Gunungronggo.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link href="https://facebook.com" className="hover:text-green-500 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com" className="hover:text-green-500 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="https://youtube.com" className="hover:text-green-500 transition-colors">
                                <Youtube className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Halaman Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-green-500 pb-2 mb-4">Halaman</h3>
                        <ul className="space-y-2">
                            {['Beranda', 'Eco Edu', 'Eco Product', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-300 hover:text-green-500 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Produk Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-green-500 pb-2 mb-4">Produk</h3>
                        <ul className="space-y-2">
                            {['Fashion', 'Pupuk Organik', 'Food and Beverage'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/produk/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-300 hover:text-green-500 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Informasi Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-green-500 pb-2 mb-4">Informasi</h3>
                        <ul className="space-y-2">
                            {['Tentang Kami', 'Hubungi Kami', 'Tim Pengembang'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/informasi/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-300 hover:text-green-500 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map and Contact Section */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-green-500 pb-2 mb-4">Alamat</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                <p className="text-gray-300">
                                    Dusun Gunungronggo, Kecamatan Tajinan, Kabupaten Malang, Jawa Timur
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-green-500" />
                                <p className="text-gray-300">+62 812-3456-7890</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-green-500" />
                                <p className="text-gray-300">contact@karuna.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[300px] rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.507420955202!2d112.70717719999999!3d-8.0496091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd627005d181211%3A0x48323e0f76be6bc3!2sPaguyuban%20Orang%20Tua%20Penyandang%20Disabilitas%20Amanah%20Bersama!5e0!3m2!1sen!2sid!4v1738504714027!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Program Karuna. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

