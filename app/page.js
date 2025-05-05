import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">Hire-Archy</h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        Streamline your hiring process with AI-powered resume screening for
        smarter and faster candidate selection.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link href={`/signup`}>For Candidates</Link>
        <Link href="/signup">For Recruiters</Link>
      </div>
    </div>
  );
}
