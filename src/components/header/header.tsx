import Link from "next/link";
import { Logo } from "../icons/header";
import { HeaderStyle } from "./style";
import { useRouter } from "next/navigation";

export const RootHeader = () => {
  const router = useRouter();
  return (
    <HeaderStyle>
      <div className="logo">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="links">
        <Link href="#">
          <p>About Us</p>
        </Link>
        <Link href="#">
          <p>Contact</p>
        </Link>
        <Link href="#">
          <p>Services</p>
        </Link>
        <div className="btn">
          <button type="button" onClick={() => router.push("/auth")}>
            Get Started
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};

export const DashboardHeader = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <HeaderStyle>
      <div className="logo">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
      </div>
      <div className="links">
        <div className="fk">
          <div className="circle">
            <h5>LA</h5>
          </div>
          <p>Lukmon Abdulsalam</p>
        </div>
        <div className="btn">
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
};
