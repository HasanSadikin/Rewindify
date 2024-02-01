import clsx from "clsx";
import { useAnimate, motion } from "framer-motion";

const HeroOne = () => {
  const [scope, animate] = useAnimate();

  const fakeBorderInitial = {
    height: "500%",
    rotate: "25deg",
    x: -120,
  };

  function handleButtonHoverStart() {
    animate(
      "#fake-border",
      {
        x: 150,
      },
      {
        duration: 0.5,
      }
    );
  }

  function handleButtonHoverEnd() {
    animate("#fake-border", fakeBorderInitial, { duration: 0.5 });
  }

  return (
    <>
      <div className={clsx("h-screen w-full grid grid-rows-2 overflow-hidden")}>
        <div
          className={clsx(
            "flex flex-col justify-center items-center text-center w-full order-last",
            "md:order-first"
          )}
        >
          <div className={clsx("w-full mb-6", "md:mb-12")}>
            <h1
              className={clsx("text-3xl font-bold mb-3", "md:mb-6 md:text-6xl")}
            >
              Welcome To
              <br />
              My <span className="text-blue-500">Blog</span>
            </h1>
            <p
              className={clsx(
                "text-gray-500 text-sm px-5",
                "md:text-base md:w-[36rem] md:mx-auto"
              )}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              repudiandae ullam quo ad tempora eius aspernatur dolorem atque
              possimus molestias.
            </p>
          </div>
          <div className="flex gap-2 md:gap-4">
            <button className="px-4 py-2 text-white bg-blue-500">
              Contact Me
            </button>
            <motion.button
              ref={scope}
              className="relative px-4 py-2 text-blue-500 border border-blue-500 overflow-hidden"
              onHoverStart={handleButtonHoverStart}
              onHoverEnd={handleButtonHoverEnd}
            >
              About Me
              <motion.span
                initial={fakeBorderInitial}
                id="fake-border"
                className="absolute w-full h-full bg-blue-500 origin-center left-0 -top-[250%]"
              ></motion.span>
            </motion.button>
          </div>
        </div>
        <AnimatedImages />
      </div>
    </>
  );
};

export default HeroOne;

const AnimatedImages = () => {
  const [scope, animate] = useAnimate();

  const centerInitial = {
    x: "-50%",
    y: 0,
  };

  const centerBackRightInitial = {
    x: "50%",
    y: 64,
    rotate: "10deg",
  };

  const centerBackLeftInitial = {
    x: "-50%",
    y: 64,
    rotate: "-10deg",
  };

  function handleHoverStart() {
    animate("#card-center", {
      y: -25,
    });
    animate("#card-back-right", {
      x: "55%",
      y: 30,
    });
    animate("#card-back-left", {
      x: "-55%",
      y: 30,
    });
  }

  function handleHoverEnd(): void {
    animate("#card-center", centerInitial);
    animate("#card-back-right", centerBackRightInitial);
    animate("#card-back-left", centerBackLeftInitial);
  }

  return (
    <div className="overflow-hidden ">
      <div
        className={clsx(
          "w-full h-full",
          "md:h-5/6 md:w-3/4 md:mx-auto shadow-2xl overflow-hidden md:rounded-xl"
        )}
      >
        <div className="md:hidden w-full h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <motion.div
          className="relative w-full h-full translate-y-10 hidden md:block"
          ref={scope}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <motion.div
            initial={centerInitial}
            id="card-center"
            className="absolute w-[26rem] aspect-[4/3] left-1/2 bottom-0 z-[2]"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={centerBackRightInitial}
            id="card-back-right"
            className="absolute w-[26rem] aspect-[4/3]  right-1/4 bottom-0 md:origin-bottom z-[1]"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={centerBackLeftInitial}
            id="card-back-left"
            className="absolute w-[26rem] aspect-[4/3]  left-1/4  bottom-0 origin-bottom -rotate-[10deg] translate-y-16 z-[1]"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
