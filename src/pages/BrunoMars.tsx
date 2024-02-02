import { useEffect, useState } from "react";
import Vynil from "./_components/Vynil";
import AlbumPlaylist from "./_components/AlbumPlaylist";
import AlbumCover from "./_components/AlbumCover";
import { AnimatePresence } from "framer-motion";
import AlbumCard from "./_components/AlbumCard";

const BrunoMars = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const canPlayWaitDuration = 1100;

  useEffect(() => {
    setCanPlay(false);
    setTimeout(() => {
      setCanPlay(true);
    }, canPlayWaitDuration);
  }, [isPlayed]);

  function togglePlay() {
    if (!canPlay) return;
    setIsPlayed((prev) => !prev);
  }

  return (
    <>
      <div className="relative w-full h-screen text-black">
        <AlbumCard isPlaying={isPlayed} />
        <Vynil isPlayed={isPlayed} />
        <AlbumCover isPlaying={isPlayed} onPlay={togglePlay} />
        <AnimatePresence>
          {isPlayed && <AlbumPlaylist onClose={togglePlay} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default BrunoMars;
