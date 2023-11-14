import { MdDarkMode } from "react-icons/md/index";
import { BsSunFill } from "react-icons/bs/index";
import { useEffect, useState } from "react";
import "./ModeChanger.css";

const ModeChanger = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
    } else if (mode === "dark") {
      document.body.classList.add("dark");
    }
  }, [mode]);

  const lightMode = () => {
    return (
      <div onClick={() => setMode("dark")}>
        <MdDarkMode />
      </div>
    );
  };
  const darkMode = () => {
    return (
      <div onClick={() => setMode("light")}>
        <BsSunFill />
      </div>
    );
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        {mode === "light" ? lightMode() : darkMode()}
      </div>
    </div>
  );
};

export default ModeChanger;
