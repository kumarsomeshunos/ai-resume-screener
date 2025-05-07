import SectionWrapper from "@/components/core/Wrapper/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import CardHolder from "@/components/cards/CardHolder/CardHolder";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function RecruiterHome() {
  const user = await getAuthenticatedUser();
  if (user.role == "recruiter") {
    return (
      <SectionWrapper>
        <Heading heading={"Jobs Created by You"} />
        <CardHolder
          jobs={[
            {
              jobTitle: "Backend Engineer",
              companyName: "DevHouse",
              companyLogo: "https://via.placeholder.com/80x80.png?text=DH",
              location: "Bangalore",
              experience: 3,
              keySkills: ["Python", "FastAPI", "PostgreSQL"],
              detailsLink: "/jobs/2",
              highlighted: true,
              backgroundImage: "",
            },
            {
              jobTitle: "Frontend Developer",
              companyName: "TechCorp",
              companyLogo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
              location: "Remote",
              experience: 2,
              keySkills: ["React", "JavaScript", "CSS"],
              detailsLink: "/jobs/1",
              highlighted: true,
            },
            {
              jobTitle: "Frontend Developer",
              companyName: "TechCorp",
              companyLogo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
              location: "Remote",
              experience: 2,
              keySkills: ["React", "JavaScript", "CSS"],
              detailsLink: "/jobs/1",
              highlighted: true,
            },
            {
              jobTitle: "Backend Engineer",
              companyName: "DevHouse",
              companyLogo: "https://via.placeholder.com/80x80.png?text=DH",
              location: "Bangalore",
              experience: 3,
              keySkills: ["Python", "FastAPI", "PostgreSQL"],
              detailsLink: "/jobs/2",
              highlighted: true,
            },
          ]}
        />
      </SectionWrapper>
    );
  } else {
    return (
      <SectionWrapper>
        <Heading heading={"Please signin as a recruiter to see this page."} />
      </SectionWrapper>
    );
  }
}
