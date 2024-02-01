import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
  const [s, setS] = useState(false);

  return (
    <div>
      <button onClick={() => setS((prev) => !prev)}>Toggle</button>
      <AnimatePresence>
        {s && (
          <div className="">
            <div className="">
              <motion.div
                key={Math.random()}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                quidem.
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Test;
