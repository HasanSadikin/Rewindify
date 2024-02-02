import { motion } from "framer-motion";
import SongList from "./SongList";
import StopPlayingButton from "./StopPlayingButton";
import {
  animationDuration,
  ease,
  fasterAnimationOffset,
} from "./utils/animationDuration";

import Album from "../../assets/Album.webp";

interface Props {
  onClose: () => void;
}

const AlbumPlaylist = ({ onClose }: Props) => {
  const fasterDuration = animationDuration * fasterAnimationOffset;

  const album_info_variants = {
    album_info_initial: {
      y: 0,
    },
    album_info_animate: {
      y: [20, 20, 20, 20, 0],
      opacity: [0, 0, 0, 0, 1],
      transition: { duration: animationDuration },
    },
    album_info_exit: {
      y: [0, -20, -20, -20, -20],
      opacity: [1, 0, 0, 0, 0],
      transition: { duration: fasterDuration },
    },
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="grid w-3/4 h-full grid-cols-2 py-20 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="">
              <motion.h1
                transition={{
                  duration: fasterDuration,
                  ease: ease,
                }}
                layoutId="song_name_top"
                className="mx-0 text-5xl font-bold w-fit"
              >
                Talking To
              </motion.h1>
              <motion.h1
                transition={{
                  duration: fasterDuration,
                  ease: ease,
                }}
                layoutId="song_name_bottom"
                className="mx-0 text-5xl font-bold w-fit"
              >
                The Moon
              </motion.h1>
            </div>
            <SongList revealDuration={1} />
          </div>
          <div className="flex flex-col items-end justify-between w-full h-full">
            <StopPlayingButton
              onClose={onClose}
              revealDuration={animationDuration}
            />
            <div className="flex flex-col items-end justify-end w-full h-full gap-4">
              <motion.div
                transition={{
                  duration: fasterDuration,
                  ease: ease,
                }}
                layoutId="album_image"
                className="object-cover w-40  aspect-square relative z-[2]"
              >
                <img src={Album} alt="" className="w-full h-full" />
              </motion.div>
              <div className="">
                <div className="overflow-hidden">
                  <motion.h2
                    variants={album_info_variants}
                    initial="album_info_inital"
                    exit="album_info_exit"
                    animate="album_info_animate"
                    className="italic text-right"
                  >
                    Currently Playing
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={album_info_variants}
                    initial="album_info_inital"
                    exit="album_info_exit"
                    animate="album_info_animate"
                    className="text-xl text-right "
                  >
                    Poor Man
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumPlaylist;
