import * as React from "react";
import { BsMoon, BsFillBrightnessLowFill } from "react-icons/bs";
import { styled } from "../../stitchesConfig";
import * as Switch from "@radix-ui/react-switch";

BsMoon.toString = () => ".moon-icon";
BsFillBrightnessLowFill.toString = () => ".sun-icon";

const StyledSwitch = styled(Switch.Root, { border: "none" });
const StyledThumb = styled(Switch.Thumb, { border: "none" });

const DarkModeSwitch = () => {
  return (
    <StyledSwitch>
      <StyledThumb />
    </StyledSwitch>
  );
};

export default DarkModeSwitch;
