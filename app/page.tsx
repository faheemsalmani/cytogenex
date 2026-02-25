import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TherapeuticExpertise from "../components/TherapeuticExpertise";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TherapeuticExpertise />
        <Career />
        <Contact />
        {/* Additional CTA or Newsletter section */}
        <section className="py-24 bg-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Accelerate Your Clinical Diagnostic Workflows Today</h2>
            <p className="text-xl text-blue-100 mb-10">Start partnering with Cytogenex to empower your medical network with cutting-edge genomics and pathology reporting.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input type="email" placeholder="Professional Email Address" className="px-6 py-4 rounded-full w-full sm:w-96 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-400 font-medium placeholder-slate-400" />
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all shadow-slate-900/20 whitespace-nowrap">
                Subscribe to Papers
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
