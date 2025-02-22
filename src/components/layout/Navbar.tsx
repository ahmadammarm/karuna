"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
    { href: "/", label: "Beranda" },
    {
        href: "#",
        label: "Eco-Eduwisata",
        dropdown: [
            { href: "/anjang-karuna", label: "Anjang Karya Karuna" },
            { href: "/gema-karuna", label: "Gema Karuna" },
            { href: "/sanggar-karuna", label: "Sanggar Karuna" },
            { href: "/kreasi-karuna", label: "Kreasi Karuna" },
            { href: "/niaga-karuna", label: "Niaga Karuna" },
        ],
    },
    //   { href: "/eco-product", label: "Eco-Product" },
    //   {
    //     href: "#",
    //     label: "Tour Guide",
    //     dropdown: [
    //       { href: "/pengembang", label: "Tim Pengembang" },
    //       { href: "/wisata-petik-jambu-firdaus", label: "Wisata Petik Jambu Firdaus" },
    //     ],
    //   },
    { href: "/eco-product", label: "Eco-Product" },
    {
        href: "#",
        label: "Tour Guide",
        dropdown: [
            { href: "/pengembang", label: "Tim Pengembang" },
        ],
    },
    { href: "/faqs", label: "FAQs" },
    // {
    //     href: "#",
    //     label: "Informasi",
    //     dropdown: [
    //         { href: "/tentang-kami", label: "Tentang Kami" },
    //         { href: "/pengembang", label: "Tim Pengembang" },
    //     ],
    // },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState<{ [key: string]: boolean }>({})
    const pathname = usePathname()

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if (!isMobile && isOpen) {
            setIsOpen(false)
        }
    }, [isMobile, isOpen])

    return (
        <nav className="bg-black/90 shadow-md py-2 px-2 md:px-0 fixed w-full z-50 border-b border-lime-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-800">
                            <img src="/logo.jpg" width={60} height={60} alt="logo" className="rounded-full" />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-14">
                        {navItems.map((item) => (
                            <div key={item.href} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button className="flex items-center text-white hover:text-lime-400 text-md font-bold focus:outline-none font-poppins">
                                            {item.label} <ChevronDown className="ml-1 w-5 h-5" />
                                        </button>
                                        <div className="absolute mt-2 bg-black/80 shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-white hover:bg-lime-800/50 font-poppins"
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`${pathname === item.href ? "text-lime-400" : "text-white hover:text-lime-400"
                                            } text-md font-bold font-poppins`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    className="w-14 h-14 rounded-md text-gray-400 hover:text-gray-500 bg-black/80 border border-lime-700 focus:ring-2 focus:ring-inset z-50 focus:ring-lime-700"
                                >
                                    <Menu className="w-full" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <div className="pt-5 pb-4">
                                    <div className="text-2xl font-bold text-gray-800 px-4 font-poppins">Menu</div>
                                    <div className="mt-6 px-2 space-y-1">
                                        {navItems.map((item) => (
                                            <div key={item.href}>
                                                {item.dropdown ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                setIsDropdownOpen((prev) => ({ ...prev, [item.label]: !prev[item.label] }))
                                                            }
                                                            className="w-full text-left text-gray-700 hover:text-lime-700 px-3 py-2 rounded-md text-lg font-semibold flex justify-between font-poppins"
                                                        >
                                                            {item.label} <ChevronDown className="w-5 h-5" />
                                                        </button>
                                                        {isDropdownOpen[item.label] && (
                                                            <div className="pl-6">
                                                                {item.dropdown.map((dropdownItem) => (
                                                                    <Link
                                                                        key={dropdownItem.href}
                                                                        href={dropdownItem.href}
                                                                        className="block px-3 py-2 text-gray-700 hover:bg-gray-50 font-poppins font-semibold"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        {dropdownItem.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className={`${pathname === item.href
                                                            ? "text-lime-700"
                                                            : "text-gray-700 hover:text-lime-700 hover:bg-gray-50"
                                                            } block px-3 py-2 rounded-md text-lg font-semibold font-poppins`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

