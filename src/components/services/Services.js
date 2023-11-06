import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import people from '../../images/people.webp';
import skillImg from "../../images/instagram.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 0.9,
    opacity: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    delay: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      type: "spring",
      stiffness: 100,
      dampimg: 2,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning and improving
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>SKILLS</motion.b> ready
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={skillImg} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
