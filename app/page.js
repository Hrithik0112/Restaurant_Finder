"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);
  return (
    <div>
      <h1>Lets begin the Project.</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
