"use client"

import About from "@/components/about/About";
import Banner from "@/components/layout/Banner";
import Contact from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import { useState } from "react";

export default function AboutPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if(isLoading) {
        return (
            <Loading />
        )
    }


    return (
        <div>
            <Banner title="Tentang Kami" imageUrl="/aset-home/banner-5.jpg" href="/" link="Beranda" subtitle="Tentang Kami"  />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}