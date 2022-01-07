import React from "react";
import {
  ColorScheme,
  colors,
  extendTheme,
  VechaiProvider,
} from "@vechaiui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/layout/Dahsboard";
import Index from "./pages/";
import LoginPage from "./pages/login";

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
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/:slug" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </VechaiProvider>
    </>
  );
}

export default App;
