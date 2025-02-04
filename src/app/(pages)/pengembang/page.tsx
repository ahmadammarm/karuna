"use client"

import { useState, useEffect } from "react"
import Banner from "@/components/layout/Banner"
import Loading from "@/components/layout/Loading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Footer } from "@/components/layout/Footer"

// Data tim pengembang
const teamMembers = {
  leaders: [
    {
      id: 1,
      name: "Dr. Andi Wijaya",
      role: "Dosen Pembimbing",
      image: "/aset-home/hero2.webp",
      bio: "Ahli dalam pengembangan aplikasi berbasis AI dan machine learning.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    },
    {
      id: 2,
      name: "Budi Santoso, M.Kom.",
      role: "Ketua Tim",
      image: "/aset-home/hero2.webp",
      bio: "Berpengalaman dalam manajemen proyek IT dan pengembangan web.",
      expertise: ["Project Management", "Web Development", "UI/UX Design"],
    },
  ],
  members: [
    {
      id: 3,
      name: "Citra Dewi",
      role: "Backend Developer",
      image: "/aset-home/hero2.webp",
      bio: "Spesialis dalam pengembangan API dan manajemen database.",
      skills: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 4,
      name: "Dian Kusuma",
      role: "Frontend Developer",
      image: "/aset-home/hero2.webp",
      bio: "Ahli dalam membuat antarmuka pengguna yang responsif dan menarik.",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      role: "Mobile Developer",
      image: "/aset-home/hero2.webp",
      bio: "Berfokus pada pengembangan aplikasi mobile lintas platform.",
      skills: ["React Native", "Flutter", "Firebase"],
    },
    {
      id: 6,
      name: "Fira Rahmawati",
      role: "UI/UX Designer",
      image: "/aset-home/hero2.webp",
      bio: "Menciptakan pengalaman pengguna yang intuitif dan estetis.",
      skills: ["Figma", "Adobe XD", "User Research"],
    },
  ],
}

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise?: string[];
  skills?: string[];
}

const MemberCard = ({ member, isLeader = false }: { member: Member; isLeader?: boolean }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-64">
      <Image
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
      <p className="text-gray-600 mb-4">{member.role}</p>
      <p className="mb-4">{member.bio}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {(isLeader ? member.expertise ?? [] : member.skills ?? []).map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
      <Button className="w-full">Lihat Profil</Button>
    </CardContent>
  </Card>
)

export default function PengembangPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Banner title="Pengembang" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Pengembang" />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Tim Pengembang Kami</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Pembimbing & Ketua Tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.leaders.map((leader) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MemberCard member={leader} isLeader={true} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">Anggota Tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.members.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

