import SectionWrapper from "@/components/core/Wrapper/SectionWrapper";
import NewJobForm from "@/components/forms/NewJobForm/NewJobForm";
import Heading from "@/components/core/Heading/Heading";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function NewJob() {
  const user = await getAuthenticatedUser();
  if (user.role == "recruiter") {
    return (
      <SectionWrapper>
        <NewJobForm />
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
