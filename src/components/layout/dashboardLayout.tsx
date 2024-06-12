"use client" ;
import { Footer } from "../footer/footer";
import { DashboardHeader } from "../header/header";
import { DashboardRootStyles } from "./style";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardRootStyles>
      <DashboardHeader />
      <>{children}</>
      <Footer />
    </DashboardRootStyles>
  );
};
