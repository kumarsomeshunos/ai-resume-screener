"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Signup.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:8000/auth/signup/candidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("Signup successful. Please log in.");
      router.push("/signin"); // Redirect to login after signup
    } else {
      const errorData = await res.json();
      alert(`Signup failed: ${errorData.detail || "Unknown error"}`);
    }
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.formSection}>
          <Heading heading={"Create Your Account"} />
          <form className={styles.form} onSubmit={handleSignup}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
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
