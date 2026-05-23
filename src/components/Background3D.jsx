import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Stars, Icosahedron, TorusKnot, useGLTF } from '@react-three/drei';

function AnimatedSphere() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2;
      sphereRef.current.rotation.y = t * 0.3;
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.5 + (window.scrollY * -0.002);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

import { RoundedBox } from '@react-three/drei';

function CustomLaptop() {
    const laptopRef = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(laptopRef.current) {
            laptopRef.current.rotation.y = Math.sin(t * 0.2) * 0.3 - 0.5;
            laptopRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
            laptopRef.current.position.y = (window.scrollY * -0.006) - 1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={laptopRef} position={[3.5, -1, -2]} rotation={[0.2, -0.5, 0]} scale={0.6}>
                {/* Base */}
                <RoundedBox args={[3, 0.1, 2]} radius={0.05} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
                </RoundedBox>
                {/* Keyboard area */}
                <RoundedBox args={[2.8, 0.05, 1.2]} radius={0.02} position={[0, 0.05, 0.2]}>
                    <meshStandardMaterial color="#1e293b" />
                </RoundedBox>
                {/* Screen */}
                <group position={[0, 0.05, -0.9]} rotation={[1.8, 0, 0]}>
                    <RoundedBox args={[3, 2, 0.1]} radius={0.05} position={[0, 1, 0]}>
                        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
                    </RoundedBox>
                    {/* Display */}
                    <mesh position={[0, 1, 0.06]}>
                        <planeGeometry args={[2.8, 1.8]} />
                        <meshBasicMaterial color="#0ea5e9" />
                    </mesh>
                </group>
            </group>
        </Float>
    );
}

function FloatingShapes() {
    const groupRef = useRef();
    
    useFrame(() => {
        if(groupRef.current) {
            // Un poco de parallax según el scroll
            groupRef.current.position.y = window.scrollY * -0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={2} floatIntensity={3}>
                <Icosahedron args={[0.5, 0]} position={[-4, 2, -5]}>
                    <meshStandardMaterial color="#f472b6" wireframe />
                </Icosahedron>
            </Float>
            <Float speed={1} rotationIntensity={3} floatIntensity={2}>
                <TorusKnot args={[0.4, 0.1, 64, 8]} position={[4, -2, -3]}>
                    <meshStandardMaterial color="#2dd4bf" wireframe />
                </TorusKnot>
            </Float>
            <Float speed={2.5} rotationIntensity={1} floatIntensity={4}>
                <Icosahedron args={[0.3, 0]} position={[-3, -4, -2]}>
                    <meshStandardMaterial color="#eab308" wireframe />
                </Icosahedron>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
                <TorusKnot args={[0.3, 0.05, 64, 8]} position={[5, 4, -4]}>
                    <meshStandardMaterial color="#a855f7" wireframe />
                </TorusKnot>
            </Float>
        </group>
    );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} color="#8b5cf6" intensity={2} />
        
        <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
        <FloatingShapes />
        <Suspense fallback={null}>
            <CustomLaptop />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
