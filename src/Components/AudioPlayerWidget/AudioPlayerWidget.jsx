import React, { useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import useStore from "../Global/Store";

const AudioPlayerWidget = () => {
  const spotifyTracks = useStore((state) => state.spotifyTracks);
  const currentTrackIndex = useStore((state) => state.currentTrackIndex);
  const isPlaying = useStore((state) => state.isPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);
  const nextTrack = useStore((state) => state.nextTrack);
  const prevTrack = useStore((state) => state.prevTrack);

  const currentTrack = spotifyTracks[currentTrackIndex];
  const audioRef = useRef(null);

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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3 bg-[#121212]/90 border border-[#ef4444]/20 hover:border-[#ef4444]/45 rounded-full py-1 px-3 shadow-[0_0_12px_rgba(239,68,68,0.08)] hover:shadow-[0_0_15px_rgba(239,68,68,0.22)] transition-all duration-300">
      {/* Visualizer */}
      <div className="flex items-center gap-[2.5px] h-4 w-5 justify-center">
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
        className="flex flex-col text-left select-none max-w-[120px] max-[480px]:hidden hover:underline cursor-pointer"
      >
        <h5 className="text-[10px] font-semibold text-white truncate leading-none">
          {currentTrack?.title || "No Track"}
        </h5>
        <span className="text-[8px] text-[#b3b3b3] truncate leading-none mt-[2.5px]">
          {currentTrack?.artist || "Unknown"}
        </span>
      </a>

      {/* Controls */}
      <div className="flex items-center gap-2 border-l border-[#282828] pl-2">
        <SkipBack
          onClick={prevTrack}
          className="size-3 text-[#b3b3b3] hover:text-[#ef4444] cursor-pointer transition-colors duration-200"
        />
        <div
          onClick={togglePlay}
          className="size-5 rounded-full bg-gradient-to-r from-[#ef4444] to-[#ff6b6b] allcenter cursor-pointer hover:scale-110 shadow-[0_0_8px_rgba(239,68,68,0.4)] hover:shadow-[0_0_12px_rgba(239,68,68,0.6)] transition-all duration-200"
        >
          {isPlaying ? (
            <Pause className="size-2 text-black fill-black" />
          ) : (
            <Play className="size-2 text-black fill-black ml-[1px]" />
          )}
        </div>
        <SkipForward
          onClick={nextTrack}
          className="size-3 text-[#b3b3b3] hover:text-[#ef4444] cursor-pointer transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default AudioPlayerWidget;
