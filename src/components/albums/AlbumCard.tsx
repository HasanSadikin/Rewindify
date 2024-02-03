import { motion } from "framer-motion";
import { animationDuration, ease } from "../../utils/animationDuration";

interface Props {
  isPlaying: boolean;
}

const AlbumCard = ({ isPlaying }: Props) => (
  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
    {!isPlaying && (
      <motion.div
        transition={{
          duration: animationDuration,
          ease: ease,
        }}
        layoutId="square"
        className=" w-[32rem] h-[32rem] flex items-center justify-center shadow-lg"
      ></motion.div>
    )}
    {isPlaying && (
      <motion.div
        transition={{
          duration: animationDuration,
          ease: ease,
        }}
        layoutId="square"
        className="w-10/12 border border-white shadow-lg h-5/6"
      ></motion.div>
    )}
  </div>
);

export default AlbumCard;
