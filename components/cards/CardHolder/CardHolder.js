import React from "react";
import styles from "./CardHolder.module.css";
import JobCard from "../JobCard/JobCard";

export default function CardHolder({ jobs = [] }) {
  return (
    <section className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        {jobs.map((job, idx) => (
          <JobCard
            key={idx}
            jobTitle={job.jobTitle}
            companyName={job.companyName}
            companyLogo={job.companyLogo}
            location={job.location}
            experience={job.experience}
            keySkills={job.keySkills}
            detailsLink={job.detailsLink}
            highlighted={job.highlighted}
            backgroundImage={job.backgroundImage}
          />
        ))}
      </div>
    </section>
  );
}
