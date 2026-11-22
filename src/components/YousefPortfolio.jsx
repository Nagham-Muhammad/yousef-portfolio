import React, { useState, useEffect, useRef } from 'react';
import Yousef from '../assets/images/Yousef.jpg';

const WHATSAPP_NUMBER = '201227525878';
const WHATSAPP_DISPLAY = '+20 122 752 5878';
const SHOWREEL_URL =
  'https://res.cloudinary.com/vsttlpiy/video/upload/v1795366580/jou_hassan_final.mp4';
const FACEBOOK_URL = 'https://www.facebook.com/yousef.mohamed.9786';
const INSTAGRAM_URL =
  'https://www.instagram.com/jouhassan_0?hvrq=aHVlajNicXRzb2R1';

const reelsData = [
  {
    id: 1,
    title: 'Reel 01',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203519/Siko_1-6.mp4',
  },
  {
    id: 2,
    title: 'Reel 02',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203511/Hindi_1-4.mp4',
  },
  {
    id: 3,
    title: 'Reel 03',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203509/%D9%8A%D9%88%D8%B3%D9%81_%D8%AE%D9%85%D9%8A%D8%B3-12.mp4',
  },
  {
    id: 4,
    title: 'Reel 04',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203508/%D8%A7%D9%84%D9%83%D9%88%D8%AF-7.mp4',
  },
  {
    id: 5,
    title: 'Reel 05',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203470/10-1.mp4',
  },
  {
    id: 6,
    title: 'Reel 06',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203465/Salma_%D8%A7%D9%84%D9%88%D8%A7%D9%86_%D9%85%D9%86_%D8%BA%D9%8A%D8%B1_%D9%84%D9%88%D8%AC%D9%88-5.mp4',
  },
  {
    id: 7,
    title: 'Reel 07',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203464/%D9%81%D8%B1%D9%88%D9%82_%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85_%D8%AA%D8%B9%D8%AF%D9%8A%D9%84-9.mp4',
  },
  {
    id: 8,
    title: 'Reel 08',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203459/6-2.mp4',
  },
  {
    id: 9,
    title: 'Reel 09',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203451/%D9%85%D9%85%D8%AF%D9%88%D8%AD_%D8%A7%D9%8A%D8%AF%D9%8A%D8%AA-11.mp4',
  },
  {
    id: 10,
    title: 'Reel 10',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203450/%D8%B9%D8%AF%D9%85_%D9%88%D8%AC%D9%88%D8%AF_%D8%B9%D9%82%D8%AF_%D8%AA%D8%B9%D8%AF%D9%8A%D9%84_-8.mp4',
  },
  {
    id: 11,
    title: 'Reel 11',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203434/7-3.mp4',
  },
  {
    id: 12,
    title: 'Reel 12',
    videoSrc: 'https://res.cloudinary.com/vsttlpiy/video/upload/v1795203432/%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D8%A7%D8%B7%D9%81-10.mp4',
  },
];

function getCloudinaryPoster(videoSrc, second = 2) {
  if (!videoSrc || !videoSrc.includes('/video/upload/')) return undefined;
  return videoSrc
    .replace('/video/upload/', `/video/upload/so_${second}/`)
    .replace(/\.[^/.]+$/, '.jpg');
}

function ReelCard({ reel, isPlaying, onTogglePlay, onExpand, videoRef }) {
  const hasVideo = Boolean(reel.videoSrc && reel.videoSrc.trim() !== '');
  const posterUrl = hasVideo ? getCloudinaryPoster(reel.videoSrc, 2) : undefined;

  const handleCardClick = () => {
    if (!hasVideo) return;
    onTogglePlay(reel.id);
  };

  return (
    <div onClick={handleCardClick} className="group cursor-pointer">
      <div className="relative aspect-9/16 bg-[#091125] rounded-xl overflow-hidden border border-blue-950/60 shadow-lg group-hover:border-[#38bdf8]/50 transition-all">
        {hasVideo ? (
          <>
            <video
              ref={videoRef}
              src={reel.videoSrc}
              poster={posterUrl}
              preload="metadata"
              playsInline
              controls={isPlaying}
              controlsList="nofullscreen"
              onEnded={() => {
                if (isPlaying) onTogglePlay(reel.id);
              }}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                !isPlaying ? 'group-hover:scale-105' : ''
              }`}
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onExpand(reel);
              }}
              title="Expand Reel"
              aria-label={`Expand ${reel.title}`}
              className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/65 hover:bg-[#38bdf8] text-white hover:text-neutral-950 backdrop-blur-xs transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#38bdf8]/90 text-neutral-950 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-blue-950/20 group-hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="text-neutral-400 font-semibold tracking-wider text-sm">
              {reel.title.toUpperCase()}
            </span>
            <span className="text-[11px] text-neutral-500">Add Cloudinary URL</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-base font-semibold text-white group-hover:text-[#38bdf8] transition-colors">
          {reel.title}
        </h3>
        <p className="text-xs text-neutral-400 mt-1">{reel.subtitle}</p>
      </div>
    </div>
  );
}

export default function VideoPortfolio() {
  const [activeSection, setActiveSection] = useState('showreel');
  const [playingId, setPlayingId] = useState(null);
  const [expandedReel, setExpandedReel] = useState(null);
  const videoRefs = useRef({});
  const showreelRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!expandedReel) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setExpandedReel(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedReel]);

  useEffect(() => {
    const reelEl = showreelRef.current;
    if (!reelEl) return;
    reelEl.currentTime = 0;
    reelEl.play().catch(() => {});
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleTogglePlay = (id) => {
    const currentVideo = videoRefs.current[id];

    if (playingId === id) {
      if (currentVideo) currentVideo.pause();
      setPlayingId(null);
      return;
    }

    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId].pause();
    }

    setPlayingId(id);
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  };

  const handleExpandReel = (selectedReel) => {
    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId].pause();
      setPlayingId(null);
    }
    setExpandedReel(selectedReel);
  };

  return (
    <div className="bg-linear-to-b from-[#030712] via-[#091125] to-[#040812] text-white min-h-screen font-sans selection:bg-[#38bdf8] selection:text-neutral-950">
      {/* 1. Navbar Section */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-blue-950/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={(e) => handleNavClick(e, 'showreel')}>
            <span className="text-xl font-bold tracking-wider text-white">
              YOUSEF <span className="text-[#38bdf8]">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#showreel"
              onClick={(e) => handleNavClick(e, 'showreel')}
              className={`relative py-2 transition-colors cursor-pointer ${
                activeSection === 'showreel' ? 'text-[#38bdf8]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Showreel
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                  activeSection === 'showreel' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`relative py-2 transition-colors cursor-pointer ${
                activeSection === 'about' ? 'text-[#38bdf8]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                  activeSection === 'about' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            <a
              href="#works"
              onClick={(e) => handleNavClick(e, 'works')}
              className={`relative py-2 transition-colors cursor-pointer ${
                activeSection === 'works' ? 'text-[#38bdf8]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Works
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                  activeSection === 'works' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`relative py-2 transition-colors cursor-pointer ${
                activeSection === 'skills' ? 'text-[#38bdf8]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Skills
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                  activeSection === 'skills' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`relative py-2 transition-colors cursor-pointer ${
                activeSection === 'contact' ? 'text-[#38bdf8]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#38bdf8] transition-all duration-300 ${
                  activeSection === 'contact' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>
          </nav>

          <div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-neutral-950 font-semibold px-5 py-2 rounded-md text-sm transition-all shadow-sm shadow-blue-500/20 cursor-pointer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section (Showreel Focus) */}
      <section id="showreel" className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-3.5 py-1.5 rounded-full">
          Professional Video Editor & Motion Artist
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-4 tracking-tight leading-tight text-white">
          Bringing Stories to Life <br /> Through Visual Rhythm.
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Transforming raw footage into cinematic masterpieces that capture attention and drive engagement.
        </p>

        {/* Showreel Box - Auto playing & looping video inside the clean frame */}
        <div className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-blue-950/60 shadow-2xl shadow-blue-950/30 group">
          <video
            ref={showreelRef}
            src={SHOWREEL_URL}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. About Me / Bio Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-blue-950/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Image Box */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border border-blue-900/40 shadow-2xl shadow-blue-950/50 group">
              <img
                src={Yousef}
                alt="Yousef - Video Editor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border border-[#38bdf8]/30 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
                Crafting Visual Stories with Passion & Precision
              </h2>
            </div>

            <p className="text-neutral-300 text-base leading-relaxed">
              Hi, I'm Joe Hassan — a passionate Video Editor and Digital Creator based in Alexandria, Egypt. I specialize in turning raw footage into compelling cinematic experiences, fast-paced vertical reels, and high-retention content that captures attention from the very first second.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              With a strong eye for visual rhythm, color grading, and seamless pacing, I combine industry-standard tools with cutting-edge techniques to elevate brands and creators across platforms like TikTok, Instagram Reels, and YouTube.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-950/60">
              <div>
                <h3 className="text-2xl font-bold text-white">3+</h3>
                <p className="text-xs text-neutral-400 mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">50+</h3>
                <p className="text-xs text-neutral-400 mt-1">Projects Done</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-xs text-neutral-400 mt-1">Client Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Works / Portfolio Section (12 Vertical Reels & Shorts) */}
      <section id="works" className="max-w-7xl mx-auto px-6 py-20 border-t border-blue-950/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Vertical Reels & Shorts</h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm mt-4 md:mt-0">
            Fast-paced, high-retention vertical edits designed for TikTok, Instagram Reels, and YouTube Shorts.
          </p>
        </div>

        {/* Vertical Projects Grid (12 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reelsData.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              isPlaying={playingId === reel.id}
              onTogglePlay={handleTogglePlay}
              onExpand={handleExpandReel}
              videoRef={(el) => {
                videoRefs.current[reel.id] = el;
              }}
            />
          ))}
        </div>
      </section>

      {/* 5. Skills & Tools Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-blue-950/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Tools & Software</h2>
          <p className="text-neutral-400 text-sm mt-3">
            Industry-standard software, advanced color grading, and cutting-edge AI generation tools mastered to deliver high-end video content.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">Adobe Premiere Pro</h3>
            <p className="text-xs text-neutral-400 mt-1">Advanced Editing & Cut</p>
          </div>

          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">After Effects</h3>
            <p className="text-xs text-neutral-400 mt-1">Motion Graphics & VFX</p>
          </div>

          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">DaVinci Resolve</h3>
            <p className="text-xs text-neutral-400 mt-1">Professional Color Grading</p>
          </div>

          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">Color Grading</h3>
            <p className="text-xs text-neutral-400 mt-1">Cinematic Looks & Balance</p>
          </div>

          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">AI Video & Photo Gen</h3>
            <p className="text-xs text-neutral-400 mt-1">Generative AI & Visuals</p>
          </div>

          <div className="group bg-[#091125]/60 border border-blue-950/60 p-6 rounded-xl text-center hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            <h3 className="font-semibold text-white group-hover:text-[#38bdf8] transition-colors">Sound Design</h3>
            <p className="text-xs text-neutral-400 mt-1">Audio Mixing & FX</p>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-blue-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Social Icons */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#38bdf8] text-xs font-semibold tracking-widest uppercase">Let's Connect</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Send me a message</h2>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                I am currently open to new opportunities in video editing, motion graphics, and content creation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg border border-[#38bdf8]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block">EMAIL ME</span>
                  <a href="mailto:kido2767@gmail.com" className="text-white font-medium hover:text-[#38bdf8] transition-colors">
                    kido2767@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg border border-[#38bdf8]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block">WHATSAPP / CALL ME</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-[#38bdf8] transition-colors"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg border border-[#38bdf8]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block">LOCATION</span>
                  <span className="text-white font-medium">Alexandria, Egypt</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-3">SOCIAL PROFILES</span>
              <div className="flex items-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#091125] border border-blue-950 rounded-full text-neutral-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.764.966-.937 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#091125] border border-blue-950 rounded-full text-neutral-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.582 9 4.75V8z" />
                  </svg>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#091125] border border-blue-950 rounded-full text-neutral-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-md"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#091125]/80 border border-blue-950/60 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = form.name.value;
                const email = form.email.value;
                const subject = form.subject.value;
                const message = form.message.value;

                const whatsappText = `Hello Yousef,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                form.reset();
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#030712] border border-blue-950 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#030712] border border-blue-950 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-[#030712] border border-blue-950 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-[#030712] border border-blue-950 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-neutral-950 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
              >
                Send via WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-950/40 py-8 text-center text-xs text-neutral-500">
        <p>© 2026 Yousef Portfolio. All rights reserved.</p>
      </footer>

      {/* Expanded Vertical Reel Modal (Mobile & Desktop Friendly) */}
      {expandedReel && (
        <div
          onClick={() => setExpandedReel(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-9/16 h-[82vh] max-h-[82vh] max-w-[92vw] w-auto bg-[#091125] rounded-2xl overflow-hidden border border-[#38bdf8]/40 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setExpandedReel(null)}
              aria-label="Close reel"
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#38bdf8] text-white hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            <video
              src={expandedReel.videoSrc}
              poster={getCloudinaryPoster(expandedReel.videoSrc, 2)}
              controls
              controlsList="nofullscreen"
              autoPlay
              playsInline
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0;
              }}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}