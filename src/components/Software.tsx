import React from "react";
import { defaultTools } from "../data";

// Custom premium rendered emblems for the creative suites
const SoftwareIcon = ({ name, color }: { name: string; color: string }) => {
  switch (name) {
    case "Adobe Photoshop":
      return (
        <div className="w-12 h-12 rounded-xl bg-[#011e30] border border-[#00c4cc]/20 flex items-center justify-center font-sans font-extrabold text-[#31a8ff] text-xl shadow-inner select-none">
          Ps
        </div>
      );
    case "Adobe Premiere Pro":
      return (
        <div className="w-12 h-12 rounded-xl bg-[#1d002e] border border-[#ea77ff]/20 flex items-center justify-center font-sans font-extrabold text-[#ea77ff] text-xl shadow-inner select-none">
          Pr
        </div>
      );
    case "Adobe After Effects":
      return (
        <div className="w-12 h-12 rounded-xl bg-[#13002a] border border-[#cf96fd]/20 flex items-center justify-center font-sans font-extrabold text-[#cf96fd] text-xl shadow-inner select-none">
          Ae
        </div>
      );
    case "Adobe Illustrator":
      return (
        <div className="w-12 h-12 rounded-xl bg-[#261300] border border-[#ff9a00]/20 flex items-center justify-center font-sans font-extrabold text-[#ff9a00] text-xl shadow-inner select-none">
          Ai
        </div>
      );
    case "Canva":
      return (
        <div className="w-12 h-12 rounded-xl bg-[#005154] border border-[#00c4cc]/20 flex items-center justify-center font-sans font-extrabold text-white text-base shadow-inner select-none tracking-tighter">
          Canva
        </div>
      );
    case "CapCut":
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/20 flex items-center justify-center shadow-inner select-none">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-5h2v5z" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-sans font-bold text-white">
          S
        </div>
      );
  }
};

export default function Software() {
  return (
    <section id="tools" className="relative py-20 bg-zinc-950">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full py-1 px-3 mb-4">
              <span className="font-mono text-[10px] text-indigo-300 uppercase tracking-widest font-bold">
                🛠 Tools I Use
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
              Professional Toolstack
            </h2>
            <p className="font-sans text-zinc-400 mt-2 text-sm max-w-xl">
              Utilizing industry-standard video editing, design, and graphics compilation engines to secure maximum production value.
            </p>
          </div>
        </div>

        {/* Dynamic Glow Hover Grid with Bento borders */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {defaultTools.map((tool) => (
            <div
              key={tool.name}
              className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={
                {
                  "--hover-glow": tool.color
                } as React.CSSProperties
              }
            >
              {/* Radial gradient background that lights up based on the tool's color on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl pointer-events-none"
                style={{ backgroundColor: tool.color }}
              />

              {/* Core card border glow on hover */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none border"
                style={{ borderColor: tool.color }}
              />

              {/* Software emblem with dynamic shadow highlights */}
              <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                <SoftwareIcon name={tool.name} color={tool.color} />
              </div>

              {/* Software meta details */}
              <span className="font-sans font-bold text-sm text-zinc-200 group-hover:text-white transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
