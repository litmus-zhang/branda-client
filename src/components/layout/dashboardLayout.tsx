"use client" ;
import { DashboardRootStyles } from "./style";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardRootStyles>
      <div className="header">Header</div>
      {children}
      <div className="footer">Footer</div>
    </DashboardRootStyles>
  );
};
