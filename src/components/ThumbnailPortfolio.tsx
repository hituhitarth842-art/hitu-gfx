import React, { useState } from "react";
import { defaultThumbnails } from "../data";
import { Maximize2, X, TrendingUp, Sparkles, Plus } from "lucide-react";

export default function ThumbnailPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);

  // In-app customizable thumbnail mock system
  const [thumbnails, setThumbnails] = useState(defaultThumbnails);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Thumbnails");
  const [newCtr, setNewCtr] = useState("12.5% CTR");
  const [newViews, setNewViews] = useState("1.0M Views");
  const [newUrl, setNewUrl] = useState("");

  const categories = ["All", "Thumbnails", "Finance", "Gaming", "Sports", "Vlog / Travel", "Challenge"];

  const filteredThumbnails = activeFilter === "All"
    ? thumbnails
    : thumbnails.filter(t => t.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(t.category.toLowerCase()));

  const handleAddThumbnail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const fallbackImages = [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    ];
    const randomizedImg = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

    const newItem = {
      id: `custom-thumb-${Date.now()}`,
      title: newTitle,
      imageUrl: newUrl.trim() || randomizedImg,
      category: newCategory,
      ctr: newCtr,
      views: newViews
    };

    setThumbnails([newItem, ...thumbnails]);
    setNewTitle("");
    setNewUrl("");
    setIsAdding(false);
  };

  const selectedItem = thumbnails.find(t => t.id === selectedThumbnail);

  return (
    <section id="portfolio" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header content section page */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-50/5 border border-zinc-800 rounded-full py-1.5 px-3.5 mb-4">
              <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest font-extrabold">
                📂 Portfolio
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
              A Glimpse of My Work
            </h2>
            <p className="font-sans text-zinc-400 mt-2 text-sm max-w-xl">
              High CTR graphic thumbnails optimized around click heuristics, vibrant visual lines, and strategic placement of focal subjects.
            </p>
          </div>

          {/* Quick trigger to add a custom thumbnail for testing */}
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="mt-4 md:mt-0 flex items-center space-x-2 bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 text-indigo-300 font-sans font-bold text-xs py-2.5 px-4 rounded-xl transition-all hover:cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Mock New Thumbnail</span>
          </button>
        </div>

        {/* Quick add thumbnail modal overlay */}
        {isAdding && (
          <div className="relative mb-12 p-6 bg-zinc-900/80 border border-indigo-500/20 rounded-3xl max-w-lg mx-auto shadow-2xl">
            <h3 className="font-sans font-bold text-white text-base mb-4">Add Thumbnail Preview</h3>
            <form onSubmit={handleAddThumbnail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Thumbnail Title / Hook</label>
                <input
                  type="text"
                  placeholder="e.g. RETIRED AT AGE 21!"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Thumbnails">Thumbnails</option>
                    <option value="Finance">Finance</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Sports">Sports</option>
                    <option value="Vlog / Travel">Vlog / Travel</option>
                    <option value="Challenge">Challenge</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">CTR Percentage</label>
                  <input
                    type="text"
                    placeholder="e.g. 15.3% CTR"
                    value={newCtr}
                    onChange={(e) => setNewCtr(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">VIEWS GENERATED</label>
                  <input
                    type="text"
                    placeholder="e.g. 2.4M Views"
                    value={newViews}
                    onChange={(e) => setNewViews(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="or blank for random Unsplash"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="font-sans text-xs text-zinc-400 px-4 py-2 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-bold px-4 py-2 rounded-lg transition-colors hover:cursor-pointer"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Thumbnails responsive Bento-styled Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredThumbnails.map((thumbnail) => (
            <div
              key={thumbnail.id}
              onClick={() => setSelectedThumbnail(thumbnail.id)}
              className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5 cursor-pointer"
            >
              {/* Image Aspect ratio container 16:9 for true YouTube viewports */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={thumbnail.imageUrl}
                  alt={thumbnail.title}
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover color film */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top-right corner tag highlighting details */}
                <div className="absolute top-3 right-3 bg-indigo-600/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-indigo-400/20 shadow-lg">
                  <span className="font-mono text-[9px] font-bold text-white tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-cyan-300" />
                    {thumbnail.ctr}
                  </span>
                </div>

                {/* Core action lightbox bubble overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Bottom detail container */}
              <div className="p-5">
                <span className="font-mono text-[9px] text-indigo-400 font-bold tracking-widest uppercase block mb-1">
                  {thumbnail.category}
                </span>
                <h3 className="font-sans font-bold text-sm text-white line-clamp-1 group-hover:text-indigo-400 transition-colors">
                  {thumbnail.title}
                </h3>
                <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-center justify-end text-zinc-500">
                  <span className="font-mono text-[10px] text-emerald-400/95 font-bold uppercase tracking-wider">
                    Verified CTR
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Expander dialog styled with high Bento precision */}
      {selectedThumbnail && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/95 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setSelectedThumbnail(null)} />
          <div className="relative z-10 max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Direct Close Button */}
            <button
              onClick={() => setSelectedThumbnail(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700/50 text-white flex items-center justify-center transition-all hover:cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expander body */}
            <div className="flex flex-col md:flex-row">
              {/* Media layout */}
              <div className="w-full md:w-3/5 bg-zinc-950">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text content layout */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full py-1 px-3 mb-4">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span className="font-mono text-[9px] text-indigo-300 uppercase tracking-wider font-bold">
                      {selectedItem.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight mb-4">
                    {selectedItem.title}
                  </h3>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-6">
                    A custom crafted high CTR design structured around extreme contrast, vivid graphic placements, and strategic thumbnail matrices.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                      <span className="font-sans text-xs text-zinc-500">Benchmark CTR</span>
                      <span className="font-sans font-bold text-sm text-emerald-400">{selectedItem.ctr}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                      <span className="font-sans text-xs text-zinc-500">Views Driven</span>
                      <span className="font-sans font-bold text-sm text-white">{selectedItem.views}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-zinc-500">Design Ratio</span>
                      <span className="font-mono text-xs text-zinc-400">16:9 widescreen</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/80">
                  <button
                    onClick={() => {
                      setSelectedThumbnail(null);
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-black text-sm py-3.5 px-5 rounded-2xl block text-center transition-all duration-200 hover:scale-[1.01] hover:cursor-pointer"
                  >
                    🚀 Enquire About Designs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
