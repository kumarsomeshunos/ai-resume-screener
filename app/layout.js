import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire-Archy",
  description:
    "Streamline your hiring process with AI-powered resume screening for smarter and faster candidate selection.",
};

const navbarLinks = [
  { key: "New Job", value: "/newjob" },
  { key: "Recuriter Home", value: "/recruiterhome" },
  { key: "User Home", value: "/userhome" },
  { key: "Profile", value: "/profile" },
  { key: "Sign Up", value: "/signup" },
  { key: "Sign In", value: "/signin" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navbarLinks={navbarLinks} />
        {children}
      </body>
    </html>
  );
}
