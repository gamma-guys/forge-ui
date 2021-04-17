import * as React from "react";
import { getCssString } from "src/stitches.config";

const SsrThemeConfig = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
  );
};

export default SsrThemeConfig;
