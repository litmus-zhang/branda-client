"use client" ;
import { Footer } from "../footer/footer";
import { RootHeader } from "../header/header";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RootHeader />
        {children}
      <Footer />
    </>
  );
};
