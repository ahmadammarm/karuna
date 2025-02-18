"use client"

import Banner from "@/components/layout/Banner";
import Contact from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import Tim from "@/components/tim-pengembang/Tim";
import { useState } from "react";

export default function PengembangPage() {
    
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
        <div className="bg-[#F0FFF0]">
            <Banner title="Tim Pengembang" imageUrl="/aset-home/banner-3.jpg" href="Tim pengembang" link="" subtitle="" />
            <Tim />
            <Contact />
            <Footer />
        </div>
    )
}