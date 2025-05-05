import React from "react";
import styles from "./JobCard.module.css";
import Link from "next/link";

export default function JobCard({
  jobTitle,
  companyName,
  companyLogo,
  location,
  experience,
  keySkills = [],
  detailsLink = "#",
  highlighted = false,
  backgroundImage = "",
}) {
  const cardClasses = [
    styles.card,
    highlighted ? styles.highlighted : "",
    highlighted && backgroundImage ? styles.withBackground : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cardStyle =
    highlighted && backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : {};

  return (
    <div className={cardClasses} style={cardStyle}>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className={styles.logo}
          />
          <div>
            <h3 className={styles.jobTitle}>{jobTitle}</h3>
            <p className={styles.companyName}>{companyName}</p>
          </div>
        </div>

        <div className={styles.info}>
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
        </div>

        <Link href={detailsLink}>
          <button className={styles.button}>View Details</button>
        </Link>
      </div>
    </div>
  );
}
