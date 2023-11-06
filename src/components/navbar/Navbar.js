import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import github from '../../images/github.png';
import email from '../../images/email.png';
import youtube from '../../images/youtube.png';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Social Media Bar
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
