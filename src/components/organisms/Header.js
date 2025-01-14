import React, { useEffect } from "react";
// import Burger from '../atoms/Burger';
// import BurgerMenu from '../molecules/BurgerMenu';
// Prob removing burger menu
import Switch from "@mui/material/Switch";
import IconDash from "../molecules/IconDash";
import { handleResumeOnClick } from "../../shared";
import { isMobile } from "react-device-detect";
import { useDarkMode } from "../../contexts/DarkModeContext";
import "./Header.css";

export default function Header(props) {
  const [mouseEntered, setMouseEntered] = React.useState(false);
  const [initialHeaderState, setInitialHeaderState] = React.useState(true);

  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setTimeout(() => {
      // If mobile we just leave header
      if (!isMobile) setInitialHeaderState(false);
    }, 1000);
  }, []);

  return (
    <div
      className="app-header"
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      style={!initialHeaderState ? (mouseEntered ? { opacity: 1 } : { opacity: 0 }) : { opacity: 1 }}
    >
      {/* <Burger /> */}
      {/* <BurgerMenu handleResumeOnClick={handleResumeOnClick} /> */}
      <IconDash>
        <div className="theme-toggle">
          <Switch onClick={toggleDarkMode} aria-labelledby="Dark Mode Toggle">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Switch>
        </div>
      </IconDash>
    </div>
  );
}
