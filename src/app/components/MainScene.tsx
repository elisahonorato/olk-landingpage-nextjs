"use client";
import { useLayoutEffect, useRef, useEffect } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useScroll, ScrollControls, Scroll} from "@react-three/drei";
import { Mesh } from "three";
import gsap from "gsap";
import { Environment } from "@react-three/drei";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




import Hero from "./Hero";
import Intro from "./Intro";
gsap.registerPlugin(ScrollTrigger);


export default function MainScene({ ...props } : any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mesh = useRef<Mesh>(null!);
  const { nodes, materials } = useGLTF("./models/cbot/cbot-transformed.glb") as unknown as any;


  useEffect(() => {
    // Configurar la animación con ScrollTrigger para que se active dos veces
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top",
        end: "bottom bottom",
        scrub: 1,
        onEnterBack: () => playAnimation(), // Se ejecuta al hacer scroll hacia arriba
        onEnter: () => playAnimation() // Se ejecuta al hacer scroll hacia abajo
      }
    });

    function playAnimation() {
      timeline.to(mesh.current.rotation, {
        y: Math.PI * 0.9,
        duration: 4,
        ease: "none"
        
      });
    }
  }, [mesh]);

  return (
    <>
      <group {...props} dispose={null} ref={mesh} position={[0, 0, 0]} scale={[7, 7, 7]}>
        <group position={[-0.258, 0, 0.501]}>
          <mesh geometry={(nodes.Body1127 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={(nodes.Body1127_1 as THREE.Mesh).geometry} material={materials.logo_obralink} />
        </group>
        <mesh geometry={(nodes.cuerpo as THREE.Mesh).geometry} material={materials.PaletteMaterial002} position={[-0.258, 0, 0.501]} />
        <mesh geometry={(nodes.cuerpo028 as THREE.Mesh).geometry} material={materials.PaletteMaterial003} position={[-0.258, 0, 0.501]} />
        <mesh geometry={(nodes.cuerpo029 as THREE.Mesh).geometry} material={materials.PaletteMaterial004} position={[-0.258, 0, 0.501]} />
      </group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />

    </>
  );
}