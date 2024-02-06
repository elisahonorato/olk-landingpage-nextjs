
'use client'
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import { Canvas } from "@react-three/fiber";
import { Environment } from "drei";

export default function Home() {
  return (
    <>
      <ScrollSection />
        <Cbot/>
        <Hero />
    </>
  );
}