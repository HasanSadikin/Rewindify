import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
  revealDuration: number;
}

function StopPlayingButton({ onClose, revealDuration }: Props) {
  const fasterDuration = revealDuration * 0.85;
  return (
    <motion.button
      className={clsx(
        "p-5 text-black border border-black rounded-full",
        "hover:bg-black hover:text-white ease-in-out duration-300"
      )}
      onClick={onClose}
      initial={{
        rotate: 360,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        rotate: [360, 360, 360, 360, 1],
        scale: [0, 0, 0, 0, 1],
        opacity: [0, 0, 0, 0, 1],
        transition: {
          duration: revealDuration,
        },
      }}
      exit={{
        rotate: [1, 360, 360, 360, 360],
        scale: [1, 0, 0, 0, 0],
        opacity: [1, 0, 0, 0, 0],
        transition: {
          duration: fasterDuration,
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </motion.button>
  );
}

export default StopPlayingButton;
