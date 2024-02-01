import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const ease = "easeInOut";
const duration = 1;
const fasterDuration = duration * 0.85;
const slowerDuration = duration;

const BrunoMars = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [scope, animate] = useAnimate();
  const [canTransform, setCanTransform] = useState(true);

  useEffect(() => {
    setCanTransform(false);
    setTimeout(() => {
      setCanTransform(true);
    }, 1100);
  }, [isPlayed]);

  const album_info_variants = {
    album_info_initial: {
      y: 0,
    },
    album_info_animate: {
      y: [20, 20, 20, 20, 0],
      opacity: [0, 0, 0, 0, 1],
      transition: { duration: slowerDuration },
    },
    album_info_exit: {
      y: [0, -20, -20, -20, -20],
      opacity: [1, 0, 0, 0, 0],
      transition: { duration: fasterDuration },
    },
  };

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
          duration: duration,
          ease: "easeOut",
        }
      );
    }
  }

  function handleClick() {
    if (!canTransform) return;
    setIsPlayed((prev) => !prev);
  }

  return (
    <>
      <div className="bg-blue-500 h-screen relative w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            ref={scope}
            className=" border border-white w-[31rem] aspect-square rounded-full grid grid-rows-3"
          >
            <div className=""></div>
            <div className="flex items-center justify-between text-white p-10">
              <h1>LP</h1>
              <h1>2017</h1>
            </div>
            <div className=""></div>
          </motion.div>
        </div>

        {!isPlayed && (
          <>
            <div className="absolute flex items-center w-full h-full justify-center">
              <motion.div
                transition={{
                  duration: slowerDuration,
                  ease: ease,
                }}
                layoutId="square"
                className="border border-white w-[32rem] h-[32rem] flex items-center justify-center relative"
              >
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 text-white w-full">
                  <motion.h1
                    transition={{
                      duration: slowerDuration,
                      ease: ease,
                    }}
                    layoutId="song_name_top"
                    className="text-5xl font-bold mx-auto w-fit"
                  >
                    Talking To
                  </motion.h1>
                  <motion.h1
                    transition={{
                      duration: slowerDuration,
                      ease: ease,
                    }}
                    layoutId="song_name_bottom"
                    className="text-5xl font-bold mx-auto w-fit"
                  >
                    The Moon
                  </motion.h1>
                </div>
                <motion.div
                  transition={{
                    duration: slowerDuration,
                    ease: ease,
                  }}
                  layoutId="album_image"
                  className="w-40 aspect-square border border-white"
                ></motion.div>
              </motion.div>
            </div>
          </>
        )}
        <AnimatePresence mode="popLayout">
          {isPlayed && (
            <>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-3/4 h-full mx-auto py-20 grid grid-cols-2">
                  <div className="text-white flex flex-col gap-6">
                    <div className="">
                      <motion.h1
                        transition={{
                          duration: fasterDuration,
                          ease: ease,
                        }}
                        layoutId="song_name_top"
                        className="text-5xl font-bold mx-0 w-fit"
                      >
                        Talking To
                      </motion.h1>
                      <motion.h1
                        transition={{
                          duration: fasterDuration,
                          ease: ease,
                        }}
                        layoutId="song_name_bottom"
                        className="text-5xl font-bold mx-0 w-fit"
                      >
                        The Moon
                      </motion.h1>
                    </div>
                    <motion.div
                      variants={album_info_variants}
                      initial="album_info_inital"
                      exit="album_info_exit"
                      animate="album_info_animate"
                      className=""
                    >
                      <ul>
                        <li>song name</li>
                        <li>song name</li>
                        <li>song name</li>
                        <li>song name</li>
                        <li>song name</li>
                        <li>song name</li>
                        <li>song name</li>
                      </ul>
                    </motion.div>
                  </div>
                  <div className="w-full h-full flex flex-col justify-end items-end gap-4">
                    <motion.div
                      transition={{
                        duration: fasterDuration,
                        ease: ease,
                      }}
                      layoutId="album_image"
                      className="w-40 aspect-square border border-white"
                    ></motion.div>
                    <div className="">
                      <div className="overflow-hidden">
                        <motion.h2
                          variants={album_info_variants}
                          initial="album_info_inital"
                          exit="album_info_exit"
                          animate="album_info_animate"
                          className="text-white text-right italic"
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
                          className="text-white text-right text-xl"
                        >
                          Poor Man
                        </motion.h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  transition={{
                    duration: fasterDuration,
                    ease: ease,
                  }}
                  layoutId="square"
                  className="border border-white w-10/12 h-5/6"
                ></motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-16">
          <button className="bg-white px-8 py-2" onClick={handleClick}>
            Toggle
          </button>
        </div>
      </div>
    </>
  );
};

export default BrunoMars;
