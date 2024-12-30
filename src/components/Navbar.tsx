'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [ecoEduwisataOpen, setEcoEduwisataOpen] = useState(false)
  const [tourGuideOpen, setTourGuideOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setEcoEduwisataOpen(false)
        setTourGuideOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white fixed shadow-md z-[51] w-full" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <div className="flex items-baseline space-x-4 font-sans text-lg">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'bg-green-200 text-green-900 font-bold'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } px-3 py-2 rounded-md text-sm`}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } px-3 py-2 rounded-md text-sm`}
              >
                About
              </Link>
              <div className="relative">
                <button
                  onClick={() => {
                    setEcoEduwisataOpen(!ecoEduwisataOpen)
                    setTourGuideOpen(false)
                  }}
                  className={`${
                    pathname.startsWith('/edugo-pick') || pathname.startsWith('/animal-explore')
                      ? 'bg-green-200 text-green-900'
                      : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                  } px-3 py-2 rounded-md text-sm font-medium inline-flex items-center`}
                >
                  <span>Eco-Eduwisata</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <Transition
                  show={ecoEduwisataOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/edugo-pick" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-900">
                        EduGo Pick
                      </Link>
                      <Link href="/animal-explore" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-900">
                        Animal Explore
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>
              <Link
                href="/eco-product"
                className={`${
                  pathname === '/eco-product'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Eco-Product
              </Link>
              <div className="relative">
                <button
                  onClick={() => {
                    setTourGuideOpen(!tourGuideOpen)
                    setEcoEduwisataOpen(false)
                  }}
                  className={`${
                    pathname.startsWith('/pengembang') || pathname.startsWith('/wisata-petik-jambu-firdaus')
                      ? 'bg-green-200 text-green-900'
                      : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                  } px-3 py-2 rounded-md text-sm font-medium inline-flex items-center`}
                >
                  <span>Tour Guide</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <Transition
                  show={tourGuideOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/pengembang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-900">
                        Pengembang
                      </Link>
                      <Link href="/wisata-petik-jambu-firdaus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-900">
                        Wisata Petik Jambu Firdaus
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>
              <Link
                href="/faqs"
                className={`${
                  pathname === '/faqs'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                FAQ&apos;s
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green-100 inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <X className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden fixed inset-0 mt-16 bg-white w-full h-[40%] shadow-md" id="mobile-menu">
            <div ref={ref as React.RefObject<HTMLDivElement>} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                About
              </Link>
              <button
                onClick={() => setEcoEduwisataOpen(!ecoEduwisataOpen)}
                className={`${
                  pathname.startsWith('/edugo-pick') || pathname.startsWith('/animal-explore')
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Eco-Eduwisata
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </button>
              {ecoEduwisataOpen && (
                <div className="pl-4">
                  <Link href="/edugo-pick" className="text-green-700 hover:bg-green-200 hover:text-green-900 block px-3 py-2 rounded-md text-sm font-medium">
                    EduGo Pick
                  </Link>
                  <Link href="/animal-explore" className="text-green-700 hover:bg-green-200 hover:text-green-900 block px-3 py-2 rounded-md text-sm font-medium">
                    Animal Explore
                  </Link>
                </div>
              )}
              <Link
                href="/eco-product"
                className={`${
                  pathname === '/eco-product'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Eco-Product
              </Link>
              <button
                onClick={() => setTourGuideOpen(!tourGuideOpen)}
                className={`${
                  pathname.startsWith('/pengembang') || pathname.startsWith('/wisata-petik-jambu-firdaus')
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Tour Guide
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </button>
              {tourGuideOpen && (
                <div className="pl-4">
                  <Link href="/pengembang" className="text-green-700 hover:bg-green-200 hover:text-green-900 block px-3 py-2 rounded-md text-sm font-medium">
                    Pengembang
                  </Link>
                  <Link href="/wisata-petik-jambu-firdaus" className="text-green-700 hover:bg-green-200 hover:text-green-900 block px-3 py-2 rounded-md text-sm font-medium">
                    Wisata Petik Jambu Firdaus
                  </Link>
                </div>
              )}
              <Link
                href="/faqs"
                className={`${
                  pathname === '/faqs'
                    ? 'bg-green-200 text-green-900'
                    : 'text-green-700 hover:bg-green-200 hover:text-green-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                FAQ&apos;s
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Navbar

