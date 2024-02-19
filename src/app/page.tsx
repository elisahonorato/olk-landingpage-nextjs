
'use client'
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import MainScene from "./components/MainScene";
import { Canvas } from "@react-three/fiber";
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import Intro from "./components/Intro";
import Footer from "./components/Footer";

import { useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    
    <>
    <div style={{height: "100vh", width: "100vw"}}>
      <Intro/>
      <Canvas className="cbot" ref={canvasRef} style={{position: "absolute", top: 0, left: 0, zIndex: 1}}>
        <MainScene/>
      </Canvas>
    </div>

    <ScrollSection/>
    <Canvas>
      <Cbot/>
    </Canvas>
   
    <Footer/>
        

    </>
  );
}