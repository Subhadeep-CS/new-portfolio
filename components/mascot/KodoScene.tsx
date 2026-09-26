import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import Kodo from './Kodo';

export default function KodoScene() {
  return (
    <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]} // Optimize for performance (limit max dpr to 2)
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, 10, -5]} intensity={1} color="#4ade80" />
        <pointLight position={[0, -2, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Kodo />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
