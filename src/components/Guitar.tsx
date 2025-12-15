import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Guitar() {
  const stringsRef = useRef<THREE.Group>(null);
  const [activeString, setActiveString] = useState<number | null>(null);

  useFrame((state) => {
    if (stringsRef.current && activeString !== null) {
      const time = state.clock.getElapsedTime();
      const string = stringsRef.current.children[activeString];
      if (string) {
        string.position.x = Math.sin(time * 20) * 0.02;
      }
    }
  });

  const playString = (index: number) => {
    setActiveString(index);
    
    // Play audio note
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    const notes = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41]; // E, B, G, D, A, E
    oscillator.frequency.value = notes[index];
    oscillator.type = 'triangle'; // More electric sound
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
    
    setTimeout(() => setActiveString(null), 1000);
  };

  return (
    <group>
      {/* Les Paul Body - Classic Single Cutaway */}
      {/* Upper Bout */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
        <meshStandardMaterial 
          color="#8B0000" // Deep red (cherry sunburst)
          roughness={0.2}
          metalness={0.6}
          emissive="#8B0000"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Lower Bout */}
      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 0.9, 0.4, 32]} />
        <meshStandardMaterial 
          color="#DC143C" // Brighter red
          roughness={0.2}
          metalness={0.6}
          emissive="#DC143C"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Waist/Middle */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.7, 0.4, 32]} />
        <meshStandardMaterial 
          color="#B22222" // Medium red
          roughness={0.2}
          metalness={0.6}
          emissive="#B22222"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Cutaway accent */}
      <mesh position={[0.4, 0.3, 0]} castShadow>
        <boxGeometry args={[0.3, 0.6, 0.35]} />
        <meshStandardMaterial 
          color="#8B0000"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Pickguard - Cream colored */}
      <mesh position={[0.2, -0.1, 0.21]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.5, 0.9, 0.01]} />
        <meshStandardMaterial 
          color="#FFF8DC" 
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Neck - Mahogany */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <boxGeometry args={[0.15, 2.5, 0.12]} />
        <meshStandardMaterial 
          color="#3d2817"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Fretboard - Rosewood */}
      <mesh position={[0, 1.8, 0.065]}>
        <boxGeometry args={[0.16, 2.5, 0.015]} />
        <meshStandardMaterial 
          color="#4a2511"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Frets - Nickel/Silver */}
      {Array.from({ length: 22 }).map((_, i) => {
        const spacing = i < 12 ? 0.11 : 0.09;
        const yPos = 0.7 + (i * spacing);
        return (
          <mesh key={i} position={[0, yPos, 0.073]}>
            <boxGeometry args={[0.17, 0.015, 0.012]} />
            <meshStandardMaterial 
              color="#C0C0C0" 
              metalness={0.95} 
              roughness={0.05}
              emissive="#FFFFFF"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}

      {/* Fret Inlays - Dot markers at positions 3, 5, 7, 9, 12, 15, 17, 19, 21 */}
      {[3, 5, 7, 9, 15, 17, 19, 21].map((fret) => {
        const yPos = 0.7 + (fret * (fret < 12 ? 0.11 : 0.09));
        return (
          <mesh key={fret} position={[0, yPos - 0.055, 0.074]}>
            <circleGeometry args={[0.015, 16]} />
            <meshStandardMaterial 
              color="#F5F5DC"
              emissive="#FFFFFF"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}

      {/* Double dots at 12th fret */}
      <mesh position={[-0.04, 0.7 + (12 * 0.11) - 0.055, 0.074]}>
        <circleGeometry args={[0.015, 16]} />
        <meshStandardMaterial 
          color="#F5F5DC"
          emissive="#FFFFFF"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0.04, 0.7 + (12 * 0.11) - 0.055, 0.074]}>
        <circleGeometry args={[0.015, 16]} />
        <meshStandardMaterial 
          color="#F5F5DC"
          emissive="#FFFFFF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Pickups - Dual Humbuckers */}
      {/* Neck Pickup */}
      <mesh position={[0, 0, 0.21]}>
        <boxGeometry args={[0.12, 0.35, 0.04]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      
      {/* Bridge Pickup */}
      <mesh position={[0, -0.6, 0.21]}>
        <boxGeometry args={[0.12, 0.35, 0.04]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Pickup pole pieces */}
      {[-0.6, 0].map((yOffset, pickupIndex) => (
        <group key={pickupIndex}>
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={i} position={[-0.0375 + i * 0.015, yOffset, 0.23]}>
              <cylinderGeometry args={[0.004, 0.004, 0.02, 8]} />
              <meshStandardMaterial 
                color="#C0C0C0"
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Bridge - Tune-O-Matic style */}
      <mesh position={[0, -0.85, 0.21]}>
        <boxGeometry args={[0.15, 0.15, 0.03]} />
        <meshStandardMaterial 
          color="#C0C0C0"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Tailpiece */}
      <mesh position={[0, -1.05, 0.15]}>
        <boxGeometry args={[0.13, 0.1, 0.02]} />
        <meshStandardMaterial 
          color="#C0C0C0"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Control Knobs */}
      {/* Volume knobs */}
      {[-0.15, 0.15].map((xPos, i) => (
        <group key={`vol-${i}`}>
          <mesh position={[xPos, -0.25, 0.22]}>
            <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
            <meshStandardMaterial 
              color="#1a1a1a"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
          {/* Indicator line */}
          <mesh position={[xPos, -0.25, 0.24]}>
            <boxGeometry args={[0.01, 0.02, 0.005]} />
            <meshStandardMaterial 
              color="#C0C0C0"
              emissive="#FFFFFF"
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      ))}

      {/* Tone knobs */}
      {[-0.15, 0.15].map((xPos, i) => (
        <mesh key={`tone-${i}`} position={[xPos, -0.45, 0.22]}>
          <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
          <meshStandardMaterial 
            color="#1a1a1a"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Toggle Switch */}
      <mesh position={[0.25, 0.15, 0.22]}>
        <boxGeometry args={[0.03, 0.08, 0.03]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Guitar Strings */}
      <group ref={stringsRef}>
        {Array.from({ length: 6 }).map((_, i) => {
          const xPos = -0.0375 + i * 0.015;
          return (
            <mesh
              key={i}
              position={[xPos, 0.5, 0.08]}
              onClick={() => playString(i)}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'default';
              }}
            >
              <boxGeometry args={[0.003, 3.2, 0.003]} />
              <meshStandardMaterial 
                color={activeString === i ? "#FFD700" : "#E0E0E0"} 
                metalness={0.95}
                roughness={0.05}
                emissive={activeString === i ? "#FFD700" : "#444444"}
                emissiveIntensity={activeString === i ? 0.8 : 0.1}
              />
            </mesh>
          );
        })}
      </group>

      {/* Headstock - Gibson style */}
      <mesh position={[0, 3.1, 0]} castShadow>
        <boxGeometry args={[0.25, 0.5, 0.08]} />
        <meshStandardMaterial 
          color="#3d2817"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Les Paul Logo plate */}
      <mesh position={[0, 3.15, 0.041]}>
        <boxGeometry args={[0.15, 0.08, 0.003]} />
        <meshStandardMaterial 
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Tuning Pegs - 3+3 configuration */}
      {Array.from({ length: 6 }).map((_, i) => {
        const side = i < 3 ? -0.13 : 0.13;
        const yPos = 3.3 - (i % 3) * 0.15;
        return (
          <group key={i}>
            {/* Peg shaft */}
            <mesh position={[side, yPos, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.08, 12]} />
              <meshStandardMaterial 
                color="#C0C0C0" 
                metalness={0.9} 
                roughness={0.1}
              />
            </mesh>
            {/* Tuning key */}
            <mesh position={[side + (i < 3 ? -0.05 : 0.05), yPos, 0]}>
              <boxGeometry args={[0.03, 0.06, 0.01]} />
              <meshStandardMaterial 
                color="#1a1a1a"
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          </group>
        );
      })}

      {/* Strap Buttons */}
      <mesh position={[0, -0.9, -0.2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.03, 12]} />
        <meshStandardMaterial 
          color="#C0C0C0"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, 2.8, -0.06]}>
        <cylinderGeometry args={[0.02, 0.02, 0.03, 12]} />
        <meshStandardMaterial 
          color="#C0C0C0"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}
