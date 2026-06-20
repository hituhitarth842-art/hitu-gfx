import React, { useState } from "react";
import { Mail, Send, CheckCircle, UserCheck, MessageCircle, AlertTriangle } from "lucide-react";

interface ContactProps {
  ownerEmail: string;
}

export default function Contact({ ownerEmail }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sentInquiry, setSentInquiry] = useState<any | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);

    // Simulate backend network latency
    setTimeout(() => {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString()
      };

      setSentInquiry(payload);
      setLoading(false);
      setSubmitted(true);

      // Save inquiry to client history
      const savedInquiries = JSON.parse(localStorage.getItem("tiger_visuals_queries") || "[]");
      savedInquiries.push(payload);
      localStorage.setItem("tiger_visuals_queries", JSON.stringify(savedInquiries));

      // Reset
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#02050a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full py-1 px-3 mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
              Contact Me
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="font-sans text-gray-400 mt-2 text-sm">
            Let's discuss raw files, schedule slots, and construct premium thumbnail strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Quick contact credentials sidebar (5 cols) */}
          <div className="md:col-span-4 bg-[#080f21]/60 border border-slate-900 rounded-2xl p-6 space-y-6">
            <div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-2">
                COMMISSIONS STATUS
              </span>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-sans font-extrabold text-[10px] text-emerald-400 uppercase tracking-wider">
                  Commissions Open
                </span>
              </div>
            </div>

            <div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${ownerEmail}`}
                className="font-sans text-sm text-white hover:text-blue-400 transition-colors font-medium break-all underline"
              >
                {ownerEmail}
              </a>
            </div>

            <div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                TYPICAL SLA
              </span>
              <span className="font-sans text-sm text-gray-300 font-medium">
                Under 12-Hour Response
              </span>
            </div>
          </div>

          {/* Form Envelope (8 cols) */}
          <div className="md:col-span-8 bg-[#080f21]/60 border border-slate-900 rounded-2xl p-6 sm:p-8 relative">
            
            {/* Success screen overlay */}
            {submitted && sentInquiry && (
              <div className="absolute inset-0 bg-[#080f21] rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <CheckCircle className="w-14 h-14 text-emerald-400 mb-4" />
                <h3 className="font-sans font-black text-2xl text-white tracking-tight mb-2">Inquiry Received!</h3>
                <p className="font-sans text-xs text-gray-400 mb-6 max-w-sm">
                  Thank you, <span className="text-white font-semibold">{sentInquiry.name}</span>. I've logged your request and will respond to <span className="text-white">{sentInquiry.email}</span> within 12 hours.
                </p>

                {/* Submitted parameters breakdown for elite visual fidelity */}
                <div className="w-full bg-[#030610] rounded-xl border border-slate-900 p-4 text-left space-y-2 mb-6">
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase block">Submitted At</span>
                    <span className="font-mono text-xs text-blue-400">{sentInquiry.timestamp}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase block">Message Extract</span>
                    <span className="font-sans text-xs text-gray-300 italic line-clamp-2">"{sentInquiry.message}"</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-xs py-2.5 px-6 rounded-lg transition-colors hover:cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

            {/* Standard inputs form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name-input" className="block text-xs font-mono uppercase text-gray-400 mb-1">
                  Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="e.g. Graham Stephan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#030610] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-mono uppercase text-gray-400 mb-1">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="e.g. graham@youtube.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#030610] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="msg-input" className="block text-xs font-mono uppercase text-gray-400 mb-1">
                  Your message...
                </label>
                <textarea
                  id="msg-input"
                  placeholder="Detail your channel, typical video pacing preferences, weekly volume, or design needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#030610] border border-slate-800 rounded-xl p-3.5 text-sm text-white h-32 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-sans font-black text-sm py-4 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
              >
                <span>{loading ? "Registering Inquiry..." : "Submit Message"}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
