"use client";

import Login from "@/pages/Login";
import { useSession, signOut } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <Login />;
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {session && (
        <>
          <p>User: {session?.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Home;
