import { motion } from "framer-motion";

interface Props {
  revealDuration: number;
}

function SongList({ revealDuration: duration }: Props) {
  const fasterDuration = duration * 0.85;

  const song_list_variants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        staggerChildren: 0.05,
      },
    },
    hidden: {
      x: 0,
    },
    exit: {
      y: [0, -20, -20, -20, -20],
      opacity: [1, 0, 0, 0, 0],
      transition: { duration: fasterDuration },
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
      {Array.from(Array(10)).map((_, i) => (
        <motion.li key={i} variants={song_variants}>
          song name
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SongList;
