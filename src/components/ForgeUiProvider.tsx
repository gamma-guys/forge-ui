import * as React from "react";
import { IdProvider } from "@radix-ui/react-id";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { darkTheme, globalStyles } from "src/stitches.config";

const ForgeUiProvider = ({ children }: { children: ReactNode }) => {
  globalStyles();

  return (
    <IdProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light",
        }}
      >
        {children}
      </ThemeProvider>
    </IdProvider>
  );
};

export default ForgeUiProvider;
