import "./globals.css";
import type { Metadata } from "next";
import { Alegreya, Montserrat } from "next/font/google";

import { SetupMocks } from "./utils/setupMocks";
import Header from "./components/header/header";
import Footer from "@/app/components/Footer/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import { AdminLayout } from "./layouts/AdminLayout";
import { FrontLayout } from "./layouts/FrontLayout";
import { SessionContext } from "next-auth/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ветлекарь",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { get } = headers();
  const layout = get("X-Layout");

  let LayoutComponent;
  switch (layout) {
    case "admin":
      LayoutComponent = AdminLayout;
      break;
    default:
      LayoutComponent = FrontLayout;
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
      <SetupMocks />
    </html>
  );
}
