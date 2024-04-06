"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        className="w-full ml-3 h-14 rounded-md dark:placeholder-gray-200 placeholder-gray-900 px-1 mt-3 bg-transparent flex-1"
        type="text"
        placeholder="Search Keyword..."
        id=""
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button className="dark:text-gray-200 disabled:text-gray-400 cursor-pointer px-2 mt-3 rounded-md ml-3 text-gray-900" disabled={search === ''}>
        Search
      </button>
    </form>
  );
}
