import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
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
