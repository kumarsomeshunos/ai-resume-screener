"use client";
import React, { useState } from "react";
import styles from "./ProfileForm.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function ProfileForm() {
  const [resume, setResume] = useState(null);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("Profile Data:", Object.fromEntries(data.entries()));
    // TODO: Submit to API
  };

  const handleResumeSubmit = (e) => {
    e.preventDefault();
    if (resume) {
      console.log("Resume file:", resume);
      // TODO: Upload resume file to backend
    }
  };

  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        {/* === Profile Details Form === */}
        <form className={styles.form} onSubmit={handleProfileSubmit}>
          <Heading heading={"Profile Details"} />
          <input name="fullName" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />
          <input name="location" type="text" placeholder="Location" />
          <input
            name="experience"
            type="number"
            placeholder="Years of Experience"
            min="0"
          />
          <input
            name="keySkills"
            type="text"
            placeholder="Key Skills (comma separated)"
          />

          <button type="submit">Save Profile</button>
        </form>

        {/* === Resume Upload Form === */}
        <form className={styles.form} onSubmit={handleResumeSubmit}>
          <Heading heading={"Upload Resume"} />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <button type="submit">Upload Resume</button>
        </form>
      </div>
    </section>
  );
}
