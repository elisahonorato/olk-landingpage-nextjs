/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 cbot.glb --transform 
Files: cbot.glb [38.52MB] > /Users/Elisa/Desktop/work/obralink/app/olk-landingpage/public/models/cbot/cbot-transformed.glb [2.09MB] (95%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cbot-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.258, 0, 0.501]}>
        <mesh geometry={nodes.Body1127.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Body1127_1.geometry} material={materials.logo_obralink} />
      </group>
      <mesh geometry={nodes.cuerpo.geometry} material={materials.PaletteMaterial002} position={[-0.258, 0, 0.501]} />
      <mesh geometry={nodes.cuerpo028.geometry} material={materials.PaletteMaterial003} position={[-0.258, 0, 0.501]} />
      <mesh geometry={nodes.cuerpo029.geometry} material={materials.PaletteMaterial004} position={[-0.258, 0, 0.501]} />
    </group>
  )
}

useGLTF.preload('/cbot-transformed.glb')
