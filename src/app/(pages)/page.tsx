"use client"

import About from "@/components/homepage/About";
import { Faq } from "@/components/homepage/Faq";
import { Hero } from "@/components/homepage/Hero";



export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Faq />
        </div>
    );
}
