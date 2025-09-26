import { PauseCircle, PlayCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NoIdea from "../assets/NoIdea.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(NoIdea));

  const [playlists] = useState([
    { name: "The 1975 - Somebody Else" },
    { name: "The 1975 - Love It If We Made It" },
    { name: "The 1975 - If You’re Too Shy (Let Me Know)" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlists.length);
    console.log(
      "Next song:",
      playlists[(currentIndex + 1) % playlists.length].name
    );
  };

  const playAudio = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.1;
    setIsPlaying((prev) => !prev);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full border border-white p-4 fixed top-0 -z-20 xend">
      <div className="w-fit h-fit border shadow-[#ffffff45] shadow-2xl border-[#2e2e2e] px-4 py-3 text-white flex flex-col gap-3 rounded-3xl">
        <div className="flex gap-2 text-[12px]">
          <span className="w-10 rounded-lg overflow-hidden">
            <img src="berserk.jpg" alt="" />
          </span>

          <div className="flex-col flex gap-1">
            <h5>The 1975 - Somebody Else</h5>

            <div className="flex justify-between ycenter">
              <IoIosArrowBack />

              {!isPlaying ? (
                <PlayCircle
                  onClick={playAudio}
                  className="bg-[#ffffff36] text-white w-5 rounded-full cursor-pointer"
                />
              ) : (
                <PauseCircle
                  onClick={pauseAudio}
                  className="bg-[#ffffff36] text-white w-5 rounded-full cursor-pointer"
                />
              )}

              <IoIosArrowForward onClick={nextSong} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
