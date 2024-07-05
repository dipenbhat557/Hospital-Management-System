import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import AuthProvider from "./Providers";

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
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
