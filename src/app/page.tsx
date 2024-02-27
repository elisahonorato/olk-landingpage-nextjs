'use client';
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import Navbar from "./components/Navbar";
import { Canvas } from "@react-three/fiber";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";
import { Parallax } from "./components/Parallax";

export default function Home() {
  const [meshRotation, setMeshRotation] = useState(0);

  useEffect(() => {
    console.log(meshRotation);
    if (meshRotation === 1) {
      document.querySelector(".cbot-text-1")?.classList.remove("hidden");
      document.querySelector(".cbot-text-2")?.classList.add("hidden");
      document.querySelector(".cbot-text-3")?.classList.add("hidden");
    }
    if (meshRotation === 2) {
      document.querySelector(".cbot-text-2")?.classList.remove("hidden");
      document.querySelector(".cbot-text-1")?.classList.add("hidden");
      document.querySelector(".cbot-text-3")?.classList.add("hidden");
    }
    if (meshRotation === 3) {
      document.querySelector(".cbot-text-3")?.classList.remove("hidden");
      document.querySelector(".cbot-text-1")?.classList.add("hidden");
      document.querySelector(".cbot-text-2")?.classList.add("hidden");
    }

  }, [meshRotation]);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Intro />
      <ScrollSection />
      
        <div className="relative w-full h-screen">

   
            <Parallax speed={0} >
              <div className="absolute w-full h-full bg-cbot page-content" >
              <div className="text-start absolute w-full cbot-text-1 hidden">
                <div className="flex flex-col gap-4 w-1/3">
                  <h1 className="text-2xl text-white font-bold">
                    CiBots
                  </h1>
                  <p>
                    Los CiBots son dispositivos de monitoreo de proyectos de construcción que se encargan de recopilar datos en tiempo real sobre el avance de la obra. Estos dispositivos están equipados con sensores de última tecnología que permiten medir el avance de la obra, la calidad del aire, la temperatura, la humedad y otros factores que pueden afectar el desarrollo de la construcción.
                  </p>
                </div>
              </div>
              <div className="text-start absolute cbot-text-2 hidden w-1/3 right-2 ">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl text-white font-bold">
                    Software
                  </h1>
                  <p>
                    Los CiBots son dispositivos de monitoreo de proyectos de construcción que se encargan de recopilar datos en tiempo real sobre el avance de la obra. Estos dispositivos están equipados con sensores de última tecnología que permiten medir el avance de la obra, la calidad del aire, la temperatura, la humedad y otros factores que pueden afectar el desarrollo de la construcción.
                  </p>
                </div>
              </div>
              <div className=" w-full cbot-text-3 hidden text-bottom mt-10">
                <div className="flex flex-col gap-4 w-1/3">
                  <h1 className="text-2xl text-white font-bold">
                    CiBots
                  </h1>
                  <p>
                    Los CiBots son dispositivos de monitoreo de proyectos de construcción que se encargan de recopilar datos en tiempo real sobre el avance de la obra. Estos dispositivos están equipados con sensores de última tecnología que permiten medir el avance de la obra, la calidad del aire, la temperatura, la humedad y otros factores que pueden afectar el desarrollo de la construcción.
                  </p>
                </div>
              </div>
              </div>
            </Parallax>


     
          <Parallax speed={-0} >

          <Canvas className="cbot absolute" style={{ zIndex: 1, height: "100vh", width: "100vw" }}>
            <Cbot onUpdateRotation={setMeshRotation} />
            
          </Canvas>
          
          </Parallax>
        </div>
 




      <Footer />
    </div>
  );
}
