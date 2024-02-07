
'use client'
import ScrollSection from "./components/ScrollSection";
import Cbot from "./components/Cbot";
import { Canvas } from "@react-three/fiber";
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import MainScene from "./components/MainScene";

export default function Home() {
  return (
    
    <>
    <MainScene/>
    <ScrollSection/>
    <Cbot/>
    <Footer/>
        

    </>
  );
}