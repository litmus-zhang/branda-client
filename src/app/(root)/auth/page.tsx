"use client";
import { AuthStyles } from "@/components/auth/style";
import { ColoredGoogleIcon } from "@/components/icons/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();
  const handleGoogleAuth = () => {
    router.push("/dashboard");
  };
  return (
    <AuthStyles>
      <div className="form">
        <h4>Get started with Branda</h4>
        <div className="btn">
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={handleGoogleAuth}
          >
            <p>Sign up with Google</p>
            <ColoredGoogleIcon />
          </motion.button>
        </div>
      </div>
    </AuthStyles>
  );
};

export default Auth;
