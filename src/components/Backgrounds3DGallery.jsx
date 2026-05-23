import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, OrbitControls, Torus } from '@react-three/drei';
import * as THREE from 'three';

// 1. Synthwave Cyber-Grid
function CyberGrid() {
    const gridRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(gridRef.current) {
            // Move grid towards the camera to simulate forward movement
            gridRef.current.position.z = (t * 2) % 2;
        }
    });

    return (
        <group>
            {/* Sun */}
            <mesh position={[0, 2, -15]}>
                <circleGeometry args={[4, 32]} />
                <meshBasicMaterial color="#f43f5e" />
            </mesh>
            
            {/* Grid */}
            <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[100, 100, 50, 50]} />
                <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.3} />
            </mesh>

            {/* Fog to hide the grid edges */}
            <fog attach="fog" args={['#0f172a', 5, 15]} />
        </group>
    );
}

// 2. Vórtice Cuántico
function QuantumVortex() {
    const groupRef = useRef();

    useFrame((state) => {
        if(groupRef.current) {
            groupRef.current.rotation.z -= 0.01;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {[...Array(15)].map((_, i) => (
                <Torus key={i} args={[2 + i * 0.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -i * 1.5]}>
                    <meshStandardMaterial 
                        color={new THREE.Color().setHSL(i * 0.1, 0.8, 0.5)} 
                        emissive={new THREE.Color().setHSL(i * 0.1, 0.8, 0.5)}
                        emissiveIntensity={2} 
                    />
                </Torus>
            ))}
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </group>
    );
}

// 3. Lluvia de Partículas Cósmicas
function CosmicRain() {
    const particlesRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(particlesRef.current) {
            // Create a hyperspace tunnel effect
            particlesRef.current.rotation.z = t * 0.2;
            particlesRef.current.position.z = (t * 10) % 20;
        }
    });

    return (
        <group>
            <group ref={particlesRef} position={[0, 0, -20]}>
                <Sparkles count={2000} scale={20} size={2} speed={0} opacity={1} color="#38bdf8" />
                <Sparkles count={2000} scale={20} size={1} speed={0} opacity={0.5} color="#a855f7" position={[0, 0, -10]} />
            </group>
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <fog attach="fog" args={['#000000', 5, 20]} />
        </group>
    );
}

export default function Backgrounds3DGallery() {
    return (
        <div className="glass-container mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-pink-400 border-b border-white/10 pb-4">Galería de Fondos 3D Brutales</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Synthwave */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-pink-500/30 flex flex-col shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                    <div className="h-[300px] relative bg-[#0f172a]">
                        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                            <ambientLight intensity={0.5} />
                            <CyberGrid />
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-pink-500/20">
                        <h3 className="text-xl font-bold text-pink-400">Synthwave Cyber-Grid</h3>
                        <p className="text-sm text-gray-400 mt-2">Estética retro-futurista de los 80s con rejilla infinita de neón.</p>
                    </div>
                </div>

                {/* Vórtice Cuántico */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-purple-500/30 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <div className="h-[300px] relative bg-black">
                        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                            <ambientLight intensity={0.5} />
                            <QuantumVortex />
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-purple-500/20">
                        <h3 className="text-xl font-bold text-purple-400">Vórtice Cuántico</h3>
                        <p className="text-sm text-gray-400 mt-2">Túnel hipnótico de toroides con emisión de luz volumétrica.</p>
                    </div>
                </div>

                {/* Cosmic Rain */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-sky-500/30 flex flex-col shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                    <div className="h-[300px] relative bg-black">
                        <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
                            <ambientLight intensity={0.5} />
                            <CosmicRain />
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-sky-500/20">
                        <h3 className="text-xl font-bold text-sky-400">Lluvia Cósmica (Warp)</h3>
                        <p className="text-sm text-gray-400 mt-2">Efecto direccional de partículas a la velocidad de la luz (Warp speed).</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
