"use client";

import React from "react";
import styles from "./NewJobForm.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function NewJobForm({ onSubmit = () => {} }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const jobData = Object.fromEntries(data.entries());
    jobData.keySkills = jobData.keySkills.split(",").map((s) => s.trim());
    jobData.experience = parseInt(jobData.experience, 10);
    onSubmit(jobData);
  };

  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <Heading heading={"Post a New Job"} subheading={"Fill in the details below."} />
          <div className={styles.formGrid}>
            {/* LEFT PANE */}
            <div className={styles.leftPane}>
              <input name="title" type="text" placeholder="Job Title" required />
              <input name="companyName" type="text" placeholder="Company Name" required />
              <input name="location" type="text" placeholder="Location" required />
            </div>

            {/* RIGHT PANE */}
            <div className={styles.rightPane}>
              <input
                name="keySkills"
                type="text"
                placeholder="Key Skills (comma separated)"
                required
              />
              <input
                name="experience"
                type="number"
                placeholder="Experience Required (in years)"
                min="0"
                required
              />
              <textarea
                name="description"
                placeholder="Job Description"
                rows="4"
                required
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Post Job</button>
          </div>
        </form>
      </div>
    </section>
  );
}