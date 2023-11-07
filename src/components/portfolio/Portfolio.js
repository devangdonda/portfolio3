import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "My Personal Projects",
    img: null,
    desc: `The work below are instances of my work in the real world that highlight my experience and skills. Links to code repositories and real-time demonstrations are included with each project's brief description. It demonstrates my capacity to handle various technologies, handle complicated difficulties, and efficiently manage projects.`,
  },
  {
    id: 1,
    title: "Portfolio Website",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This is my personal website. It showcases my experience, projects, skills, and provides a live demonstration of my web development skills.",
    lang: "React, Tailwind, Framer Motion, UI/UX",
    git: "https://github.com/devangdonda/portfolio3.git",
  },
  {
    id: 2,
    title: "Muszelus",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Personal branding website to put my personal, professional, and educational information and achievements in one place. Subjected to change. It is expected to be fully responsive and use complex UI/UX elements like particleJS, by the end of December 2023.",
    lang: "React, Redux Toolkit, Router, Material UI, UI/UX, Firebase, Node js",
    git: "https://github.com/devangdonda/muszelus.git",
  },
  {
    id: 3,
    title: "Can't Stop",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Designed and implemented a Can’t Stop board game in Java with the Swing library. Used object-oriented programming to allow create new players, add themes, and access key functionalities. Implemented a robust set of features to support the core functionalities of game logic",
    lang: "Java, UI / UX",
    git: "https://github.com/devangdonda/cant-stop.git",
  },
  {
    id: 4,
    title: "Workout App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " People can log in their own workout names with the number of reps, sets, and weights so that they can keep track of their previous records and track their progress on a visual chart.",
    lang: "React, MUI, SQL, Node.js",
    git: "https://github.com/devangdonda/workoutapp.git",
  },
  {
    id: 5,
    title: "Weather App",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Collaborated with a team of CS students to design and develop a weather app which takes in over 200,000 cities and provides the weather of the corresponding city. Conceived and executed multiple tests, and implemented logic in python and retrieved info using API keys. Employed Python to develop code, and used tkinter gui",
    lang: "React, MUI, SQL, Node.js",
    git: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
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
            initial = {!item.img && {
              x: '-10vw',
              y: '104vh',
              opacity: 0.5
            }}
            whileInView={!item.img && {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 1
              }
            }}
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
      <motion.div className="progress" initial = {!props.val && {
              x: '-10vw',
              y: '14vh',
              opacity: 0.5
            }}
            whileInView={!props.val && {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.4
              }
            }}>
        <h1>Personal Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} val={item.img}/>
      ))}
    </div>
  );
};

export default Portfolio;
