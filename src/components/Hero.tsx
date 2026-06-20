import React from "react";
import { ArrowDown, Flame, Play, Eye, Users } from "lucide-react";
import { creatorsWorkedWith } from "../data";

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  ownerName: string;
}

export default function Hero({ onContactClick, onWorkClick, ownerName }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-zinc-950">
      {/* Dynamic Grid Background with Glow effects matching the Bento Theme */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e4e4e705_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e705_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      
      {/* Organic radial gradients/glowing bubbles from Bento Spec */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Modern Label Badge styled after Bento Spec */}
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full py-1.5 px-4 mb-8 backdrop-blur-sm shadow-xl shadow-indigo-500/5 hover:border-indigo-500/30 transition-all">
          <Flame className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span className="font-sans font-bold text-[11px] text-zinc-300 tracking-wider uppercase">
            Available For Premium Commissions
          </span>
        </div>

        {/* Updated Main Heading */}
        <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          Designing & Editing Content That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-[#00d2ff]">
            Gets Results
          </span>
        </h1>

        {/* Updated Subheading */}
        <p className="font-sans text-zinc-400 text-lg sm:text-xl max-w-3xl mb-12 leading-relaxed">
          Helping creators, brands, and businesses grow through professional thumbnail design, strategic branding, and high-quality video editing.
        </p>

        {/* Hero Call to Actions styled like the Bento design */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <button
            onClick={onWorkClick}
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-sans font-bold text-base py-4 px-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:scale-[1.02] shadow-xl hover:cursor-pointer"
          >
            My Work
          </button>
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-black text-base py-4 px-8 rounded-2xl hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-indigo-500/10 hover:cursor-pointer flex items-center justify-center gap-2"
          >
            <span>🚀 Start Project</span>
          </button>
        </div>

        {/* Trusted Creators Ribbon with Bento styled cards */}
        <div className="w-full max-w-4xl border-t border-zinc-900 pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00d2ff]/80 mb-6 font-semibold">
            Trusted by 200+ Creators for High Quality Thumbnails
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {creatorsWorkedWith.map((creator) => (
              <div
                key={creator.id}
                className="flex items-center space-x-3 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl pl-2 pr-4 py-2 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500/30 group-hover:border-indigo-400 transition-all">
                  <img
                    src={creator.avatarUrl}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <p className="font-sans font-bold text-xs text-white group-hover:text-indigo-400 transition-colors">
                    {creator.name}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-500">
                    {creator.subscribers} Subs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
