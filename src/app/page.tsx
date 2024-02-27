'use client';
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import { Canvas } from "@react-three/fiber";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [meshRotation, setMeshRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const [x, y, z] = meshRotation;
    const text = document.querySelector("#cbot-text");
    if (text) {
      text.textContent = y.toFixed(2);
    }

    const text1 = document.querySelector(".cbot-text-1");
    const text2 = document.querySelector(".cbot-text-2");
    const text3 = document.querySelector(".cbot-text-3");

    if (text1 && text2 && text3) {
      if (y > -0.5 && y <= 0.5) {
        text1.classList.replace("hidden", "block");
      } else {
        text1.classList.replace("block", "hidden");
      }

      if (y > 0.5 && y <= 1) {
        text2.classList.replace("hidden", "block");
      } else {
        text2.classList.replace("block", "hidden");
      }

      if (y > 1) {
        text3.classList.replace("hidden", "block");
      } else {
        text3.classList.replace("block", "hidden");
      }
    }
  }, [meshRotation]);

  return (
    <div className="h-screen w-screen">
      <Intro />
      <ScrollSection />
      <div className="relative w-full h-screen page-content">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Canvas className="cbot absolute" style={{ width: "100vw" }}>
            <Cbot onUpdateRotation={setMeshRotation} />
          </Canvas>
        </div>
        <div className="relative overflow-hidden w-full h-screen">
          <div className="flex flex-col relative z-20 ml-10">
            <p id="cbot-text"></p>
            <div className="text-start w-full cbot-text-1 hidden">
              <p className="text-lg text-white font-bold">
                Text 1
              </p>
            </div>
            <div className="text-end w-full cbot-text-2 hidden">
              <p className="text-lg text-white font-bold">
                Text 2
              </p>
            </div>
            <div className="text-start w-full cbot-text-3 hidden">
              <p className="text-lg text-white font-bold">
                Text 3
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
