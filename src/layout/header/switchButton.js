import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import IconResolver from "../../core/resolvers/iconResolver";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={onClick} className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}>
      {darkMode ? IconResolver('darkMode') : IconResolver('lightMode')}
    </IconButton>
  );
}