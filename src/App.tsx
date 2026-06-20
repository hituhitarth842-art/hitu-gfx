import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Software from "./components/Software";
import ThumbnailPortfolio from "./components/ThumbnailPortfolio";
import VideoPortfolio from "./components/VideoPortfolio";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ClientCTA from "./components/ClientCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Storing Name and Email in state so user can custom inline-rename "[YOUR NAME]" dynamically!
  const [ownerName, setOwnerName] = useState(() => {
    return localStorage.getItem("hitu_gfx_name") || "Hitu GFX";
  });
  
  const [ownerEmail, setOwnerEmail] = useState(() => {
    return localStorage.getItem("hitu_gfx_email") || "hitugfx@gmail.com";
  });

  const handleUpdateName = (newName: string) => {
    setOwnerName(newName);
    localStorage.setItem("hitu_gfx_name", newName);
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Absolute top glowing backdrop nodes matching the Bento Design theme */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/2 left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Header bar */}
      <Header
        onContactClick={scrollToContactForm}
        onWorkClick={scrollToPortfolio}
        ownerName={ownerName}
      />

      {/* Hero section */}
      <Hero
        onContactClick={scrollToContactForm}
        onWorkClick={scrollToPortfolio}
        ownerName={ownerName}
      />

      {/* About segment */}
      <About
        ownerName={ownerName}
        setOwnerName={handleUpdateName}
      />

      {/* Services grid */}
      <Services />

      {/* Professional Software */}
      <Software />

      {/* Graphic Thumbnail items */}
      <ThumbnailPortfolio />

      {/* Video Showcase segment */}
      <VideoPortfolio />

      {/* Dynamic Counter figures */}
      <Stats />

      {/* Workflow Process progressions */}
      <Process />

      {/* Customer testimonials */}
      <Testimonials />

      {/* Accordion FAQs */}
      <FAQ />

      {/* Client conversion section */}
      <ClientCTA onStartClick={scrollToContactForm} />

      {/* Contact box form */}
      <Contact ownerEmail={ownerEmail} />

      {/* General Footer credentials */}
      <Footer
        ownerEmail={ownerEmail}
        ownerName={ownerName}
      />
    </div>
  );
}
