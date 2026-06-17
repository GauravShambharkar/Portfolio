import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import useStore from "../Global/Store";

const AudioPlayerWidget = () => {
  const spotifyTracks = useStore((state) => state.spotifyTracks);
  const currentTrackIndex = useStore((state) => state.currentTrackIndex);
  const isPlaying = useStore((state) => state.isPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);
  const nextTrack = useStore((state) => state.nextTrack);
  const prevTrack = useStore((state) => state.prevTrack);
  const isMobile = useStore((state) => state.isMobile);

  const currentTrack = spotifyTracks[currentTrackIndex];
  const audioRef = useRef(null);
  const widgetRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  // Initialize audio ref with a comfortable default volume
  if (!audioRef.current) {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;
  }

  // Handle initial play attempt on mount & event listeners
  useEffect(() => {
    const audio = audioRef.current;
    
    if (currentTrack?.audioUrl) {
      audio.src = currentTrack.audioUrl;
    }

    // Attempt to autoplay on initial render
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked: waiting for user interaction.", err);
          setIsPlaying(false);
        });
    }

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  // Sync track index change to audio source
  useEffect(() => {
    const audio = audioRef.current;
    if (currentTrack?.audioUrl && audio.src !== currentTrack.audioUrl) {
      audio.src = currentTrack.audioUrl;
      if (isPlaying) {
        audio.play().catch((err) => console.log("Play failed on track switch:", err));
      }
    }
  }, [currentTrackIndex]);

  // Sync play/pause state change
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((err) => {
        console.log("Playback failed:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Sync isExpanded with isMobile when screen layout changes
  useEffect(() => {
    setIsExpanded(!isMobile);
  }, [isMobile]);

  // Click outside to collapse on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isExpanded && widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobile, isExpanded]);

  const handleContainerClick = () => {
    if (isMobile && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const handlePlayPauseClick = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      setIsPlaying(false);
      if (isMobile) {
        setIsExpanded(false);
      }
    } else {
      setIsPlaying(true);
      if (isMobile) {
        setIsExpanded(true);
      }
    }
  };

  const handlePrevTrack = (e) => {
    e.stopPropagation();
    prevTrack();
  };

  const handleNextTrack = (e) => {
    e.stopPropagation();
    nextTrack();
  };

  return (
    <div 
      ref={widgetRef}
      onClick={handleContainerClick}
      className={`flex items-center transition-all duration-300 bg-[#121212]/40 border border-[#ef4444]/25 hover:border-[#ef4444]/45 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.08)] hover:shadow-[0_0_15px_rgba(239,68,68,0.22)] backdrop-blur-lg cursor-pointer ${
        isExpanded 
          ? "py-1 px-3 gap-3" 
          : "py-1 px-3 gap-3 max-[750px]:p-1 max-[750px]:gap-0"
      }`}
    >
      {/* Visualizer */}
      <div className="flex items-center gap-[2.5px] h-4 w-5 justify-center max-[750px]:hidden">
        {isPlaying ? (
          <div className="flex gap-[2px] items-end h-3">
            <span className="w-[2px] bg-[#ef4444] animate-equalizer-bar" style={{ animationDelay: "0.1s" }}></span>
            <span className="w-[2px] bg-[#ef4444] animate-equalizer-bar" style={{ animationDelay: "0.3s" }}></span>
            <span className="w-[2px] bg-[#ef4444] animate-equalizer-bar" style={{ animationDelay: "0.5s" }}></span>
          </div>
        ) : (
          <Music className="size-3.5 text-[#ef4444]/60" />
        )}
      </div>

      {/* Title & Artist (opens track page on click) */}
      <a
        href={currentTrack?.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col text-left select-none max-w-[120px] hover:underline cursor-pointer ${
          isExpanded ? "" : "max-[750px]:hidden"
        }`}
      >
        <h5 className="text-[10px] font-semibold text-white truncate leading-none">
          {currentTrack?.title || "No Track"}
        </h5>
        <span className="text-[8px] text-[#b3b3b3] truncate leading-none mt-[2.5px]">
          {currentTrack?.artist || "Unknown"}
        </span>
      </a>

      {/* Controls */}
      <div className={`flex items-center gap-2 ${
        isExpanded 
          ? "border-l border-[#282828] pl-2" 
          : "max-[750px]:gap-0 max-[750px]:border-none max-[750px]:p-0"
      }`}>
        <SkipBack
          onClick={handlePrevTrack}
          className={`size-3 text-[#b3b3b3] hover:text-[#ef4444] cursor-pointer transition-colors duration-200 ${
            isExpanded ? "" : "max-[750px]:hidden"
          }`}
        />
        <div
          onClick={handlePlayPauseClick}
          className="size-5 rounded-full bg-gradient-to-r from-[#ef4444] to-[#ff6b6b] allcenter cursor-pointer hover:scale-110 shadow-[0_0_8px_rgba(239,68,68,0.4)] hover:shadow-[0_0_12px_rgba(239,68,68,0.6)] transition-all duration-200"
        >
          {isPlaying ? (
            <Pause className="size-2 text-black fill-black" />
          ) : (
            <Play className="size-2 text-black fill-black ml-[1px]" />
          )}
        </div>
        <SkipForward
          onClick={handleNextTrack}
          className={`size-3 text-[#b3b3b3] hover:text-[#ef4444] cursor-pointer transition-colors duration-200 ${
            isExpanded ? "" : "max-[750px]:hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default AudioPlayerWidget;
