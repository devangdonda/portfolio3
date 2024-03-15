import "./hero.scss";
import { motion } from "framer-motion";
import scroll from '../../images/scroll.png';
import profile from '../../images/profile.png';


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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
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

function scrollTo(val) {
  const section = document.querySelector(val ==='#contact' ? '#contact' : '#projects');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    window.location.hash = val;
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="text">
            <motion.h2 variants={textVariants}>
              Hi, I'm <b>Devang Donda.</b>
            </motion.h2>
            <motion.h1 variants={textVariants}>
              I am a 3rd year Computer Science Student who like to code Web
              Application, Games, and more.
            </motion.h1>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={() => scrollTo('#projects')}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={() => scrollTo('#contact')}>Contact Me</motion.button>

            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src={scroll}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Hero;
