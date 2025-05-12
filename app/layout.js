import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar/Navbar";
import { cookies } from "next/headers";
import {jwtDecode} from "jwt-decode";
import { AuthProvider } from "@/context/AuthContext";

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

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded?.role || null;
    } catch (e) {
      console.error("Invalid token", e);
    }
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Navbar />
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
