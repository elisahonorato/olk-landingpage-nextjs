"use client";

import { useLayoutEffect, useRef } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useScroll, ScrollControls, Scroll} from "@react-three/drei";
import { Mesh } from "three";
import gsap from "gsap";
import { Environment } from "@react-three/drei";


import Hero from "./Hero";


function MeshComponent(props: any) {
    const scroll = useScroll();
    const mesh = useRef<Mesh>(null!);
    const { nodes, materials } = useGLTF('./models/cbot/cbot-transformed.glb');

    const tl = useRef(gsap.timeline());

    useFrame((state, delta) => {
        tl.current.seek(scroll.offset * tl.current.duration())
      })
    
    useLayoutEffect(()=> {
 
    
        tl.current
        .to(mesh.current.rotation, {y: -1}, 2)
        .to(mesh.current.position, {x: 1}, 2)
    
        .to(mesh.current.rotation, {y: 1}, 6)   
        .to(mesh.current.position, {x: -1}, 6)
    
        .to(mesh.current.rotation, {y: 0}, 11)
        .to(mesh.current.rotation, {x: 1}, 11)
        .to(mesh.current.position, {x: 0}, 11)
    
        .to(mesh.current.rotation, {y: 0}, 13)
        .to(mesh.current.rotation, {x: -1}, 13)    
        .to(mesh.current.position, {x: 0}, 13)
    
        .to(mesh.current.rotation, {y: 0}, 16)   
        .to(mesh.current.rotation, {x: 0}, 16) 
        .to(mesh.current.position, {x: 0}, 16)    
    
        .to(mesh.current.rotation, {y: 0}, 20)   
        .to(mesh.current.rotation, {x: 0}, 20) 
        .to(mesh.current.position, {x: 0}, 20)   
    
      },[])
    return (   
        <group {...props} dispose={null} ref={mesh}>
        <group position={[-0.258, 0, 0.501]}>
          <mesh geometry={(nodes.Body1127 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={(nodes.Body1127_1 as THREE.Mesh).geometry} material={materials.logo_obralink} />
        </group>
        <mesh geometry={(nodes.cuerpo as THREE.Mesh).geometry} material={materials.PaletteMaterial002} position={[-0.258, 0, 0.501]} />
        <mesh geometry={(nodes.cuerpo028 as THREE.Mesh).geometry} material={materials.PaletteMaterial003} position={[-0.258, 0, 0.501]} />
        <mesh geometry={(nodes.cuerpo029 as THREE.Mesh).geometry} material={materials.PaletteMaterial004} position={[-0.258, 0, 0.501]} />
      </group>
    );
}

export default function Cbot() {
    return (
            <MeshComponent position={[0, 0, 0]} scale={[10, 10, 10]} ></MeshComponent>
    );
}
useGLTF.preload('./models/cbot/cbot-transformed.glb') 