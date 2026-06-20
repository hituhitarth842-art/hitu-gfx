import React, { useState } from "react";
import { defaultFAQs } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative py-24 bg-[#02050b] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00d2ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full py-1 px-3 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
              FAQ's
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-sm">
            Answers to key development constraints, software usage, schedules, and ordering parameters.
          </p>
        </div>

        {/* Accordions panel block */}
        <div className="space-y-4">
          {defaultFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#080f21]/80 border-blue-500/30 shadow-xl shadow-blue-500/5"
                    : "bg-[#040813]/40 border-slate-900 hover:border-slate-800"
                }`}
              >
                {/* Header item trigger bar */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:cursor-pointer"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 p-1.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-400 border-blue-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body animated transition dropdown */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 border-t border-slate-800/60" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans bg-slate-950/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
