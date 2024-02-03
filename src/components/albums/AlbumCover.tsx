import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useAlbum } from "../../context/AlbumContext";
import { animationDuration, ease } from "../../utils/animationDuration";
import { splitSongName } from "../../utils/splitSongName";
import RevealingButton from "./RevealingButton";

interface Props {
  isPlaying: boolean;
  onPlay: () => void;
}

const AlbumCover = ({ isPlaying, onPlay }: Props) => {
  const album = useAlbum();
  const [topName, bottomName] = splitSongName(album.currentAlbum.name);

  return (
    <>
      <AnimatePresence>
        {!isPlaying && (
          <div className="absolute flex items-center justify-center w-full h-full">
            <div className="w-[32rem] h-[32rem] flex items-center justify-center relative">
              <div className="absolute w-full -translate-x-1/2 left-1/2 -top-12">
                <motion.h1
                  transition={{
                    duration: animationDuration,
                    ease: ease,
                  }}
                  layoutId="song_name_top"
                  className="mx-auto text-5xl font-bold w-fit"
                >
                  {topName}
                </motion.h1>
                <motion.h1
                  transition={{
                    duration: animationDuration,
                    ease: ease,
                  }}
                  layoutId="song_name_bottom"
                  className="mx-auto text-5xl font-bold w-fit"
                >
                  {bottomName}
                </motion.h1>
              </div>
              <motion.div
                transition={{
                  duration: animationDuration,
                  ease: ease,
                }}
                layoutId="album_image"
                className="object-cover w-40 aspect-square relative z-[2]"
              >
                <img
                  src={album.currentAlbum.image}
                  alt=""
                  className="w-full h-full"
                />
              </motion.div>
              <RevealingButton
                className={clsx(
                  "font-bold text-xl absolute w-fit px-4 py-2 overflow-hidden text-white -translate-x-1/2 left-1/2 bottom-20 z-[2] border border-white rounded-lg ",
                  "hover:bg-white hover:text-black ease-in-out duration-300"
                )}
                onPlay={onPlay}
              >
                Discover
              </RevealingButton>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlbumCover;
