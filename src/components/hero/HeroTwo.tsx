import clsx from "clsx";
import {
  AnimationDefinition,
  motion,
  useAnimate,
  useAnimation,
} from "framer-motion";
import React, { useEffect } from "react";

const HeroTwo = () => {
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
    <div className="relative">
      <div
        className={clsx(
          "grid grid-rows-2 h-screen overflow-hidden",
          "lg:grid-rows-1 lg:grid-cols-2"
        )}
      >
        <div
          className={clsx(
            "w-full p-1 h-full overflow-hidden grid grid-cols-4 gap-1 relative",
            "lg:order-last lg:origin-left lg:-rotate-[25deg] lg:overflow-visible lg:grid-cols-2 lg:gap-3 lg:pb-10"
          )}
        >
          <Slider>
            <SliderContainer speed={50}>
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1706710951639-f10228eca8e7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1706730949208-c99b056eb80b?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1706564621641-883b71497cdb?q=80&w=1603&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1706125356181-9bff2577579f?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SliderContainer>
          </Slider>
          <Slider>
            <SliderContainer speed={30}>
              <img src="https://images.unsplash.com/photo-1706550037547-ead67be5816e?q=80&w=1599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1703870977610-de36beca1d68?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SliderContainer>
          </Slider>
          <Slider className="lg:hidden">
            <SliderContainer speed={40}>
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SliderContainer>
          </Slider>
          <Slider className="lg:hidden">
            <SliderContainer speed={20}>
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SliderContainer>
          </Slider>
          <span
            className={clsx(
              "w-full h-32 bg-gradient-to-t from-white absolute bottom-0 z-[10]",
              "lg:hidden"
            )}
          ></span>
        </div>
        <div
          className={clsx(
            "w-11/12 mx-auto h-full",
            "lg:flex lg:flex-col lg:justify-center lg:pl-16"
          )}
        >
          <div className={clsx("w-full mb-6 mt-10")}>
            <h1
              className={clsx("text-3xl font-bold mb-3", "md:mb-6 md:text-6xl")}
            >
              Welcome To
              <br />
              My <span className="text-blue-500">Blog</span>
            </h1>
            <p className={clsx("text-gray-500 text-sm")}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              repudiandae ullam quo ad tempora eius aspernatur dolorem atque
              possimus molestias.
            </p>
          </div>
          <div className="flex gap-2">
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
      </div>
      <span className="w-full h-52 absolute bg-gradient-to-t from-white z[10] bottom-0 hidden lg:block pointer-events-none"></span>
    </div>
  );
};

export default HeroTwo;

function Slider({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}

function SliderContainer({
  speed,
  children,
  className,
}: {
  children: React.ReactNode;
  speed: number;
  className?: string;
}) {
  const contols = useAnimation();
  const slidingAnimation: AnimationDefinition = {
    y: "-100%",
    transition: {
      duration: speed,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  };

  function handleHoverStart() {
    contols.stop();
  }

  function handleHoverEnd() {
    contols.start(slidingAnimation);
  }

  useEffect(() => {
    contols.start(slidingAnimation);
  }, []);

  return (
    <>
      <motion.ul
        className={className}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={contols}
      >
        {children &&
          React.Children.map(children, (child, i) => (
            <SliderItem child={child} key={i} />
          ))}
      </motion.ul>
      <motion.ul
        className={className}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={contols}
      >
        {children &&
          React.Children.map(children, (child, i) => (
            <SliderItem child={child} key={i} />
          ))}
      </motion.ul>
    </>
  );
}

function SliderItem({ child }: { child: React.ReactNode }) {
  const [scope, animate] = useAnimate();
  function handleMouseEnter() {
    animate("span", {
      opacity: 1,
    });
  }

  function handleMouseExit() {
    animate("span", {
      opacity: 0,
    });
  }
  return (
    <motion.li
      ref={scope}
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.025,
      }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseExit}
      className={clsx("mb-1 relative rounded-lg overflow-hidden", "lg:mb-3")}
    >
      {child}
      <motion.span
        initial={{ opacity: 0 }}
        className="absolute w-full h-full bg-black/50 z-[1] top-0 left-0"
      ></motion.span>
    </motion.li>
  );
}
