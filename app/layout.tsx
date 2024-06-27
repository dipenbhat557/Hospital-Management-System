import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HMS - Where Healing Matters",
  description: "Hospital Management System",
};

const RootLayout = ({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </div>
    </>
  );
};

export default RootLayout;
