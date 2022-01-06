import React from "react";
import {
  ColorScheme,
  colors,
  extendTheme,
  VechaiProvider,
  Button,
} from "@vechaiui/react";

function App() {
  const bee: ColorScheme = {
    id: "bee",
    type: "light",
    colors: {
      bg: {
        base: colors.warmGray["100"],
        fill: colors.warmGray["100"],
      },
      text: {
        foreground: colors.warmGray["900"],
        muted: colors.warmGray["700"],
      },
      primary: colors.amber,
      neutral: colors.warmGray,
    },
  };

  const theme = extendTheme({
    cursor: "pointer",
    colorSchemes: {
      bee,
    },
  });

  return (
    <>
      <VechaiProvider theme={theme} colorScheme="bee">
        <div>
          <p>Test</p>
        </div>
      </VechaiProvider>
    </>
  );
}

export default App;
