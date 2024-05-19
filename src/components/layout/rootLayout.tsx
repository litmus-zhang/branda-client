"use client" ;
import { RootLayoutStyles } from "./style";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayoutStyles>
      <div className="header">Header</div>
        {children}
      <div className="footer">Footer</div>
    </RootLayoutStyles>
  );
};
