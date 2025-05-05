import React from "react";
import styles from "./JobDetailCard.module.css";

export default function JobDetailCard({
  jobTitle,
  jobDescription,
  location,
  experience,
  keySkills = [],
  companyName,
}) {
  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.card}>
          <h2 className={styles.title}>{jobTitle}</h2>
          <p className={styles.company}>Company: {companyName}</p>
          <p className={styles.description}>{jobDescription}</p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Experience:</strong> {experience} years
          </p>

          <div className={styles.skills}>
            {keySkills.map((skill, idx) => (
              <span key={idx} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.applyButton}>Apply Now</button>
            <button className={styles.updateButton}>Update Job</button>
          </div>
        </div>
      </div>
    </section>
  );
}
