"use client"

import Banner from "@/components/layout/Banner";
import Loading from "@/components/layout/Loading";
import { useState } from "react";

export default function EcoProuctPage() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)


    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Banner title="Edu Product" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Edu Product" />
        </div>
    )

}