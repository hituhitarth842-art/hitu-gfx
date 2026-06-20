import React from "react";
import * as Icons from "lucide-react";
import { defaultServices } from "../data";

// Type-safe approach to dynamically look up icons from lucide-react
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Sparkles className={className} />;
  return <IconComponent className={className} />;
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e4e4e704_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e704_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full py-1 px-3 mb-4">
            <span className="font-mono text-[10px] text-indigo-300 uppercase tracking-widest font-bold">
              Specialties
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Premium Services Offered
          </h2>
          <p className="font-sans text-zinc-400 mt-4 text-base">
            Professional high-conversion visuals and retention-grabbing editing tailored for digital growth.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid matching Bento layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Decorative top highlight glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Behind-card subtle ambient circle glowing on hover */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-300" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Premium Icon bubble with responsive styling */}
                  <div className="relative w-14 h-14 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-indigo-500/30 transition-all duration-300">
                    <IconRenderer name={service.icon} className="w-6 h-6 text-indigo-400" />
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="font-sans font-bold text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Aesthetic index label */}
                <div className="mt-8 flex items-center justify-between text-zinc-650 group-hover:text-indigo-400/50 font-mono text-xs select-none transition-colors">
                  <span>0{index + 1} / SERVICE</span>
                  <div className="p-1 rounded-full bg-zinc-950 border border-transparent group-hover:border-indigo-500/20 group-hover:bg-zinc-900 transition-all">
                    <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
