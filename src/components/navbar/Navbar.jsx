import React from "react";
import "./Navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aguud
        </motion.span>
        <div className="social">
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <GitHubIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
