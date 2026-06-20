import React from "react";
import { defaultProcessSteps } from "../data";
import { ChevronRight } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-[#040815] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Meta */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full py-1 px-3 mb-4">
            <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
              🔄 Workflow
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
            How I Handle Your Project
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-base">
            A precise structured pathway to take raw file segments and concepts and turn them into final master uploads.
          </p>
        </div>

        {/* Stepped Timeline */}
        <div className="relative">
          
          {/* Central progress visual line for desktop */}
          <div className="hidden lg:block absolute top-[57px] left-8 right-8 h-[2px] bg-slate-800/80 z-0" />

          {/* Core Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {defaultProcessSteps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center lg:items-start lg:text-left bg-slate-900/30 lg:bg-transparent border border-slate-900 lg:border-transparent rounded-2xl p-6 lg:p-0"
              >
                {/* Numeric circle tag */}
                <div className="relative w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/40 flex items-center justify-center font-mono font-bold text-lg text-white mb-6 shadow-xl shadow-blue-500/20 transition-all">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00d2ff]">
                    0{step.number}
                  </span>
                  <div className="absolute -inset-0.5 bg-blue-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text details */}
                <h3 className="font-sans font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-xs lg:max-w-none">
                  {step.description}
                </p>

                {/* Right chevron indicator for desktop */}
                {step.number < 5 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-slate-800">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
