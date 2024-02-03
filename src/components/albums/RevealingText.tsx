import { PropsWithChildren } from "react";

import { AnimatePresence } from "framer-motion";
import MoveUpText from "./MoveUpText";

interface Props extends PropsWithChildren {
  isPlayed: boolean;
}

function RevealingText({ children, isPlayed }: Props) {
  return (
    <AnimatePresence>
      {isPlayed && (
        <div className="overflow-hidden">
          <MoveUpText className="overflow-hidden text-white">
            {children}
          </MoveUpText>
        </div>
      )}
    </AnimatePresence>
  );
}
export default RevealingText;
