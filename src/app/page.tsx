import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  // Redirect based on auth status
  if (userId) {
    redirect("/dashboard");
  } else {
    redirect("/signin");
  }
}
