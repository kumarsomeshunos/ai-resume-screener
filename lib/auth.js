import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAuthenticatedUser() {
  const token = cookies().get("access_token")?.value;

  if (!token) redirect("/signin");

  const res = await fetch("http://localhost:8000/auth/verify-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({ token }),
  });

  if (!res.ok) redirect("/signin");

  const { valid, email, uid, role } = await res.json();

  if (!valid) redirect("/signin");

  return { email, uid, role };
}
