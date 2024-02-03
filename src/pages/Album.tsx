import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Vynil from "../components/albums/Vynil";
import AlbumPlaylist from "../components/albums/AlbumPlaylist";
import AlbumCover from "../components/albums/AlbumCover";
import AlbumCard from "../components/albums/AlbumCard";
import { useAlbum } from "../context/AlbumContext";

import { useMusic } from "../hooks/useMusic";

const AlbumItem = () => {
  const { playMusic, stopMusic } = useMusic();
  const album = useAlbum();
  const [isPlayed, setIsPlayed] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const canPlayWaitDuration = 1100;

  useEffect(() => {
    setCanPlay(false);
    setTimeout(() => {
      setCanPlay(true);
    }, canPlayWaitDuration);
  }, [isPlayed]);

  function setPlayMusic() {
    if (!canPlay) return;

    playMusic(album.currentSong.source, () => {
      setIsPlayed(true);
    });
  }

  function setStopMusic() {
    if (!canPlay) return;
    stopMusic();
    setIsPlayed(false);
  }

  return (
    <>
      <div className="relative w-full h-screen text-black">
        <AlbumCard isPlaying={isPlayed} />
        <Vynil isPlayed={isPlayed} />
        <AlbumCover isPlaying={isPlayed} onPlay={setPlayMusic} />
        <AnimatePresence>
          {isPlayed && <AlbumPlaylist onClose={setStopMusic} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AlbumItem;
