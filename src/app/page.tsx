
'use client'
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import { Canvas } from "@react-three/fiber";
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import Intro from "./components/Intro";
export default function Home() {
  return (
    
    <>
    <Intro  />
    <ScrollSection/>
    
    <Canvas style={{height: '100vh', width: '100vw'}}>
      <color attach="background" args={['#f0f0f0']}/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
      <pointLight position={[-10, -10, -10]}/>

      <ScrollControls>

        
        <Cbot/>
        <Scroll html style={{width: '100%'}}>


        </Scroll>

      </ScrollControls>
  


    </Canvas>
        

    </>
  );
}