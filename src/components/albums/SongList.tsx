import { motion } from "framer-motion";
import { useAlbum } from "../../context/AlbumContext";
import {
  animationDuration,
  fasterAnimationOffset,
} from "../../utils/animationDuration";

interface Props {}

function SongList({}: Props) {
  const album = useAlbum();

  const song_list_variants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: animationDuration,
        staggerChildren: 0.05,
      },
    },
    hidden: {
      x: 0,
    },
    exit: {
      y: [0, -20, -20, -20, -20],
      opacity: [1, 0, 0, 0, 0],
      transition: { duration: fasterAnimationOffset },
    },
  };

  const song_variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: [20, 20, 20, 20, 20, 0],
      opacity: [0, 0, 0, 0, 0, 1],
    },
  };
  return (
    <motion.ul
      variants={song_list_variants}
      initial="hidden"
      exit="exit"
      animate="show"
    >
      {album.currentAlbum.songs.map((song, i) => (
        <motion.li key={i} variants={song_variants}>
          {song.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SongList;
