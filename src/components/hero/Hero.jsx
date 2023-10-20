import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import Typed from "react-typed";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <Typed
              strings={[
                "...",
                "HI...",
                "WELCOME TO MY WEBSITE",
                "MY NAME IS...",
                "AGUS PRANYOTO",
              ]}
              typeSpeed={50}
              backSpeed={20}
              loop
            />
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See The Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButtons"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          intial="initial"
          animate="animate"
        >
          React Frontend Developer and UI Designer
        </motion.div>
        <motion.div className="imageContainer" variants={imgVariants}>
          <motion.img
            src="/agus-kotak.png"
            alt=""
            variants={imgVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
