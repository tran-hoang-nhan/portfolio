import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import { Guitar } from './Guitar';
import * as THREE from 'three';

interface HeroSectionProps {
  scrollProgress: number;
}

export function HeroSection({ scrollProgress }: HeroSectionProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const guitarRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (cameraRef.current && guitarRef.current) {
      // Camera movement based on scroll
      const cameraZ = 8 - scrollProgress * 10;
      const cameraY = scrollProgress * 5;
      cameraRef.current.position.z = cameraZ;
      cameraRef.current.position.y = cameraY;
      cameraRef.current.lookAt(0, 0, 0);

      // Gentle guitar rotation based on scroll
      guitarRef.current.rotation.y = scrollProgress * Math.PI * 2 + Math.PI * 0.15; // Slight angle to show body
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 8]} fov={50} />
      
      {/* Lighting - Much Brighter */}
      <ambientLight intensity={1.5} />
      
      {/* Main directional lights for visibility */}
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-5, 5, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[0, -5, 5]} intensity={2} color="#ffffff" />
      
      {/* Spotlight - Stage Effect */}
      <SpotLight
        position={[5, 5, 8]}
        angle={0.6}
        penumbra={0.8}
        intensity={3}
        castShadow
        color="#ff3333"
      />
      <SpotLight
        position={[-5, 5, 8]}
        angle={0.6}
        penumbra={0.8}
        intensity={2.5}
        castShadow
        color="#3333ff"
      />
      
      <pointLight position={[0, 2, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[0, -2, 4]} intensity={2} color="#ffffff" />
      
      {/* Fill lights from behind */}
      <pointLight position={[0, 0, -3]} intensity={1.5} color="#ffffff" />
      
      {/* Guitar Model - Scaled up and positioned better */}
      <group ref={guitarRef} scale={[1.8, 1.8, 1.8]} position={[0, -0.5, 0]} rotation={[0, Math.PI * 0.15, 0]}>
        <Guitar />
      </group>
      
      {/* Reduced fog for better visibility */}
      <fog attach="fog" args={['#000000', 15, 30]} />
    </>
  );
}