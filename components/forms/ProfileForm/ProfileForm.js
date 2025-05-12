"use client";
import React, { useState } from "react";
import styles from "./ProfileForm.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function ProfileForm() {
  const [resume, setResume] = useState(null);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const profileData = {
      full_name: data.get("full_name"),
      phone_number: data.get("phone_number"),
      location: data.get("location"),
      years_of_experience: parseInt(data.get("years_of_experience") || "0", 10),
      key_skills: data.get("key_skills")?.split(",").map(s => s.trim()).filter(Boolean) || [],
    };

    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("access_token="))
      ?.split("=")[1];

    const res = await fetch("http://localhost:8000/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (res.ok) {
      alert("Profile updated successfully.");
    } else {
      const err = await res.json();
      alert("Failed to update profile: " + (err.detail || "Unknown error"));
    }
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
          <input name="full_name" type="text" placeholder="Full Name" required />
          <input name="phone_number" type="tel" placeholder="Phone Number" required />
          <input name="location" type="text" placeholder="Location" />
          <input
            name="years_of_experience"
            type="number"
            placeholder="Years of Experience"
            min="0"
          />
          <input
            name="key_skills"
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
