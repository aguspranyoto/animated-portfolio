import React, { useState } from "react";
import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links open={open} setOpen={setOpen} />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
