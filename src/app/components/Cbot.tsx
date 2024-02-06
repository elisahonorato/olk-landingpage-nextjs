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
    const { nodes, materials } = useGLTF('./models/cbot/cbot-transformed.glb')

    const tl = useRef(gsap.timeline({ paused: true }));

    useFrame((state, delta) => {
        console.log('Scroll offset:', scroll);

    }
    );

      

useLayoutEffect(()=> {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})
    
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
          <mesh geometry={nodes.Body1127.geometry} material={materials.PaletteMaterial001} />
          <mesh geometry={nodes.Body1127_1.geometry} material={materials.logo_obralink} />
        </group>
        <mesh geometry={nodes.cuerpo.geometry} material={materials.PaletteMaterial002} position={[-0.258, 0, 0.501]} />
        <mesh geometry={nodes.cuerpo028.geometry} material={materials.PaletteMaterial003} position={[-0.258, 0, 0.501]} />
        <mesh geometry={nodes.cuerpo029.geometry} material={materials.PaletteMaterial004} position={[-0.258, 0, 0.501]} />
      </group>
    );
}
useGLTF.preload('./models/cbot/cbot-transformed.glb')
export default function Cbot() {
    return (
        <Canvas>
            <ambientLight intensity={1.2} />
            <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
            <Environment preset="warehouse" />


            <ScrollControls pages={6} damping={0.1}>
                <MeshComponent position={[0, 0, 0]} scale={[10, 10, 10]} ></MeshComponent>
                <Scroll html style={{width: '100%'}}></Scroll>            
         
            </ScrollControls>
            
        </Canvas>

       
    );
}