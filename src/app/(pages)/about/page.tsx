import About from "@/components/about/About";
import Banner from "@/components/layout/Banner";

export default function AboutPage() {
    return (
        <div>
            <Banner title="Tentang Kami" imageUrl="/aset-home/banner-1.jpeg" href="/" link="Beranda" subtitle="Tentang Kami"  />
            <About />
        </div>
    )
}