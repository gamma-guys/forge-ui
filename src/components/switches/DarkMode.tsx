import * as React from "react";
import { styled } from "../../stitchesConfig";
import * as Switch from "@radix-ui/react-switch";
import { Moon, BrightnessAltLow } from "react-bootstrap-icons";

const MoonIcon = () => <Moon className="moon-icon" />;
const SunIcon = () => <BrightnessAltLow className="sun-icon" />;

MoonIcon.toString = () => ".moon-icon";
SunIcon.toString = () => ".sun-icon";

const StyledSwitch = styled(Switch.Root, { border: "none" });
const StyledThumb = styled(Switch.Thumb, { border: "none" });

const DarkModeSwitch = () => {
  return (
    <StyledSwitch>
      <SunIcon />
      <StyledThumb />
      <MoonIcon />
    </StyledSwitch>
  );
};

export default DarkModeSwitch;
