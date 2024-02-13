"use client";

import { useRef } from "react";
import { Progressbar } from "./components/Progressbar";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <div className="w-full h-screen bg-blue-200" />
      <div className="w-full h-screen bg-red-200" />
      <div className="w-full h-screen bg-yellow-200" />
      <div className="w-full h-screen bg-green-200" />
    </main>
  );
}
