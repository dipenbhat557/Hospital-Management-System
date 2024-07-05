"use client";

import { useSession } from "next-auth/react";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <LoginForm />;
  }

  if (session) {
    router.push("/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default Home;
