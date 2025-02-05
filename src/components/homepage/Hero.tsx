"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const Hero = () => {
    const [, setOffsetY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/aset-home/banner-3.jpg",
            title: "Selamat datang di",
            titleHighlight: "Program Karuna",
            description: "Optimalisasi Wisata Petik Jambu sebagai Eco-eduwisata Melalui Peningkatan Entrepreneur Skills Berbasis Community-Based Inclusive Development dengan Pemberdayaan Paguyuban Disabilitas",
            buttonText: "Selengkapnya",
            buttonLink: "/about",
            imageUrl: "/aset-home/banner-3-copy.jpg",
        },
        {
            image: "/aset-home/hero.webp",
            title: "Edugu",
            titleHighlight: "Pick",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Jelajahi",
            buttonLink: "/edugo-pick",
            imageUrl: "/aset-home/hero.webp",
        },
        {
            image: "/aset-home/hero2.webp",
            title: "Animal",
            titleHighlight: "Explore",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Jelajahi",
            buttonLink: "/#programs",
            imageUrl: "/aset-home/hero2-copy.jpg"
        },
    ];

    const handleScroll = () => {
        setOffsetY(window.scrollY * 0.5);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full min-h-screen">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full min-h-screen transition-opacity duration-500 ${
                        currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className="w-full min-h-screen flex items-center pt-12 bg-cover bg-center relative py-14"
                        style={{
                            backgroundImage: `url('${slide.image}')`,
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed'
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>

                        <div className="container mx-auto relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center md:gap-8">
                                <div className="flex justify-center lg:justify-end md:mb-0 pr-0 md:pr-10 order-1 md:order-2 mt-20">
                                    <img
                                        className="w-[20rem] lg:w-[70%] rounded-[100%] transition-transform duration-500 hover:scale-105"
                                        src={slide.imageUrl}
                                        alt=""
                                        loading="lazy"                                    />
                                </div>
                                <div className="text-center lg:text-left space-y-4 pl-0 md:pl-8 order-2 md:order-1">
                                    <h1
                                    className="text-white text-4xl lg:text-6xl font-bold cursor-default mt-14 mb-10 px-3 font-sans"
                                    >
                                        {slide.title} <span className="text-lime-600 font-sans">{slide.titleHighlight}</span>
                                    </h1>
                                    <p className="text-white text-lg lg:text-xl leading-relaxed font-medium cursor-default px-3 font-sans">
                                        {slide.description}
                                    </p>
                                    <Link href={slide.buttonLink} className="px-3">
                                        <Button className="px-8 py-3 bg-lime-600 border-primary text-lime-50 font-bold rounded-lg hover:bg-white hover:text-primary transition duration-300 mt-10">
                                            {slide.buttonText}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-lime-600/50 p-2 rounded-full text-white hover:bg-lime-600 transition-colors z-20"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-lime-600/50 p-2 rounded-full text-white hover:bg-lime-600 transition-colors z-20"
            >
                <ChevronRight size={24} />
            </button>

        </div>
    );
};

export default Hero;