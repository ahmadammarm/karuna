"use client"

import About from "@/components/homepage/About";
import {Faq} from "@/components/homepage/Faq";
import { Hero } from "@/components/homepage/Hero";
import Contact from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import Loading from "@/components/layout/Loading";
import { useState } from "react";



export default function HomePage() {

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
        <div className="bg-black">
            <Hero />
            <About />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
}
