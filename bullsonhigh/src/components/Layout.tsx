import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, TrendingUp, Wallet, ShieldCheck, Mail, Github, Twitter, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "BullsOnHigh", description = "Master Your Money & Build Generational Wealth" }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = `${title} | BullsOnHigh`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Tools", href: "/tools" },
    { name: "Newsletter", href: "/#newsletter" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] py-4 shadow-sm" : "bg-[#f8fafc] py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold tracking-tight text-[#064e3b]">
              BullsOnHigh<span className="text-[#f59e0b]">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-semibold text-[#64748b] hover:text-[#064e3b] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="/tools" className="btn-primary">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="block text-lg font-medium text-slate-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="/tools" className="btn-primary w-full text-center">
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-display font-bold tracking-tight text-[#064e3b]">
                  BullsOnHigh<span className="text-[#f59e0b]">.</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Institutional-grade insights and financial tools designed for the modern long-term investor. Build generational wealth through data, not noise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors"><Twitter size={16} /></a>
                <a href="#" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors"><Github size={16} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 font-display">Resources</h4>
              <nav className="flex flex-col gap-4">
                <a href="/blog" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">Research Lab</a>
                <a href="/tools" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">Wealth Tools</a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">Market Data</a>
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 font-display">Company</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">About Research</a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">Privacy Policy</a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">Terms of Access</a>
              </nav>
            </div>

            <div id="newsletter">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 font-display">Join 10,000+ Investors</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm w-full focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <button className="bg-primary text-white p-2 rounded-lg transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs max-w-2xl text-center md:text-left leading-relaxed">
              <span className="font-bold text-slate-500 uppercase mr-2 tracking-tighter">Disclaimer:</span>
              BullsOnHigh.com provides educational information and tools relating to investments. We are not registered financial advisors. All investments carry risk, and past performance is no guarantee of future results. Consult a professional before making decisions.
            </p>
            <p className="text-slate-400 text-xs font-bold whitespace-nowrap">
              &copy; {new Date().getFullYear()} BullsOnHigh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
