import { PauseCircle, PlayCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NoIdea from "../../assets/NoIdea.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(NoIdea));

  const [playlists] = useState([
    { name: "The 1975 - Somebody Else", cover: "", audio: "" },
    { name: "The 1975 - Love It If We Made It", cover: "", audio: "" },
    {
      name: "The 1975 - If You’re Too Shy (Let Me Know)",
      cover: "",
      audio: "",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlists.length);
    console.log(
      "Next song:",
      playlists[(currentIndex + 1) % playlists.length].name,
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

  const [viewAlbumCoverModal, setViewAlbumCoverModal] = useState(false);
  const [selectedAlbumCover, setSelectedAlbumCover] = useState({
    name: "",
    img: "",
  });

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full p-4 fixed top-0 xend pointer-events-none">
      <div className="w-fit h-fit border shadow-[#ffffff45] pointer-events-auto shadow-2xl z-1000 border-[#2e2e2e] px-4 py-3 text-white flex flex-col gap-3 rounded-3xl">
        <div className="flex gap-2 text-[12px]">
          <span className="w-10 h-fit rounded-lg shadow-xs cursor-pointer shadow-[#ffffff45] overflow-hidden">
            <img src="berserk.jpg" alt="" />
          </span>

          <div className="flex-col flex gap-1">
            <h5>The 1975 - Somebody Else</h5>

            <div className="flex justify-between ycenter">
              <IoIosArrowBack className="cursor-pointer hover:text-white/60 ease-in-out duration-300" />

              {!isPlaying ? (
                <PlayCircle
                  onClick={playAudio}
                  className="bg-[#ffffff15] cursor-pointer h-fit text-white w-5 hover:text-white/60 ease-in-out duration-300 rounded-full"
                />
              ) : (
                <PauseCircle
                  onClick={pauseAudio}
                  className="bg-[#ffffff15] cursor-pointer text-white w-5 h-fit hover:text-white/60 ease-in-out duration-300 rounded-full"
                />
              )}

              <IoIosArrowForward
                onClick={nextSong}
                className="cursor-pointer hover:text-white/60 ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
