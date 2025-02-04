"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Banner from "@/components/layout/Banner"
import Loading from "@/components/layout/Loading"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/layout/Footer"

// Dummy data untuk produk
const products = [
  {
    id: 1,
    name: "Batik Eco Print Scarf",
    price: 250000,
    category: "Fashion",
    image: "/aset-home/ecoprint.png",
  },
  {
    id: 2,
    name: "Selai Jambu Homemade",
    price: 35000,
    category: "Makanan",
    image: "/aset-home/ecoprint.png",
  },
  {
    id: 3,
    name: "Tas Batik Eco Print",
    price: 180000,
    category: "Fashion",
    image: "/aset-home/ecoprint.png",
  },
  { id: 4, name: "Jus Jambu Botol", price: 15000, category: "Minuman", image: "/aset-home/ecoprint.png" },
  {
    id: 5,
    name: "Baju Batik Eco Print",
    price: 300000,
    category: "Fashion",
    image: "/aset-home/ecoprint.png",
  },
  { id: 6, name: "Kue Jambu", price: 50000, category: "Makanan", image: "/aset-home/ecoprint.png" },
]

export default function EduProductPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("Semua")
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "Semua" || product.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    setFilteredProducts(filtered)
  }, [searchTerm, categoryFilter])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Banner title="Edu Product" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Edu Product" />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center mt-10">Katalog Produk</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-2/3"
          />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="md:w-1/3">
              <SelectValue placeholder="Pilih kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Semua">Semua Kategori</SelectItem>
              <SelectItem value="Fashion">Fashion</SelectItem>
              <SelectItem value="Makanan">Makanan</SelectItem>
              <SelectItem value="Minuman">Minuman</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <Badge>{product.category}</Badge>
                <p className="text-lg font-bold mt-2">Rp {product.price.toLocaleString()}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full">Tambah ke Keranjang</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

