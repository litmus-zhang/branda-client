import { DashboardLayout } from "@/components/layout/dashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "User dashboard to Branda your business",
  };

  
export default function DashboardpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
