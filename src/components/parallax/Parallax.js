import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import planets from "../../images/planets.png";
import sun from "../../images/sun.png";
import stars from "../../images/stars.png";
import mountains from "../../images/mountains.png";
import scroll from "../../images/scroll.png";

const arrowVariants = {
  initial: {
    y: 5
  },
  arrowButton: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      repeat: Infinity, // Repeat the animation indefinitely
      repeatType: "repeat",
    },
  },
};

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-100%", "450%"]);
  const yP = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Skills?" : "Projects?"}{" "}
        <motion.img
          className="arrow"
          variants={arrowVariants}
          animate="arrowButton"
          src={scroll}
          alt=""
        />
      </motion.h1>

      {/* <motion.div className="mountains"></motion.div> */}
      <motion.img src={mountains} alt="" className="mountains" />
      {/* <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? planets : sun})`,
        }}
      ></motion.div> */}
      <motion.img
        src={type === "services" ? planets : sun}
        alt=""
        className="planets"
        style={{
          y: yP,
        }}
      />
      {/* <motion.div style={{ x: yBg }} className="stars"></motion.div> */}
      <motion.img src={stars} alt="" style={{ x: yBg }} className="stars" />
    </div>
  );
};

export default Parallax;
