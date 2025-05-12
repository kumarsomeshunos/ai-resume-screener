import { getAuthenticatedUser } from "./auth";
import { redirect } from "next/navigation";

export async function withRoleProtection(allowedRoles, pageFn) {
  const user = await getAuthenticatedUser();

  if (!allowedRoles.includes(user.role)) {
    redirect("/unauthorized");
  }

  return pageFn(user);
}
