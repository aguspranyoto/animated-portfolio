import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function ToggleButton({ setOpen, open }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {!open ? <MenuIcon size={32} /> : <CloseIcon size={32} />}
    </button>
  );
}

export default ToggleButton;
