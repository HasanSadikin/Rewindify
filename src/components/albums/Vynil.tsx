import { useAnimate, motion } from "framer-motion";
import VynilImage from "../../assets/Vynil.png";
import { animationDuration } from "../../utils/animationDuration";

interface DiskProps {
  isPlayed?: boolean;
}

const Vynil = ({ isPlayed = false }: DiskProps) => {
  const [scope, animate] = useAnimate();

  if (scope.current) {
    if (isPlayed) {
      animate(
        scope.current,
        {
          rotate: "360deg",
        },
        {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      );
    } else {
      animate(
        scope.current,
        {
          rotate: 0,
        },
        {
          duration: animationDuration,
          ease: "easeOut",
        }
      );
    }
  }
  return (
    <>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-[1]">
        <motion.div
          ref={scope}
          className="w-[31rem] aspect-square rounded-full grid grid-rows-3 text-white relative"
        >
          <div className="absolute object-contain w-full h-full pointer-events-none z-[-1]">
            <img src={VynilImage} className="w-full h-full" alt="" />
          </div>
          <div className="flex items-center justify-center">
            {/* <RevealingText isPlayed={isPlayed}>Top Section</RevealingText> */}
          </div>
          <div className="flex items-center justify-between p-10">
            {/* <h1>LP</h1>
            <h1>2017</h1> */}
          </div>
          <div className="relative flex items-center justify-center">
            {/* <RevealingText isPlayed={isPlayed}>Bottom Section</RevealingText> */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Vynil;
