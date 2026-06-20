import React from "react";
import { Star, ShieldCheck, MessageSquare } from "lucide-react";
import { defaultTestimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#040814] overflow-hidden">
      {/* Decorative gradient overlay meshes */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00d2ff03_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full py-1 px-3 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
              Feedback
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            What My Clients Say
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-sm">
            Proven track record of building views, improving average viewer durations, and driving record-breaking CTR performance.
          </p>
        </div>

        {/* Testimonials cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {defaultTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-[#081024]/60 border border-slate-900 rounded-3xl p-8 hover:border-blue-500/20 hover:bg-[#0b1630] transition-colors duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* 5 Yellow Stars Block */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial message */}
                <p className="font-sans text-sm text-gray-300 leading-relaxed italic mb-8">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Creator details panel */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-slate-800">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-sans font-extrabold text-sm text-white">
                        {testimonial.name}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-blue-400 fill-blue-600/10" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 block">
                      {testimonial.handle}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end text-right">
                  <span className="font-mono text-[10px] text-[#00d2ff] font-bold">
                    {testimonial.subscribers}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-emerald-400/80">
                    Verified Partner
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
