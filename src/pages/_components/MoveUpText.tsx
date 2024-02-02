import { motion } from "framer-motion";
import React, { ElementRef, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    React.HtmlHTMLAttributes<ElementRef<"div">> {
  duration?: number;
}

const MoveUpText = ({
  duration = 0.5,
  children,
  className,
  ...props
}: Props) => {
  return (
    <span {...props}>
      <motion.h1
        initial={{
          y: 30,
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: -30,
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.h1>
    </span>
  );
};

export default MoveUpText;
