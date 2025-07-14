import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
import people from "../../images/people.webp";
import sql from "../../images/skills/sql.png";
import js from "../../images/skills/js.png";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import python from "../../images/skills/python.png";
import mui from "../../images/skills/mui.png";
import java from "../../images/skills/java.png";
import git from "../../images/skills/git.png";
import reactIcon from "../../images/skills/react.png";
import node from "../../images/skills/node.png";
import firebase from "../../images/skills/firebase.png";

const variants = {
  initial: {
    x: window.screen.width >= 500 ? -500 : -10,
    y: window.screen.width >= 500 ? 100 : 10,
    opacity: 0,
    staggeredChildren: 1.5,
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

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        The future belongs to those who believe in the 
          <br /> beauty of their dreams
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer-about" variants={variants}>
        <div className="title-about">
          <div>
            <h1>
              <motion.b
                whileHover={{ color: "orange" }}
                style={{ color: "white" }}
              >
                ABOUT
              </motion.b>{" "}
              <motion.b
                whileHover={{ color: "orange" }}
                style={{ color: "white" }}
              >
                ME
              </motion.b>
            </h1>
          </div>
          <div>
            <h2>
              <motion.b
                whileHover={{ color: "orange" }}
                style={{ color: "white" }}
              >
                Caring,
              </motion.b>
              <motion.b
                whileHover={{ color: "blue" }}
                style={{ color: "white" }}
              >
                {" "}
                Teamwork,
              </motion.b>
              <motion.b
                whileHover={{ color: "green" }}
                style={{ color: "white" }}
              >
                {" "}
                Continuous Improvement!
              </motion.b>
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.ul>
            <motion.li className="details" variants={variants}>
              I'm a skilled computer science student with experience in Java,
              JavaScript, Python, NodeJS, SQL, React. I'm a quick learner and
              collaborate closely with clients to create efficient, scalable,
              and user-friendly solutions that solve real-world problems. Let's
              work together to bring your ideas to life!
            </motion.li>
            <motion.li className="details" variants={variants}>
              I'm a passionate developer with a love for crafting elegant code
              and solving intricate problems. My journey in tech is a story of
              continuous learning and endless curiosity.
            </motion.li>
            <motion.li className="details" variants={variants}>
              What truly drives me is a thirst for challenges and opportunities.
              I thrive when presented with complex problems that require
              innovative solutions. Outside of the tech world, I am an avid gym
              enthusiast who enjoys staying physically active. With a diverse
              background and a zest for life, I am excited to embrace new
              adventures and make meaningful contributions wherever I go.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
