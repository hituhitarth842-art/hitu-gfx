import React, { useState } from "react";
import { User, ShieldCheck, Milestone, Edit3, Check } from "lucide-react";

interface AboutProps {
  ownerName: string;
  setOwnerName: (name: string) => void;
}

export default function About({ ownerName, setOwnerName }: AboutProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(ownerName);

  const saveName = () => {
    if (tempName.trim()) {
      setOwnerName(tempName.trim());
    }
    setIsEditing(false);
  };

  return (
    <section id="about" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar side (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer circular rotating glow accent halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Avatar Image Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-zinc-900 bg-zinc-900/80 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="https://i.ibb.co/6d9ZBF3/Chat-GPT-Image-Jun-19-2026-03-23-16-PM.png"
                    alt={ownerName}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 bg-zinc-950"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay brand text on bottom removed per user request */}
                </div>
              </div>

              {/* Verified Badge on top right of avatar */}
              <div className="absolute top-4 right-4 bg-indigo-600 text-white rounded-full p-2.5 shadow-lg border border-indigo-400/20 animate-pulse">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* About Biography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full py-1 px-3 mb-4 w-fit">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-mono text-[10px] text-indigo-300 uppercase tracking-widest font-semibold text-left">
                About Me
              </span>
            </div>

            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Insights Into My Journey
            </h2>

            {/* Editable name label row */}
            <div className="flex items-center space-x-3 mb-6 bg-zinc-900/30 border border-zinc-800/80 p-3 rounded-2xl max-w-sm">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center font-mono font-bold text-indigo-400">
                Me
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="bg-zinc-950 border border-indigo-500 rounded px-2 py-1 text-sm text-white focus:outline-none w-full"
                    />
                    <button
                      onClick={saveName}
                      className="bg-indigo-600 p-1 rounded text-white hover:bg-indigo-500 hover:cursor-pointer"
                      title="Save Name"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between group/row">
                    <div>
                      <p className="font-sans font-bold text-sm text-white">{ownerName}</p>
                      <p className="font-mono text-[10px] text-zinc-500 uppercase">Thumbnail & Video Consultant</p>
                    </div>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-zinc-500 hover:text-white p-1 rounded hover:bg-zinc-800 opacity-0 group-hover/row:opacity-100 transition-opacity"
                      title="Rename Me"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Core updated bio texts */}
            <div className="space-y-6 text-zinc-300 font-sans text-base leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-semibold underline decoration-indigo-500/50 decoration-2">{ownerName}</span>, a Creative Designer and Video Editor specializing in YouTube thumbnails, video editing, branding, and digital content creation.
              </p>
              <p>
                I help creators and businesses improve their content quality, attract more viewers, and build stronger brands through strategic design and professional editing.
              </p>
            </div>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-md">
              <div className="border border-zinc-800/80 bg-zinc-900/30 rounded-2xl p-4 flex items-start gap-3 hover:border-indigo-500/20 transition-colors">
                <Milestone className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="font-sans font-bold text-white text-lg">5+ Years</p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase">Active Experience</p>
                </div>
              </div>
              <div className="border border-zinc-800/80 bg-zinc-900/30 rounded-2xl p-4 flex items-start gap-3 hover:border-indigo-500/20 transition-colors">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-sans font-bold text-white text-lg">100% On-Time</p>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase">Delivery SLA</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
