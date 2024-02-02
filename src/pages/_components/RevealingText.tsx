import { PropsWithChildren } from "react";
import MoveUpText from "./MoveUpText";
import { AnimatePresence } from "framer-motion";

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
