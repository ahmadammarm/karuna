"use client"

import About from "@/components/About";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import Loading from "@/components/Loading";
import { useState } from "react";



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-b from-white to-gray-100">
            <Hero />
            <About />
            <Faq />
        </div>
    );
}
