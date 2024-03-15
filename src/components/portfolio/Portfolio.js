import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import munDrama  from '../../images/mun-drama.png';
import ecommerce from '../../images/ecommerce.png';
import portfolio from '../../images/portfolio.png';

const items = [
  {
    id: 0,
    title: "My Personal Projects",
    img: null,
    desc: `The work below are instances of my work in the real world that highlight my experience and skills. Links to code repositories and real-time demonstrations are included with each project's brief description. It demonstrates my capacity to handle various technologies, handle complicated difficulties, and efficiently manage projects.`,
  },
  {
    id: 1,
    title: "MUN Drama Society Web",
    img: munDrama,
    desc: "Professional work project built for social club (MUN Drama), which I also maintain on regular basis. It is a blogging, social interaction, and business website used by MUN Drama for regular activities.",
    lang: "React, UI/UX, Bootstrap",
    git: "https://github.com/devangdonda/mun-drama.git",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    img: ecommerce,
    desc: "Made a full-stack shopping website from scratch, consisting of Admin Backend API - Easy to use, clean code, and easily understandable Capable of adding, editing, manipulating prices, delivery with location for admins. User Frontend, with amazing styling, using UI/UX techniques and principles. Accessible to add products to cart, place order, and authentication with privacy for users.",
    lang: "React, Tailwind, UI/UX, Node.js, Express.js, MongoDB, JavaScript",
    git: "https://github.com/devangdonda/ecommerce.git",
  },
  {
    id: 3,
    title: "Sort Algorithm Visualizer",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Implemented UI based visualizer for sorting algorithms in real-time in python. Deep knowledge of Object-Oriented Programming and Data Structures used in this project.",
    lang: "Python, Pygame",
    git: "https://github.com/devangdonda/sort-visualizer.git",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    img: "https://user-images.githubusercontent.com/22730220/157565990-3e36c238-5bda-43d7-8bab-56c9c1984ddb.jpeg",
    desc: "This is a highly interactive data visualization dashboard for any kind and amount of data. For this project we use CO2 emission records over the world to visualize as an example.",
    lang: "Python, Panel",
    git: "https://github.com/devangdonda/data-visualization-dashboard.git",
  },
  {
    id: 5,
    title: "Portfolio Website",
    img: portfolio,
    desc: "This is my personal website. It showcases my experience, projects, skills, and provides a live demonstration of my web development skills.",
    lang: "React, Tailwind, Framer Motion, UI/UX, Node.js, Express.js, MongoDB, JavaScript",
    git: "https://github.com/devangdonda/portfolio3.git",
  },
  {
    id: 6,
    title: "Muszelus",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Personal branding website to put my personal, professional, and educational information and achievements in one place. Subjected to change. It is expected to be fully responsive and use complex UI/UX elements like particleJS, by the end of December 2023.",
    lang: "React, Redux Toolkit, Router, Material UI, UI/UX, Firebase, Node js",
    git: "https://github.com/devangdonda/muszelus.git",
  },
  {
    id: 7,
    title: "Can't Stop",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Designed and implemented a Can’t Stop board game in Java with the Swing library. Used object-oriented programming to allow create new players, add themes, and access key functionalities. Implemented a robust set of features to support the core functionalities of game logic",
    lang: "Java, UI / UX",
    git: "https://github.com/devangdonda/cant-stop.git",
  },
  {
    id: 7,
    title: "Workout App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " People can log in their own workout names with the number of reps, sets, and weights so that they can keep track of their previous records and track their progress on a visual chart.",
    lang: "React, MUI, SQL, Node.js",
    git: "https://github.com/devangdonda/workoutapp.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="porfolio">
      <div className="container">
        <div className="wrapper">
          {item.img && (
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
          )}
          <motion.div
            className="textContainer"
            style={{
              y: y,
              justifyContent: !item.img ? "center" : "flex-start",
              padding: "40px",
            }}
            initial={
              !item.img && {
                x: "-10vw",
                y: "104vh",
                opacity: 0.5,
              }
            }
            whileInView={
              !item.img && {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }
            }
          >
            <p
              style={{ fontSize: !item.img ? "20px" : "16px", color: "white" }}
            >
              {item.lang}
            </p>
            <h2 style={{ fontSize: !item.img ? "72px" : "40px" }}>
              {item.title}
            </h2>
            <p style={{ fontSize: !item.img ? "20px" : "16px" }}>{item.desc}</p>
            {item.img && (
              <a href={item.git} target="blank">
                <button>Explore</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = (props) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <motion.div
        className="progress"
        initial={
          !props.val && {
            x: "-10vw",
            y: "14vh",
            opacity: 0.5,
          }
        }
        whileInView={
          !props.val && {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.4,
            },
          }
        }
      >
        <h1>Personal Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} val={item.img} />
      ))}
    </div>
  );
};

export default Portfolio;
