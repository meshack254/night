"use client";
import { ThemeProvider } from "next-themes";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children} </ThemeProvider>;
};

export default Wrapper;
