import Banner from "@/components/cards/Banner/Banner";
import CardHolder from "@/components/cards/CardHolder/CardHolder";
import SectionWrapper from "@/components/core/Wrapper/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function UserHome() {
  const user = await getAuthenticatedUser();
  if (user.role == "candidate") {
    return (
      <SectionWrapper>
        <Banner />
        <Heading
          heading={"AI Recommended Jobs"}
          subheading={"These are your AI Recommended Jobs."}
        />
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
        <Heading
          heading={"All Jobs"}
          subheading={"These are your AI Recommended Jobs."}
        />
        <CardHolder
          jobs={[
            {
              jobTitle: "Frontend Developer",
              companyName: "TechCorp",
              companyLogo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
              location: "Remote",
              experience: 2,
              keySkills: ["React", "JavaScript", "CSS"],
              detailsLink: "/jobs/1",
            },
            {
              jobTitle: "Backend Engineer",
              companyName: "DevHouse",
              companyLogo: "https://via.placeholder.com/80x80.png?text=DH",
              location: "Bangalore",
              experience: 3,
              keySkills: ["Python", "FastAPI", "PostgreSQL"],
              detailsLink: "/jobs/2",
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
            },
            {
              jobTitle: "Backend Engineer",
              companyName: "DevHouse",
              companyLogo: "https://via.placeholder.com/80x80.png?text=DH",
              location: "Bangalore",
              experience: 3,
              keySkills: ["Python", "FastAPI", "PostgreSQL"],
              detailsLink: "/jobs/2",
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
            },
          ]}
        />
      </SectionWrapper>
    );
  } else {
    return (
      <SectionWrapper>
        <Heading heading={"Please signin as a Candidate to see this page."} />
      </SectionWrapper>
    );
  }
}
