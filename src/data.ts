import { Service, Tool, VideoProject, ThumbnailProject, Testimonial, FAQItem, ProcessStep, Creator } from "./types";

export const defaultServices: Service[] = [
  {
    id: "service-1",
    icon: "Target",
    title: "YouTube Thumbnail Design",
    description: "High CTR thumbnails designed to increase clicks and boost channel growth."
  },
  {
    id: "service-2",
    icon: "Video",
    title: "Video Editing",
    description: "Professional long-form and short-form video editing with engaging cuts, transitions, captions, sound effects, and motion graphics."
  },
  {
    id: "service-3",
    icon: "Layout",
    title: "Social Media Design",
    description: "Instagram posts, reels covers, stories, Facebook ads, and social media creatives."
  },
  {
    id: "service-4",
    icon: "Palette",
    title: "Graphic Design",
    description: "Posters, banners, flyers, marketing materials, and custom graphics."
  },
  {
    id: "service-5",
    icon: "Award",
    title: "Branding Design",
    description: "Logos, brand identity systems, color palettes, and visual guidelines."
  },
  {
    id: "service-6",
    icon: "Sparkles",
    title: "Advertisement Creatives",
    description: "High-converting ad creatives for Meta, Google, YouTube, and other platforms."
  }
];

export const creatorsWorkedWith: Creator[] = [
  {
    id: "creator-1",
    name: "Pixelforge Lab",
    subscribers: "13.9k",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "creator-2",
    name: "Dern Brothers",
    subscribers: "324k",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "creator-3",
    name: "Smoky Mountain Fishing",
    subscribers: "1.7k",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "creator-4",
    name: "Ali Abdaal",
    subscribers: "5.4M+",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "creator-5",
    name: "Matt D'Avella",
    subscribers: "3.8M+",
    avatarUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=150&auto=format&fit=crop&q=80"
  }
];

export const defaultTools: Tool[] = [
  {
    name: "Adobe Photoshop",
    iconName: "photoshop",
    category: "Design",
    color: "#31A8FF"
  },
  {
    name: "Adobe Premiere Pro",
    iconName: "premiere",
    category: "Editing",
    color: "#EA77FF"
  },
  {
    name: "Adobe After Effects",
    iconName: "aftereffects",
    category: "FX / Motion",
    color: "#CF96FD"
  },
  {
    name: "Adobe Illustrator",
    iconName: "illustrator",
    category: "Vector",
    color: "#FF9A00"
  },
  {
    name: "Canva",
    iconName: "canva",
    category: "Templates",
    color: "#00C4CC"
  },
  {
    name: "CapCut",
    iconName: "capcut",
    category: "Short-form",
    color: "#FFFFFF"
  }
];

export const defaultVideos: VideoProject[] = [
  {
    id: "vid-1",
    title: "Minimalist Video Ad & Social Campaign",
    category: "Reels Editing",
    description: "Ultra-minimal editorial rhythm, modern serif overlays, elegant color grading, and dynamic product-focused pacing.",
    thumbnailUrl: "https://i.pinimg.com/originals/f6/10/db/f610db95bcfc26876f1084346e81e025.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/expMp4/10/b9/14/10b914798319bd3ddbade1102acdb5a0_720w.mp4",
    watchTime: "0m 18s",
    viewsLimit: "1.5M Views"
  },
  {
    id: "vid-2",
    title: "Short Form Creative Editing Inspiration",
    category: "Shorts Editing",
    description: "Slick, lightning-fast dynamic cuts, zooming transitions, styled captions, and premium high-retention post-production rhythm.",
    thumbnailUrl: "https://i.pinimg.com/originals/35/b8/21/35b82139dda196a02158f628894a4790.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/expMp4/80/1e/f1/801ef10cf6ee3c80a2c71141646cb562_720w.mp4",
    watchTime: "0m 22s",
    viewsLimit: "4.8M Views"
  },
  {
    id: "vid-3",
    title: "Faceless Creator & Cash Cow Documentary",
    category: "Long Form Editing",
    description: "Highly engaged explanatory pattern overlays, automated voice technology pacing, cinematic visual stock transitions, and professional narrative style.",
    thumbnailUrl: "https://i.pinimg.com/originals/0c/2a/aa/0c2aaa191d6930c35e9f449e0d1f56cd.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/expMp4/f6/61/b4/f661b40720623eb24345a3e7bfbbf61b_720w.mp4",
    watchTime: "0m 52s",
    viewsLimit: "850K Views"
  },
  {
    id: "vid-4",
    title: "Speed Ramp & Slow Motion Videography",
    category: "Reels Editing",
    description: "Cinematic slow-motion phone photography tutorials with advanced speed ramp curves, professional camera grading, and high-energy beat tracking.",
    thumbnailUrl: "https://i.pinimg.com/originals/cf/b1/36/cfb1363b90f66d62c5ac97238813ef1b.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/expMp4/b9/af/b2/b9afb2b3ed3356e19b814efe36e69028_720w.mp4",
    watchTime: "0m 15s",
    viewsLimit: "2.3M Views"
  },
  {
    id: "vid-5",
    title: "Art & Romance Aesthetic Edit",
    category: "Reels Editing",
    description: "Vintage warm cinematic transitions, nostalgic film grain overlays, soft color grading, and beautiful classic art framing.",
    thumbnailUrl: "https://i.pinimg.com/originals/fa/18/40/fa18409f62520aad8781ef4a99fa8287.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/expMp4/db/0c/2d/db0c2d8a6b9773a8a952869895a688b0_720w.mp4",
    watchTime: "0m 12s",
    viewsLimit: "3.4M Views"
  },
  {
    id: "vid-6",
    title: "BMW Creative Concept Campaign",
    category: "Commercial & Cinematic",
    description: "Sleek automotive commercial customization, dynamic multi-angle camera flow, extreme slow-motion transitions, and premium high-contrast mood lighting.",
    thumbnailUrl: "https://i.pinimg.com/originals/78/89/3a/78893a50a3fc7fa5b8c144c0c10beea1.jpg",
    videoUrl: "https://v1.pinimg.com/videos/iht/720p/f8/f3/23/f8f3238b4ffc75dd6101359926792dc9.mp4",
    watchTime: "0m 10s",
    viewsLimit: "4.2M Views"
  }
];

export const defaultThumbnails: ThumbnailProject[] = [
  {
    id: "thumb-hitugfx-new-11",
    title: "ANIME FANTASY BATTLE",
    imageUrl: "https://i.ibb.co/LD0sWnzg/image-1.jpg",
    category: "Thumbnails",
    ctr: "20.4% CTR",
    views: "7.2M Views"
  },
  {
    id: "thumb-hitugfx-new-10",
    title: "ELITE CYBERPUNK SHOWCASE",
    imageUrl: "https://i.ibb.co/JWqsQL5v/image.jpg",
    category: "Thumbnails",
    ctr: "19.8% CTR",
    views: "6.7M Views"
  },
  {
    id: "thumb-hitugfx-new-9",
    title: "DARK LEGEND CONCEPT",
    imageUrl: "https://i.ibb.co/Z6f566L9/image-6.jpg",
    category: "Thumbnails",
    ctr: "19.3% CTR",
    views: "6.1M Views"
  },
  {
    id: "thumb-hitugfx-new-8",
    title: "CHAMPIONS GAMING REVEAL",
    imageUrl: "https://i.ibb.co/8DzDsfKx/image-5.jpg",
    category: "Thumbnails",
    ctr: "18.1% CTR",
    views: "5.4M Views"
  },
  {
    id: "thumb-hitugfx-new-7",
    title: "PRO ADVANCED STORYBOARDING",
    imageUrl: "https://i.ibb.co/5hfXPCqj/image-4.jpg",
    category: "Thumbnails",
    ctr: "17.4% CTR",
    views: "4.8M Views"
  },
  {
    id: "thumb-hitugfx-new-6",
    title: "ULTIMATE FUTURISTIC REVEAL",
    imageUrl: "https://i.ibb.co/fV42MvMY/image-3.jpg",
    category: "Thumbnails",
    ctr: "16.2% CTR",
    views: "4.1M Views"
  },
  {
    id: "thumb-hitugfx-new-5",
    title: "ELITE RETRO BREAKTHROUGH",
    imageUrl: "https://i.ibb.co/3mhSs1n9/image-2.jpg",
    category: "Thumbnails",
    ctr: "15.1% CTR",
    views: "3.5M Views"
  },
  {
    id: "thumb-hitugfx-new-4",
    title: "HIGH-END CONSPIRACY DESIGN",
    imageUrl: "https://i.ibb.co/dJkXJ4Jq/image-1.jpg",
    category: "Thumbnails",
    ctr: "14.8% CTR",
    views: "3.2M Views"
  },
  {
    id: "thumb-hitugfx-new-3",
    title: "PREMIUM GAMING THUMBNAIL",
    imageUrl: "https://i.ibb.co/spKHHK6X/image.jpg",
    category: "Thumbnails",
    ctr: "13.9% CTR",
    views: "2.1M Views"
  },
  {
    id: "thumb-hitugfx-new-2",
    title: "CREATIVE THUMBNAIL DESIGN",
    imageUrl: "https://i.ibb.co/nsypxGGH/Chat-GPT-Image-Jun-7-2026-10-08-14-PM.png",
    category: "Thumbnails",
    ctr: "14.2% CTR",
    views: "1.9M Views"
  },
  {
    id: "thumb-hitugfx-new",
    title: "MY NEW CREATIVE BREAKTHROUGH",
    imageUrl: "https://i.ibb.co/MxD5wp2Y/Chat-GPT-Image-Jun-9-2026-11-55-47-AM-1.png",
    category: "Thumbnails",
    ctr: "15.4% CTR",
    views: "2.8M Views"
  },
  {
    id: "thumb-chatgpt",
    title: "THE SECRET CHATGPT EMPIRE EXPOSED",
    imageUrl: "https://i.ibb.co/xSyPVy1S/Chat-GPT-Image-Jun-8-2026-12-14-05-PM.png",
    category: "Thumbnails",
    ctr: "16.8% CTR",
    views: "5.4M Views"
  },
  {
    id: "thumb-1",
    title: "NEON TACTICAL FORCE",
    imageUrl: "https://i.ibb.co/27hWj540/image-2.jpg",
    category: "Thumbnails",
    ctr: "22.5% CTR",
    views: "8.9M Views"
  },
  {
    id: "thumb-2",
    title: "CHROME RACING OUTLAW",
    imageUrl: "https://i.ibb.co/PZr1mSjp/image-3.jpg",
    category: "Thumbnails",
    ctr: "23.4% CTR",
    views: "9.2M Views"
  },
  {
    id: "thumb-3",
    title: "CYBERPUNK GLITCH SHOWDOWN",
    imageUrl: "https://i.ibb.co/Q71jXzbq/image-4.jpg",
    category: "Thumbnails",
    ctr: "24.1% CTR",
    views: "9.5M Views"
  },
  {
    id: "thumb-4",
    title: "STEPHEN CURRY MYSTERY SHOT",
    imageUrl: "https://i.ibb.co/Qv3MqFGm/image-5.jpg",
    category: "Thumbnails",
    ctr: "21.8% CTR",
    views: "7.4M Views"
  }
];

export const defaultProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Project Discussion",
    description: "Align on target audience, goals, dynamic requirements, style references, and overall delivery expectation."
  },
  {
    number: 2,
    title: "Content Planning",
    description: "Draft storyboard concepts, review raw files, plan text elements, hooks, highlights, and sound FX map."
  },
  {
    number: 3,
    title: "Editing & Design",
    description: "Core design layout creation, frame edits, pacing cuts, title renders, graphics overlays, color grading, and sound mixing."
  },
  {
    number: 4,
    title: "Review & Revisions",
    description: "Collaborative feedback phase. Refine transitions, polish micro-graphics, tweak captions and optimize click-ability."
  },
  {
    number: 5,
    title: "Final Delivery",
    description: "Quick generation of prime 4K/FullHD outputs, organized dynamic assets, source project delivery, and final launch templates."
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dental Digest",
    handle: "@DentalDigest",
    subscribers: "20.7M+ Followers",
    rating: 5,
    comment: "Exceptional service! My experience with Tiger was outstanding. Not only did he deliver in record time, but the quality of his work exceeded my expectations. His thumbnails are not just visually stunning but also strategically crafted to attract clicks. Working with him was seamless, and his professionalism shines through. Highly recommended for anyone looking for a top-notch Thumbnail designer with lightning-fast turnaround.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    name: "Apex Finance Hub",
    handle: "@apexfinance",
    subscribers: "1.4M+ Subscribers",
    rating: 5,
    comment: "Tiger and his team took our retention rate from 40% to 58% simply through premium video pacing and custom sound FX mapping. They truly understand what keeps viewers glued to the screen. The CTR on our thumbnails went up by 4% immediately after switching!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-3",
    name: "Sparks Gaming",
    handle: "@sparksgaming_yt",
    subscribers: "850K+ Subscribers",
    rating: 5,
    comment: "Absolutely unmatched work ethic! The documentary and gaming style edits are highly stylized and look high-budget. Very cooperative, resolves revisions within hours, and handles heavy file loads smoothly.",
    avatarUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=150&auto=format&fit=crop&q=80"
  }
];

export const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What do you need from me to create a thumbnail?",
    answer: "I need your raw photo assets (high-res selfie/subject images if possible), any competitor reference link if you have a specific style in mind, your video's core concept, and the target text/hook you want displayed."
  },
  {
    id: "faq-2",
    question: "How long does it take to create a Thumbnail?",
    answer: "My standard delivery is 24 to 48 hours. If you need urgent turnaround, we have lightning-fast 12-hour express options for regular clients to guarantee you never miss a prime uploading slot."
  },
  {
    id: "faq-3",
    question: "What if I don't like the Thumbnail you made?",
    answer: "Every order comes with unlimited revisions! We will adjust colors, fonts, facial features, or layout structures until you are 100% satisfied with the finish."
  },
  {
    id: "faq-4",
    question: "What Software do you use to create Thumbnails?",
    answer: "I primarily design using Adobe Photoshop paired with Adobe Illustrator for vector branding, and Lightroom for premium cinematic color grading and high contrast light rendering."
  },
  {
    id: "faq-5",
    question: "What does a thumbnail cost and are there discounts?",
    answer: "We offer both pay-per-thumbnail options and highly discounted monthly retainer programs. Retainers are perfect for consistent weekly creators who want dedicated support and priority booking."
  }
];
