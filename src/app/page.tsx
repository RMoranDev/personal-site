import { CodeWindow } from "@/components/CodeWindow";
import { Header } from "@/components/Header"
import { HeroLeft } from "@/components/HeroLeft";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none" />
      
      <div className="relative">
        <Header />
        <main className="flex flex-col md:flex-row gap-10 p-6 max-w-7xl mx-auto pt-16">
        <HeroLeft />
        <CodeWindow />
        </main>
      </div>
    </div>

  );
}