"use client";

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import styles from "./Signin.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function SigninForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      document.cookie = `access_token=${token}; path=/; secure; samesite=strict`;
      const decoded = jwtDecode(token);
      const role = decoded.role;

      if (role === "recruiter") {
        router.push("/recruiterhome");
      } else if (role === "candidate" || role === "user") {
        router.push("/userhome");
      } else {
        router.push("/");
      }
    } else {
      alert("Login failed");
    }
  }
  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.formSection}>
          <Heading heading={"Login to Your Account"} />
          <form className={styles.form} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles.imageSection}>
          <img
            src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
            alt="Signup Visual"
          />
        </div>
      </div>
    </main>
  );
}
