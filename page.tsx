// app/page.tsx — Server Component (no "use client" needed here)
import AuroraBackground from "@/components/AuroraBackground";
import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import Projects       from "@/components/Projects";
import Skills         from "@/components/Skills";
import Resume         from "@/components/Resume";
import Contact        from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed aurora layer behind everything */}
      <AuroraBackground />

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content stacks above the aurora */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />

        {/* Footer */}
        <footer className="py-10 text-center text-white/25 text-sm">
          <div className="section-divider mb-8 max-w-2xl mx-auto" />
          <p>
            © {new Date().getFullYear()} Yong Jie Ern.
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </footer>
      </main>
    </>
  );
}
