import JobDetailCard from "@/components/cards/JobDetailCard/JobDetailCard";
import CandidateCard from "@/components/cards/CandidateCard/CandidateCard";
import SectionWrapper from "@/components/core/Wrapper/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";

export default async function Jobs({ params }) {
  const { slug } = await params;
  //   return <div>My Post: {slug}</div>;
  return (
    <SectionWrapper>
      <JobDetailCard
        jobTitle="AI Product Strategist"
        jobDescription="Lead AI product vision, define LLM-based experiences, and drive strategic growth."
        location="Bangalore"
        experience={4}
        keySkills={["Product", "LLMs", "User Research", "Prompting"]}
        companyName="NextMind AI"
      />
      <Heading heading={"Candidates Applied"} />
      <CandidateCard
        name="Aditi Sharma"
        email="aditi@example.com"
        resumeLink="https://example.com/resume/aditi.pdf"
        keySkills={["React", "Node.js", "MongoDB", "TypeScript"]}
        location="Pune, India"
        experience={3}
        profilePhoto="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <CandidateCard
        name="Aditi Sharma"
        email="aditi@example.com"
        resumeLink="https://example.com/resume/aditi.pdf"
        keySkills={["React", "Node.js", "MongoDB", "TypeScript"]}
        location="Pune, India"
        experience={3}
        profilePhoto="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <CandidateCard
        name="Aditi Sharma"
        email="aditi@example.com"
        resumeLink="https://example.com/resume/aditi.pdf"
        keySkills={["React", "Node.js", "MongoDB", "TypeScript"]}
        location="Pune, India"
        experience={3}
        profilePhoto="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <CandidateCard
        name="Aditi Sharma"
        email="aditi@example.com"
        resumeLink="https://example.com/resume/aditi.pdf"
        keySkills={["React", "Node.js", "MongoDB", "TypeScript"]}
        location="Pune, India"
        experience={3}
        profilePhoto="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </SectionWrapper>
  );
}
