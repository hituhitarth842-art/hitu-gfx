import React from "react";
import { Mail, MessageCircle, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  ownerEmail: string;
  ownerName: string;
}

export default function Footer({ ownerEmail, ownerName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02050b] border-t border-slate-900/60 pt-16 pb-12 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900/60">
          
          {/* Logo / Brand block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/10">
                <div className="w-full h-full bg-[#060b13] rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M3 3h4l5 12 5-12h4L12 21z" />
                  </svg>
                </div>
              </div>
              <span className="font-sans font-bold text-base text-white tracking-wider">
                {ownerName}
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
              Thumbnail Designer & Video Editor
            </span>
          </div>

          {/* Email segment */}
          <div className="flex flex-col items-center md:items-end">
            <span className="font-mono text-[9px] text-[#00d2ff] uppercase tracking-widest font-bold mb-1.5 block">
              COLLABORATE IN DIRECT FEED
            </span>
            <div className="flex items-center space-x-2 bg-[#050b18] border border-slate-800 rounded-xl px-4 py-2 hover:border-blue-500/30 transition-all">
              <Mail className="w-4 h-4 text-blue-400" />
              <a
                href={`mailto:${ownerEmail}`}
                className="font-sans text-xs sm:text-sm text-gray-300 hover:text-white font-medium select-all"
              >
                {ownerEmail}
              </a>
            </div>
          </div>

          {/* Commissions tag */}
          <div className="flex items-center space-x-2 bg-emerald-500/5 border border-emerald-500/15 rounded-full py-1.5 px-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse animate-duration-1000" />
            <span className="font-extrabold font-sans text-[10px] text-emerald-400 uppercase tracking-wider">
              Commissions Open
            </span>
          </div>

        </div>

        {/* Social branding handles and copyright footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
          
          {/* Copyright description */}
          <p className="font-sans text-xs text-gray-500">
            © {currentYear} {ownerName}. All rights reserved.
          </p>

          {/* Social Handles with custom glow highlights */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/#"
              className="w-10 h-10 rounded-full bg-[#050b18] border border-slate-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-gray-400 hover:text-emerald-400 flex items-center justify-center transition-all shadow-md"
              title="WhatsApp ChatLink"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Email link */}
            <a
              href={`mailto:${ownerEmail}`}
              className="w-10 h-10 rounded-full bg-[#050b18] border border-slate-800 hover:border-blue-500/30 hover:bg-blue-500/5 text-gray-400 hover:text-blue-400 flex items-center justify-center transition-all shadow-md"
              title="Mail"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* X/Twitter */}
            <a
              href="https://twitter.com/#"
              className="w-10 h-10 rounded-full bg-[#050b18] border border-slate-800 hover:border-cyan-500/30 hover:bg-cyan-500/5 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition-all shadow-md"
              title="Twitter Handle"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/#"
              className="w-10 h-10 rounded-full bg-[#050b18] border border-slate-800 hover:border-pink-500/30 hover:bg-pink-500/5 text-gray-400 hover:text-pink-400 flex items-center justify-center transition-all shadow-md"
              title="Instagram Page"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
