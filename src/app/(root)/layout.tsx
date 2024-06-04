"use client";
import { HomeLayout } from "@/components/layout/rootLayout";
import { RootLayoutStyles } from "@/components/layout/style";
export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutStyles>
      <HomeLayout>{children}</HomeLayout>
      </RootLayoutStyles>
  );
}
