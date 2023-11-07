import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import people from '../../images/people.webp';
import sql from '../../images/skills/sql.png';
import js from '../../images/skills/js.png';
import html from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import python from '../../images/skills/python.png';
import mui from '../../images/skills/mui.png';
import java from '../../images/skills/java.png';
import git from '../../images/skills/git.png';
import reactIcon from '../../images/skills/react.png';
import node from '../../images/skills/node.png';
import firebase from '../../images/skills/firebase.png';

const variants = {
  initial: {
    x: window.screen.width>=500 ? -500 : -10,
    y: window.screen.width>=500 ? 100 : 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 0.9,
  },
  animate: {
    scale: 1,
    delay: 1,
    duration: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      type: "spring",
      stiffness: 150,
      damping: 4,
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
            <img src={html} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={css} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={js} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={reactIcon} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={sql} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={git} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={mui} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={python} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={java} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={firebase} alt="" />
          </motion.div>
          <motion.div className="image" variants={imageVariants}>
            <img src={node} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
