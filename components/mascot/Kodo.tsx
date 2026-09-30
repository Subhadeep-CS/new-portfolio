import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKodoStore } from './store/useKodoStore';
import * as THREE from 'three';
import { Float, Sphere, Capsule, Torus } from '@react-three/drei';

export default function Kodo() {
  const { state, isTourActive, setState } = useKodoStore();
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const wandRef = useRef<THREE.Group>(null);
  const wandStarRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Group>(null);

  // Spin tracking
  const spinProgress = useRef(0);
  
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
    roughness: 0.75, 
    metalness: 0.1 
  }), []);
  
  const blackMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#18181b', // Very dark grey/black
    roughness: 0.85, 
    metalness: 0.1 
  }), []);

  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#ffffff', // Bright white pupils
    emissive: '#ffffff',
    emissiveIntensity: 0.6,
    roughness: 0.2,
  }), []);
  
  const blushMat = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#f9a8d4', // Cute pink blush
    roughness: 1, 
    metalness: 0 
  }), []);

  const haloMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 1.2,
    roughness: 0.2,
    transparent: true,
    opacity: 0.85,
  }), []);

  const wandStickMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#f59e0b',
    roughness: 0.4,
    metalness: 0.3,
  }), []);

  const wandStarMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#38bdf8',
    emissiveIntensity: 2.0,
    roughness: 0.1,
  }), []);

  // Mouse tracking and dynamic animation loop
  useFrame((stateObj, delta) => {
    const time = stateObj.clock.elapsedTime;

    // 1. Mouse tracking & Head orientation
    const px = stateObj.pointer.x;
    const py = stateObj.pointer.y;

    if (state === 'GUIDING') {
      // Look toward the upper-right (towards the website content)
      targetRotation.x = 0.15;
      targetRotation.y = 0.45;
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -0.1, delta * 4);
      }
    } else if (state === 'THINKING') {
      // Look upward pensively
      targetRotation.x = 0.35;
      targetRotation.y = -0.2;
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, 0.25, delta * 4);
      }
    } else if (state === 'WAVING') {
      // Happy head tilt
      targetRotation.x = py * 0.2;
      targetRotation.y = px * 0.3;
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, Math.sin(time * 8) * 0.1, delta * 5);
      }
    } else if (state === 'HOVERING') {
      targetRotation.x = py * 0.4 - 0.1;
      targetRotation.y = px * 0.6;
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, -0.15, delta * 5);
      }
    } else {
      // Normal mouse tracking
      targetRotation.x = py * 0.4;
      targetRotation.y = px * 0.6;
      if (headRef.current) {
        headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, 0, delta * 5);
      }
    }

    currentRotation.x = THREE.MathUtils.lerp(currentRotation.x, targetRotation.x, delta * 4);
    currentRotation.y = THREE.MathUtils.lerp(currentRotation.y, targetRotation.y, delta * 4);

    if (headRef.current) {
      headRef.current.rotation.x = -currentRotation.x;
      headRef.current.rotation.y = currentRotation.y;
    }

    // 2. Body & Arm choreographies based on state
    if (state === 'SPINNING') {
      // 360 Degree Somersault / Barrel Roll
      spinProgress.current += delta * 8;
      if (groupRef.current) {
        groupRef.current.rotation.y = spinProgress.current;
        groupRef.current.position.y = Math.sin(spinProgress.current) * 0.3 - 0.2;
      }
      // Spread arms during spin
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = 1.3;
        rightArmRef.current.rotation.z = -1.3;
      }
      if (spinProgress.current >= Math.PI * 2) {
        spinProgress.current = 0;
        if (groupRef.current) groupRef.current.rotation.y = 0;
        setState(isTourActive ? 'GUIDING' : 'IDLE');
      }
    } else if (state === 'WAVING') {
      // Enthusiastic wave with right arm
      if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.2, delta * 10);
      }
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -2.1 + Math.sin(time * 14) * 0.35, delta * 10);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, -0.2, delta * 5);
      }
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.4, delta * 5);
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, delta * 5);
      }
    } else if (state === 'GUIDING') {
      // Right arm raises pointing wand at the screen!
      if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.15 + Math.sin(time * 3) * 0.05, delta * 5);
      }
      if (rightArmRef.current) {
        // Pointing up and outward
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -1.3 + Math.sin(time * 2) * 0.05, delta * 6);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, -1.1 + Math.sin(time * 3) * 0.05, delta * 6);
      }
      if (leftArmRef.current) {
        // Left arm balances back slightly
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.5, delta * 5);
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0.2, delta * 5);
      }
      // Pulse wand star tip
      if (wandStarRef.current) {
        wandStarRef.current.scale.setScalar(1 + Math.sin(time * 6) * 0.25);
      }
    } else if (state === 'THINKING') {
      // Left arm touches chin pensively
      if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.2, delta * 10);
      }
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 1.4, delta * 6);
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, -1.0, delta * 6);
      }
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.4, delta * 5);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0, delta * 5);
      }
    } else if (state === 'EXCITED') {
      // Happy wiggle & bounce
      if (groupRef.current) {
        groupRef.current.position.y = Math.abs(Math.sin(time * 12)) * 0.25 - 0.2;
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(time * 20) * 0.6 + 0.6;
        rightArmRef.current.rotation.z = -Math.sin(time * 20) * 0.6 - 0.6;
      }
    } else {
      // Resting / Idle
      if (groupRef.current) {
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -0.2, delta * 10);
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.4, delta * 5);
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, delta * 5);
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.4, delta * 5);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0, delta * 5);
      }
    }

    // 3. Floating Halo Rotation (visible during tour)
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 1.5;
      haloRef.current.position.y = 1.15 + Math.sin(time * 3) * 0.04;
    }

    // 4. Blinking
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
    
    // 5. Ear twitching
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
    <group ref={groupRef} dispose={null} scale={1.35} position={[0, -0.2, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.25}>
        
        {/* MAGICAL FLOATING TOUR HALO (active during tour) */}
        {isTourActive && (
          <group ref={haloRef} position={[0, 1.15, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
            <Torus args={[0.38, 0.035, 16, 32]}>
              <primitive object={haloMat} attach="material" />
            </Torus>
          </group>
        )}

        {/* LEGS */}
        <group position={[0, -0.45, 0]}>
          <Capsule args={[0.14, 0.1, 16, 16]} position={[-0.2, 0, 0]} material={blackMat} />
          <Capsule args={[0.14, 0.1, 16, 16]} position={[0.2, 0, 0]} material={blackMat} />
        </group>

        {/* BODY */}
        <group position={[0, -0.1, 0]}>
          {/* Main White Belly */}
          <Sphere args={[0.4, 32, 32]} position={[0, -0.1, 0]} scale={[1, 0.9, 0.9]} material={whiteMat} />
          
          {/* Upper Body / Shoulders */}
          <Capsule args={[0.38, 0.1, 16, 16]} position={[0, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} material={blackMat} />
          
          {/* Left Arm */}
          <group ref={leftArmRef} position={[-0.4, 0.1, 0.1]}>
            <Capsule args={[0.1, 0.2, 16, 16]} position={[0, -0.1, 0]} material={blackMat} />
          </group>

          {/* Right Arm (Holds Guide Wand) */}
          <group ref={rightArmRef} position={[0.4, 0.1, 0.1]}>
            <Capsule args={[0.1, 0.2, 16, 16]} position={[0, -0.1, 0]} material={blackMat} />

            {/* Glowing Star Guide Wand */}
            <group ref={wandRef} position={[0.08, -0.22, 0.12]} rotation={[0.4, 0, -0.2]}>
              {/* Wand Handle */}
              <cylinderGeometry args={[0.02, 0.025, 0.32, 12]} />
              <primitive object={wandStickMat} attach="material" />
              
              {/* Star Gem / Pointer Tip */}
              <group position={[0, 0.18, 0]}>
                <mesh ref={wandStarStar => { if (wandStarStar) (wandStarRef as any).current = wandStarStar; }}>
                  <octahedronGeometry args={[0.075, 0]} />
                  <primitive object={wandStarMat} attach="material" />
                </mesh>
                <pointLight color="#38bdf8" intensity={1.8} distance={1.2} />
              </group>
            </group>
          </group>

          {/* Tail */}
          <Sphere args={[0.08, 16, 16]} position={[0, -0.3, -0.35]} material={whiteMat} />
        </group>

        {/* HEAD */}
        <group ref={headRef} position={[0, 0.5, 0]}>
          {/* Main Head */}
          <Sphere args={[0.55, 32, 32]} material={whiteMat} scale={[1.1, 0.95, 1]} />

          {/* Snout */}
          <Sphere args={[0.15, 16, 16]} position={[0, -0.2, 0.5]} scale={[1.4, 0.7, 0.6]} material={whiteMat} />
          {/* Nose */}
          <Sphere args={[0.05, 16, 16]} position={[0, -0.18, 0.58]} material={blackMat} scale={[1.3, 0.8, 0.8]} />

          {/* Blush */}
          <Sphere args={[0.08, 16, 16]} position={[-0.35, -0.15, 0.45]} material={blushMat} scale={[1, 0.6, 0.2]} rotation={[0, -0.2, 0]} />
          <Sphere args={[0.08, 16, 16]} position={[0.35, -0.15, 0.45]} material={blushMat} scale={[1, 0.6, 0.2]} rotation={[0, 0.2, 0]} />

          {/* Eye Patches */}
          <Sphere args={[0.16, 16, 16]} position={[-0.25, -0.05, 0.48]} scale={[1.1, 0.8, 0.4]} rotation={[0, 0, -0.3]} material={blackMat} />
          <Sphere args={[0.16, 16, 16]} position={[0.25, -0.05, 0.48]} scale={[1.1, 0.8, 0.4]} rotation={[0, 0, 0.3]} material={blackMat} />

          {/* Eyes */}
          <group ref={leftEyeRef} position={[-0.23, -0.05, 0.54]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <primitive object={eyeMat} attach="material" />
          </group>
          <group ref={rightEyeRef} position={[0.23, -0.05, 0.54]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <primitive object={eyeMat} attach="material" />
          </group>

          {/* Ears */}
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
