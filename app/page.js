"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryList from "./components/Home/CategoryList";
import AreaRange from "./components/Home/AreaRange";
import RatingSelect from "./components/Home/RatingSelect";
import GooglemapView from "./components/Home/GooglemapView";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      {/* <h1>Lets begin the Project.</h1>
      <button onClick={() => signOut()}>Sign Out</button> */}
      <div className="first p-3">
        <CategoryList />
        <AreaRange />
        <RatingSelect />
      </div>
      <div className="second col-span-3">
        <GooglemapView />
      </div>
    </div>
  );
}
