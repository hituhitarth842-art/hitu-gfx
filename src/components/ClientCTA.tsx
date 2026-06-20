import React from "react";
import { Sparkles, MessageSquare } from "lucide-react";

interface ClientCTAProps {
  onStartClick: () => void;
}

export default function ClientCTA({ onStartClick }: ClientCTAProps) {
  return (
    <section className="relative py-20 bg-[#040814] overflow-hidden">
      {/* Outer mesh outline */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00d2ff02_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff02_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Dynamic blurred radial nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Bordered card envelope representing high productivity */}
        <div className="relative bg-gradient-to-br from-[#081024] to-[#040813] border border-blue-500/15 rounded-3xl p-8 sm:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle glowing halo */}
          <div className="absolute -top-16 -left-16 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Sparkle Tag */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full py-1.5 px-3.5 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="font-mono text-[9px] text-[#00d2ff] uppercase tracking-widest font-extrabold">
                Get In Touch Today
              </span>
            </div>

            {/* Requested Heading */}
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready To Grow Your Content?
            </h2>

            {/* Requested text */}
            <p className="font-sans text-gray-300 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Whether you need high-converting thumbnails, professional video editing, or complete graphic design solutions, let's create something amazing together.
            </p>

            {/* Requested Button & Scroll trigger */}
            <button
              onClick={onStartClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-sans font-black text-sm py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:scale-[1.03] transition-all hover:cursor-pointer"
            >
              <span>🚀 Start Your Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
