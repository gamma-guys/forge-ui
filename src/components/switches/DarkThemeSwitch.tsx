import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { styled } from "src/stitches.config";
import * as Switch from "@radix-ui/react-switch";
import { Moon, Sun } from "react-bootstrap-icons";

const MoonIcon = () => <Moon className="moon-icon" />;
const SunIcon = () => <Sun className="sun-icon" />;

MoonIcon.toString = () => ".moon-icon";
SunIcon.toString = () => ".sun-icon";

const StyledSwitch = styled(Switch.Root, {
  cursor: "pointer",
  appearance: "none",
  backgroundColor: "$lightGrey300",
  border: "none",
  padding: 0,
  width: 50,
  height: 25,
  borderRadius: 25,
  position: "relative",
  transition: "background-color 100ms",
  ":focus": {
    outline: "none",
    boxShadow: `0 0 0 2px ${"$lightGreyBase"}`,
  },
  '&[data-state="checked"]': {
    backgroundColor: "dodgerblue",
  },
  [`& ${SunIcon}`]: {
    position: "absolute",
    left: 5,
    bottom: 6,
    zIndex: 1,
  },
  [`& ${MoonIcon}`]: {
    position: "absolute",
    right: 5,
    bottom: 6,
    zIndex: 1,
  },
});

const StyledThumb = styled(Switch.Thumb, {
  display: "block",
  size: 18,
  backgroundColor: "white",
  borderRadius: "$round",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 2px",
  transition: "transform 100ms",
  transform: "translateX(3px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(29px)",
  },
});

const DarkThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  return (
    <StyledSwitch onClick={() => mounted && toggleTheme()}>
      <SunIcon />
      <StyledThumb />
      <MoonIcon />
    </StyledSwitch>
  );
};

export default DarkThemeSwitch;
