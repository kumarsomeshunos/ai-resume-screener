"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { role, token } = useAuth();

  const navbarLinks = [
    ...(role === "recruiter"
      ? [
          { key: "New Job", value: "/newjob" },
          { key: "Recuriter Home", value: "/recruiterhome" },
        ]
      : []),
    { key: "User Home", value: "/userhome" },
    { key: "Profile", value: "/profile" },
    ...(token
      ? [{ key: "Logout", value: "/logout" }]
      : [
          { key: "Sign Up", value: "/signup" },
          { key: "Sign In", value: "/signin" },
        ]),
  ];

  return (
    <nav className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <span className={`${styles.logo}`}>
          <Link href="/">Hire-Archy</Link>
        </span>
        <ul className={styles.ul}>
          {navbarLinks.map((navbarLink, index) => {
            return (
              <li key={index} className={styles.li}>
                <Link href={navbarLink.value}>{navbarLink.key}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
