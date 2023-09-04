"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const HeaderNavbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between p-4">
      <div className=" flex gap-5 items-center">
        <Image src="/reslogo.png" alt="reslogo" width={50} height={50} />
        <h2>Home</h2>
        <h2>Favourite</h2>
      </div>
      <div className=" bg-gray-100 p-[6x] rounded-md w-[40%] gap-3 hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full p-1"
        />
      </div>
      <div>
        {session?.user ? (
          <Image
            src={session.user.image}
            alt="user"
            height={40}
            width={40}
            className="rounded-full"
          />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderNavbar;
