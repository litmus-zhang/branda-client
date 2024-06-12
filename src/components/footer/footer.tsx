import Link from "next/link";
import { FooterStyle } from "./style";

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="cp">
        <p>&copy;Branda 2024</p>
      </div>
      <div className="links">
        <Link href="#">
          <p>Privacy Policy</p>
        </Link>
        <Link href="#">
          <p>Terms and Condition</p>
        </Link>
      </div>
    </FooterStyle>
  );
};
