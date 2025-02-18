import type { Metadata } from "next";
import "./globals.css";
import { Fredoka, Poppins } from 'next/font/google'
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
})

const fredoka = Fredoka({
    subsets: ['latin'],
    variable: '--font-fredoka',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
})



export const metadata: Metadata = {
  title: "Karuna - Program Pengabdian Masyarakat",
  description: "Program pengabdian yang berfokus pada pelatihan entrepreneur skills untuk Paguyubuan Bintang Harapan dalam mengoptimalkan potensi Perkebunan Jambu di Desa Gunung Sari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} ${fredoka.variable} ${fredoka.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
