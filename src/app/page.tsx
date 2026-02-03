"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InvitationPage from "@/components/InvitationPage";

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setShowInvitation(true);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FDFBF7]">
      <AnimatePresence mode="wait">
        {!showInvitation && (
          <div
            key="video-intro"
            className="absolute inset-0 z-40 bg-black cursor-pointer"
            onClick={handlePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/enveloppe.jpg"
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src="/51c82a90-20fc-411d-854f-7d3ba46a52ec.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white/80 font-lato tracking-widest uppercase text-sm animate-pulse">
                Tap to Open
              </p>
            </div>
          </div>
        )}

        {showInvitation && (
          <InvitationPage key="invitation" />
        )}
      </AnimatePresence>
    </div>
  );
}
