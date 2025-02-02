"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const processes = [
  {
    title: "Pengumpulan Limbah",
    description:
      "Kami mengumpulkan limbah kotoran ternak kambing dari kandang-kandang kami secara rutin, memastikan kebersihan dan kesehatan hewan ternak.",
    icon: "🐐",
  },
  {
    title: "Proses Pengolahan",
    description:
      "Limbah kotoran kambing diolah melalui proses fermentasi dan pengomposan, mengubahnya menjadi pupuk organik yang kaya nutrisi.",
    icon: "🔄",
  },
  {
    title: "Hasil Pupuk Eco-Farming",
    description:
      "Pupuk organik yang dihasilkan digunakan untuk menyuburkan tanaman di area wisata kami dan juga dijual kepada petani lokal.",
    icon: "🌱",
  },
]

export function EcoFarmingProcess() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <div className="flex justify-between mb-4">
        {processes.map((process, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer text-4xl ${index === activeIndex ? "opacity-100" : "opacity-50"}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveIndex(index)}
          >
            {process.icon}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="h-1 bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: `${((activeIndex + 1) / processes.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>{processes[activeIndex].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{processes[activeIndex].description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

