'use client';
import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { Group } from "three";
import { Environment } from "@react-three/drei";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis';


gsap.registerPlugin(ScrollTrigger);

export default function Cbot({ onUpdateRotation, ...props }) {
  const mesh = useRef<Group>(null!);
  const { nodes, materials } = useGLTF("./models/cbot/cbot-transformed.glb") as unknown as any;
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    if (!mesh.current) return;

  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cbot",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: () => onUpdateRotation(mesh.current.rotation.toArray()) // Actualiza la rotación durante el scroll
      }
    });
  
    // Primera sección: de arriba hacia abajo
    timeline.to(mesh.current.rotation, {
      y: Math.PI * 0.5, // Primera rotación a 0.5
      duration: 20, // Duración total de la primera sección (más lenta)
      ease: "none" // Sin easing para un movimiento constante
    });
  
    // Segunda sección: de abajo hacia arriba
    timeline.to(mesh.current.rotation, {
      y: Math.PI * -0.5, // Segunda rotación a -0.5
      duration: 20, // Duración total de la segunda sección (más lenta)
      ease: "none", // Sin easing para un movimiento constante
      onStart: () => onUpdateRotation(mesh.current.rotation.toArray()) // Actualiza la rotación al inicio de la segunda sección
    });
  }, [mesh, onUpdateRotation]);
  
  useEffect(() => {
    if (mesh.current) {
      onUpdateRotation(mesh.current.rotation.toArray());
    }
  }, [onUpdateRotation, mesh.current?.rotation.toArray()]);

  return (
    <>
      <group {...props} dispose={null} ref={mesh} position={[0, 0, 0]} scale={[7, 7, 7]}>
        <group position={[-0.258, 0, 0.501]}>
          <mesh geometry={nodes.Body1127.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.Body1127_1.geometry} material={materials.logo_obralink} />
        </group>
        <mesh geometry={nodes.cuerpo.geometry} material={materials.PaletteMaterial002} position={[-0.258, 0, 0.501]} />
        <mesh geometry={nodes.cuerpo028.geometry} material={materials.PaletteMaterial003} position={[-0.258, 0, 0.501]} />
        <mesh geometry={nodes.cuerpo029.geometry} material={materials.PaletteMaterial004} position={[-0.258, 0, 0.501]} />
      </group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
    </>
  );
}
