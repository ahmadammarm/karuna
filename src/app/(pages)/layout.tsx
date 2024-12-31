"use client"

import Contact from "@/components/Contact";
import Loading from "@/components/Loading";
import { div } from "framer-motion/client";
import React, { useState } from "react";

export default function PagesLayout({
    children
}: {
    children: React.ReactNode
}) {

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
            {children}
            <Contact />
        </div>
    )
}