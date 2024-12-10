import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Discord Clone</h1>
      <div className="flex items-center space-x-4">
        <p>Welcome to Discord Clone!</p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
}
