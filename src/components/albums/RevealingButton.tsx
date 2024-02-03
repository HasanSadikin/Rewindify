import { ElementRef, PropsWithChildren } from "react";

import { motion } from "framer-motion";
import MoveUpText from "./MoveUpText";

interface Props
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<ElementRef<"button">> {
  onPlay: () => void;
}

function RevealingButton({ onPlay, children, className }: Props) {
  return (
    <motion.button
      className={className}
      onClick={onPlay}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <MoveUpText>{children}</MoveUpText>
    </motion.button>
  );
}

export default RevealingButton;
