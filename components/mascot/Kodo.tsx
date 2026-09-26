import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKodoStore } from './store/useKodoStore';
import * as THREE from 'three';
import { Float, Sphere, Capsule } from '@react-three/drei';

export default function Kodo() {
  const { state } = useKodoStore();
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  
  // Smooth interpolation vectors
  const targetRotation = useMemo(() => new THREE.Vector2(), []);
  const currentRotation = useMemo(() => new THREE.Vector2(), []);

  // Blink logic
  const leftEyeRef = useRef<THREE.Group>(null);
  const rightEyeRef = useRef<THREE.Group>(null);
  const blinkTimer = useRef(0);
  const isBlinking = useRef(false);

  // Panda Materials
  const whiteMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#ffffff', 
    roughness: 0.8, 
    metalness: 0.1 
  }), []);
  
  const blackMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#18181b', // Very dark grey/black
    roughness: 0.9, 
    metalness: 0.1 
  }), []);

  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#ffffff', // Bright white pupils
    emissive: '#ffffff',
    emissiveIntensity: 0.4,
    roughness: 0.2,
  }), []);
  
  const blushMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#f9a8d4', // Cute pink blush
    roughness: 1, 
    metalness: 0 
  }), []);

  // Mouse tracking and animation loop
  useFrame((stateObj, delta) => {
    const time = stateObj.clock.elapsedTime;

    // 1. Mouse tracking (Head)
    if (state !== 'GUIDING') {
      const px = stateObj.pointer.x;
      const py = stateObj.pointer.y;

      targetRotation.x = py * 0.4; // Pitch (up/down)
      targetRotation.y = px * 0.6; // Yaw (left/right)
      
      // Curious head tilt based on state
      if (state === 'HOVERING') {
        targetRotation.x -= 0.1; // Look slightly up/attentive
        if (headRef.current) {
          headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -0.15, delta * 5); // Curious tilt
        }
      } else {
        if (headRef.current) {
          headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, 0, delta * 5);
        }
      }
    }

    if (state === 'EXCITED') {
      // Happy wiggle like talking tom
      targetRotation.x = Math.sin(time * 20) * 0.1;
      targetRotation.y = Math.sin(time * 15) * 0.2;
      if (groupRef.current) {
        // Jumping effect
        groupRef.current.position.y = Math.abs(Math.sin(time * 10)) * 0.2 - 0.2;
      }
      // Flapping arms
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(time * 20) * 0.5 + 0.5;
        rightArmRef.current.rotation.z = -Math.sin(time * 20) * 0.5 - 0.5;
      }
    } else {
      if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.2, delta * 10);
      }
      // Rest arms
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.4, delta * 5);
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.4, delta * 5);
      }
    }

    currentRotation.x = THREE.MathUtils.lerp(currentRotation.x, targetRotation.x, delta * 4);
    currentRotation.y = THREE.MathUtils.lerp(currentRotation.y, targetRotation.y, delta * 4);

    if (headRef.current) {
      headRef.current.rotation.x = -currentRotation.x;
      headRef.current.rotation.y = currentRotation.y;
    }

    // 2. Blinking
    blinkTimer.current += delta;
    if (blinkTimer.current > (isBlinking.current ? 0.15 : Math.random() * 4 + 2)) {
      isBlinking.current = !isBlinking.current;
      blinkTimer.current = 0;
    }
    const eyeScaleY = isBlinking.current ? 0.1 : 1;
    if (leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, eyeScaleY, delta * 20);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, eyeScaleY, delta * 20);
    }
    
    // 3. Ear twitching
    if (leftEarRef.current && rightEarRef.current) {
      if (Math.random() > 0.99) {
        leftEarRef.current.scale.y = 0.7;
      } else {
        leftEarRef.current.scale.y = THREE.MathUtils.lerp(leftEarRef.current.scale.y, 1, delta * 10);
      }
      
      if (Math.random() > 0.99) {
        rightEarRef.current.scale.y = 0.7;
      } else {
        rightEarRef.current.scale.y = THREE.MathUtils.lerp(rightEarRef.current.scale.y, 1, delta * 10);
      }
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={1.4} position={[0, -0.2, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        
        {/* LEGS (Super stubby) */}
        <group position={[0, -0.45, 0]}>
          <Capsule args={[0.14, 0.1, 16, 16]} position={[-0.2, 0, 0]} material={blackMat} />
          <Capsule args={[0.14, 0.1, 16, 16]} position={[0.2, 0, 0]} material={blackMat} />
        </group>

        {/* BODY (Rounder and smaller) */}
        <group position={[0, -0.1, 0]}>
          {/* Main White Belly */}
          <Sphere args={[0.4, 32, 32]} position={[0, -0.1, 0]} scale={[1, 0.9, 0.9]} material={whiteMat} />
          
          {/* Upper Body / Shoulders (Black band) */}
          <Capsule args={[0.38, 0.1, 16, 16]} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} material={blackMat} />
          
          {/* Arms (Stubby) */}
          <group ref={leftArmRef} position={[-0.4, 0.1, 0.1]}>
            <Capsule args={[0.1, 0.2, 16, 16]} position={[0, -0.1, 0]} material={blackMat} />
          </group>
          <group ref={rightArmRef} position={[0.4, 0.1, 0.1]}>
            <Capsule args={[0.1, 0.2, 16, 16]} position={[0, -0.1, 0]} material={blackMat} />
          </group>

          {/* Tail */}
          <Sphere args={[0.08, 16, 16]} position={[0, -0.3, -0.35]} material={whiteMat} />
        </group>

        {/* HEAD (Much bigger for maximum cuteness) */}
        <group ref={headRef} position={[0, 0.5, 0]}>
          {/* Main Head */}
          <Sphere args={[0.55, 32, 32]} material={whiteMat} scale={[1.1, 0.95, 1]} />

          {/* Snout (Flatter, lower) */}
          <Sphere args={[0.15, 16, 16]} position={[0, -0.2, 0.5]} scale={[1.4, 0.7, 0.6]} material={whiteMat} />
          {/* Nose */}
          <Sphere args={[0.05, 16, 16]} position={[0, -0.18, 0.58]} material={blackMat} scale={[1.3, 0.8, 0.8]} />

          {/* Blush */}
          <Sphere args={[0.08, 16, 16]} position={[-0.35, -0.15, 0.45]} material={blushMat} scale={[1, 0.6, 0.2]} rotation={[0, -0.2, 0]} />
          <Sphere args={[0.08, 16, 16]} position={[0.35, -0.15, 0.45]} material={blushMat} scale={[1, 0.6, 0.2]} rotation={[0, 0.2, 0]} />

          {/* Eye Patches (Lower, angled down, wide apart) */}
          <Sphere args={[0.16, 16, 16]} position={[-0.25, -0.05, 0.48]} scale={[1.1, 0.8, 0.4]} rotation={[0, 0, -0.3]} material={blackMat} />
          <Sphere args={[0.16, 16, 16]} position={[0.25, -0.05, 0.48]} scale={[1.1, 0.8, 0.4]} rotation={[0, 0, 0.3]} material={blackMat} />

          {/* Eyes inside the patches */}
          <group ref={leftEyeRef} position={[-0.23, -0.05, 0.54]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <primitive object={eyeMat} attach="material" />
          </group>
          <group ref={rightEyeRef} position={[0.23, -0.05, 0.54]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <primitive object={eyeMat} attach="material" />
          </group>

          {/* Ears (Big, round, further apart) */}
          <mesh ref={leftEarRef} position={[-0.4, 0.4, -0.1]} rotation={[0, 0, 0.3]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <primitive object={blackMat} attach="material" />
          </mesh>
          <mesh ref={rightEarRef} position={[0.4, 0.4, -0.1]} rotation={[0, 0, -0.3]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <primitive object={blackMat} attach="material" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
