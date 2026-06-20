import React, { useState } from "react";
import { defaultVideos } from "../data";
import { Play, Film, Clock, Sparkles, Plus, AlertCircle, X, ChevronRight, Upload } from "lucide-react";

export default function VideoPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  
  // State for user video uploads/mocks to satisfy "I will upload..." clause
  const [videosList, setVideosList] = useState(() => {
    const saved = localStorage.getItem("tiger_visuals_videos");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((v: any) => {
          if (v.id === "vid-1") return defaultVideos[0];
          if (v.id === "vid-2") return defaultVideos[1];
          if (v.id === "vid-3") return defaultVideos[2];
          if (v.id === "vid-4") return defaultVideos[3];
          if (v.id === "vid-5") return defaultVideos[4];
          if (v.id === "vid-6") return defaultVideos[5];
          return v;
        });
      } catch (err) {
        return defaultVideos;
      }
    }
    return defaultVideos;
  });

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Long Form Editing");
  const [newDescription, setNewDescription] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newThumbnailUrl, setNewThumbnailUrl] = useState("");
  const [duration, setDuration] = useState("5m 30s");
  const [viewsSim, setViewsSim] = useState("100K Views");

  const categories = [
    "All",
    "Long Form Editing",
    "Shorts Editing",
    "Reels Editing",
    "Gaming Videos",
    "Documentary Style",
    "YouTube Content"
  ];

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const fallbackThumbnail = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80";
    const defaultPlayLink = "https://assets.mixkit.co/videos/preview/mixkit-liquid-motion-with-glowing-lines-41843-large.mp4"; // generic beautiful motion curve link

    const newItem = {
      id: `custom-vid-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      description: newDescription || "Professional pacing layout and cinematic grades.",
      thumbnailUrl: newThumbnailUrl.trim() || fallbackThumbnail,
      videoUrl: newVideoUrl.trim() || defaultPlayLink,
      watchTime: duration,
      viewsLimit: viewsSim,
      isCustom: true
    };

    const updatedList = [newItem, ...videosList];
    setVideosList(updatedList);
    localStorage.setItem("tiger_visuals_videos", JSON.stringify(updatedList));

    // Resetting
    setNewTitle("");
    setNewDescription("");
    setNewVideoUrl("");
    setNewThumbnailUrl("");
    setShowUploadForm(false);
  };

  const handleDeleteVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = videosList.filter((v: any) => v.id !== id);
    setVideosList(filtered);
    localStorage.setItem("tiger_visuals_videos", JSON.stringify(filtered));
  };

  const filteredVideos = activeFilter === "All"
    ? videosList
    : videosList.filter((v: any) => v.category.trim() === activeFilter.trim());

  const activeVideoDetail = videosList.find((v: any) => v.id === playingVideoId);

  return (
    <section id="video-portfolio" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Decorative meshes */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e4e4e703_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e703_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-50/5 border border-zinc-800 rounded-full py-1.5 px-3.5 mb-4">
              <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest font-extrabold">
                🎬 Video Editing Portfolio
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
              Recent Video Projects
            </h2>
            <p className="font-sans text-zinc-400 mt-2 text-sm max-w-xl">
              Immersive, fast-paced retention editing designed to boost user engagement, watch time benchmarks, and listener recall rates.
            </p>
          </div>

          {/* Upload panel toggle for creator assets */}
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="mt-6 md:mt-0 flex items-center space-x-2 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-black text-xs py-3 px-5 rounded-2xl transition-all shadow-lg hover:cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>Upload My Raw Video/Clips</span>
          </button>
        </div>

        {/* Upload form container to satisfy physical upload simulation */}
        {showUploadForm && (
          <div className="mb-12 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl mx-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-sans font-bold text-white text-base">Register Your Video Sample</h3>
              <button onClick={() => setShowUploadForm(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-xs text-zinc-400 mb-4 bg-indigo-500/5 p-3 rounded-xl border border-indigo-500/10 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>You can plug in standard raw video samples, MP4 lines, YouTube video links, or shorts hooks. They will be immediately rendered in client-side cards.</span>
            </p>

            <form onSubmit={handleAddVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Project Title</label>
                <input
                  type="text"
                  placeholder="e.g. My Cinematic Flight Reel"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Editing Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    {categories.filter(c => c !== "All").map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Video Length / Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 0m 59s"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Short Description</label>
                <textarea
                  placeholder="Tell clients about your specific editing techniques, cuts or sound elements used..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white h-20 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Video Resource Link (MP4)</label>
                  <input
                    type="text"
                    placeholder="Mixkit / custom file link"
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono text-[11px] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1 font-semibold">Thumbnail Cover URL</label>
                  <input
                    type="text"
                    placeholder="Image cover overlay link"
                    value={newThumbnailUrl}
                    onChange={(e) => setNewThumbnailUrl(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono text-[11px] transition-colors"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className="font-sans text-xs text-zinc-400 px-4 py-2 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-bold px-5 py-2.5 rounded-xl transition-colors hover:cursor-pointer"
                >
                  Save to Showcase
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filtering Options */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 max-w-4xl mx-auto backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-200 select-none hover:cursor-pointer ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Video Cards with Hover Glow & Glow Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video: any) => (
            <div
              key={video.id}
              onClick={() => setPlayingVideoId(video.id)}
              className="group relative bg-[#060b14]/90 border border-zinc-900 rounded-3xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Outer dynamic glowing border lines */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-3xl opacity-50 group-hover:opacity-100 group-hover:from-indigo-500/40 group-hover:to-cyan-400/40 transition-all duration-300 pointer-events-none" />

              {/* Inner container */}
              <div className="relative bg-zinc-950 rounded-2xl overflow-hidden">
                
                {/* Thumbnail viewport */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle black overlay shadow */}
                  <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-all duration-300" />

                  {/* Play Button Overlay with glowing core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 border border-indigo-400/30 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:shadow-indigo-500/50 transition-all duration-300">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                      <div className="absolute -inset-1.5 bg-indigo-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Top-left corner category tag */}
                  <div className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-zinc-800/80">
                    <span className="font-mono text-[9px] text-indigo-400 uppercase tracking-wider font-extrabold">
                      {video.category}
                    </span>
                  </div>

                  {/* Bottom details inside overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur-md px-2 py-0.5 rounded text-white font-mono text-[10px]">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{video.watchTime || "12m"}</span>
                  </div>
                </div>

                {/* Video detailed panel info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-sans font-bold text-base text-white line-clamp-1 group-hover:text-indigo-400 transition-colors">
                      {video.title}
                    </h3>
                    
                    {/* Custom delete option for newly registered items */}
                    {video.isCustom && (
                      <button
                        onClick={(e) => handleDeleteVideo(video.id, e)}
                        className="text-zinc-500 hover:text-red-400 p-1 rounded-md hover:bg-zinc-850/60 transition-colors"
                        title="Delete mockup item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <p className="font-sans text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-end text-zinc-600 text-xs">
                    <span className="font-sans text-[11px] text-indigo-400 font-bold group-hover:translate-x-1 transform transition-transform flex items-center gap-1">
                      Watch Video <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Playback Lightbox Player */}
      {playingVideoId && activeVideoDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setPlayingVideoId(null)} />
          
          <div className="relative z-10 max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Closer */}
            <button
              onClick={() => setPlayingVideoId(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700/80 text-white flex items-center justify-center transition-colors hover:cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video container */}
            <div className="aspect-video w-full bg-black relative">
              <video
                src={activeVideoDetail.videoUrl}
                poster={activeVideoDetail.thumbnailUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card info header */}
            <div className="p-6 bg-zinc-950">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-indigo-600/20 text-indigo-300 font-mono text-[10px] tracking-wider font-bold py-0.5 px-2.5 rounded-md border border-indigo-500/10">
                  {activeVideoDetail.category}
                </span>
                <span className="font-mono text-xs text-zinc-500">Duration: {activeVideoDetail.watchTime}</span>
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">
                {activeVideoDetail.title}
              </h3>
              <p className="font-sans text-sm text-zinc-400 mt-2 leading-relaxed">
                {activeVideoDetail.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
