import React from "react";
import { Film, Clock, Rocket } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      icon: <Film className="w-8 h-8 text-[#00d2ff]" />,
      value: "500+",
      label: "Videos Edited",
      glowColor: "rgba(0, 210, 255, 0.15)",
      borderColor: "border-cyan-500/20"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ea77ff]" />,
      value: "50M+",
      label: "Watch Time Generated",
      glowColor: "rgba(234, 119, 255, 0.15)",
      borderColor: "border-purple-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#ff9a00]" />,
      value: "100+",
      label: "Creators Worked With",
      glowColor: "rgba(255, 154, 0, 0.15)",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <section className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#060a16]/80 rounded-3xl p-8 border ${stat.borderColor} hover:border-transparent transition-all duration-300 hover:-translate-y-1`}
              style={
                {
                  "--glow-color": stat.glowColor
                } as React.CSSProperties
              }
            >
              {/* Radial gradient backing */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"
                style={{ backgroundColor: stat.glowColor }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-[#030610]/90 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Big Stat figure */}
                <span className="font-sans font-black text-5xl sm:text-6xl text-white tracking-tight mb-2 drop-shadow-lg">
                  {stat.value}
                </span>

                {/* Subheading label */}
                <span className="font-sans font-semibold text-sm text-gray-400 capitalize tracking-wide">
                  {stat.label}
                </span>
              </div>

              {/* Decorative side accent lines */}
              <div className="absolute left-6 right-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
