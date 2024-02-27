import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { Group } from "three";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Environment } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function Cbot({ onUpdateRotation, ...props }) {
  const mesh = useRef<Group>(null!);
  const { nodes, materials } = useGLTF("./models/cbot/cbot-transformed.glb") as unknown as any;

  useEffect(() => {
    if (!mesh.current) return;

    const timeline = gsap.timeline();

    // Estado 1
    timeline.to(mesh.current.position, {
      x: 0,
      duration: 2,
      ease: "none"
    });
    timeline.to(mesh.current.rotation, {
      y: Math.PI * -0.1,
      x: 0,
      z: 0,
      duration: 2,
      onUpdate: () => onUpdateRotation(1)
    });
    timeline.to(mesh.current.position, {
      x: 0,
      duration: 2,
      ease: "none"
    });

    // Estado 2
    timeline.to(mesh.current.position, {
      x: 0,
      duration: 2,
      ease: "none"
    });
    timeline.to(mesh.current.rotation, {
      y: Math.PI * 0.1,
      x: 0,
      z: 0,
      duration: 20,
      onUpdate: () => onUpdateRotation(2)
    });
    timeline.to(mesh.current.position, {
      x: 0,
      duration: 20,
      ease: "none"
    });

    timeline.to(mesh.current.rotation, {
      y: 0,
      x: Math.PI * -0.1,
      z: 0,
      duration: 20,
      onUpdate: () => onUpdateRotation(3),// Estado 3
      onComplete: () => {
        setTimeout(() => onUpdateRotation(3), 5000);
      }
    });

    ScrollTrigger.create({
      animation: timeline,
      trigger: ".cbot",
      start: "top center",
      end: "bottom center",
      scrub: true
    });
  }, [mesh, onUpdateRotation]);

  return (
    <>
      <group {...props} dispose={null} ref={mesh} position={[0, 0, 0]} scale={[10, 10, 10]}>
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
