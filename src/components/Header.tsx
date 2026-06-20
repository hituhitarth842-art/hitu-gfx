import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  ownerName: string;
}

export default function Header({ onContactClick, onWorkClick, ownerName }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                {/* Custom Vector Wing Monogram Logo */}
                <svg
                  className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-350"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h4l5 12 5-12h4L12 21z" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg text-white tracking-wider group-hover:text-indigo-400 transition-colors">
                {ownerName}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#00D2FF]/85">
                Premium Content Design
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("video-portfolio")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Video Editing
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="font-sans font-medium text-sm text-zinc-300 hover:text-white transition-colors hover:cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Action Call for Bookings */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="flex items-center space-x-2 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-extrabold text-sm py-2 px-4 shadow-[0_0_15px_rgba(255,255,255,0.08)] rounded-xl hover:scale-[1.02] transform transition-all duration-200 hover:cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none p-1 bg-white/5 rounded-lg border border-white/10 hover:cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800/80 shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              Portfolio Work
            </button>
            <button
              onClick={() => scrollToSection("video-portfolio")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              🎬 Video Editing Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              🛠 Tools We Use
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              Work Process
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all"
            >
              FAQs
            </button>
            <div className="pt-4 border-t border-zinc-800/70 px-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="flex items-center justify-center space-x-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold py-3 px-5 rounded-xl shadow-lg hover:cursor-pointer"
              >
                <span>🚀 Get in touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
