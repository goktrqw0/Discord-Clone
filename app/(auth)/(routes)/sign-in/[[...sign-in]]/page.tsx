import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700",
          footerActionLink: "text-indigo-600 hover:text-indigo-700"
        }
      }}
      redirectUrl="/"
    />
  );
}
