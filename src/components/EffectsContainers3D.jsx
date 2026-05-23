import { useRef, Suspense, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, MeshPortalMaterial, CameraControls, Environment, Sphere, Cylinder, Float, Stars, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

// 1. Hologram Display
function Hologram() {
    const objRef = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(objRef.current) {
            objRef.current.rotation.y = t;
            objRef.current.position.y = Math.sin(t * 2) * 0.2 + 0.5;
        }
    });

    return (
        <group position={[0, -1, 0]}>
            {/* Base */}
            <Cylinder args={[1.5, 1.8, 0.5, 32]} position={[0, -0.25, 0]}>
                <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
            </Cylinder>
            <Cylinder args={[1.2, 1.2, 0.1, 32]} position={[0, 0.05, 0]}>
                <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
            </Cylinder>
            
            {/* Light beam */}
            <Cylinder args={[1.2, 0.1, 4, 32]} position={[0, 2, 0]} opacity={0.15} transparent>
                <meshBasicMaterial color="#0ea5e9" transparent opacity={0.15} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
            </Cylinder>

            {/* Floating Object */}
            <IcosahedronComponent ref={objRef} />
        </group>
    );
}

const IcosahedronComponent = forwardRef((props, ref) => (
    <mesh ref={ref} {...props}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#0ea5e9" wireframe emissive="#0ea5e9" emissiveIntensity={0.5} />
    </mesh>
));

// 2. Glassmorphic Card
function GlassCard() {
    const cardRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if(cardRef.current) {
            // Rotates slightly based on mouse position (simulated here with time for continuous demo)
            cardRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
            cardRef.current.rotation.y = Math.cos(t * 0.5) * 0.2;
            cardRef.current.position.y = Math.sin(t) * 0.1;
        }
    });

    return (
        <group ref={cardRef}>
            <RoundedBox args={[3, 4, 0.1]} radius={0.2} smoothness={4}>
                <meshPhysicalMaterial 
                    color="#ffffff" 
                    transmission={1} 
                    opacity={1} 
                    metalness={0} 
                    roughness={0.1} 
                    ior={1.5} 
                    thickness={0.5} 
                    transparent
                />
            </RoundedBox>
            <Text position={[0, 1, 0.15]} fontSize={0.4} color="white" anchorX="center" anchorY="middle">
                GLASS
            </Text>
            <Text position={[0, 0, 0.15]} fontSize={0.2} color="#cbd5e1" anchorX="center" anchorY="middle" maxWidth={2.5} textAlign="center">
                Efecto de cristal 3D físico que refracta el entorno
            </Text>
            {/* Floating abstract object behind */}
            <Sphere args={[0.8, 32, 32]} position={[1, -1, -1.5]}>
                <meshStandardMaterial color="#a855f7" />
            </Sphere>
            <Sphere args={[0.5, 32, 32]} position={[-1, 1, -1]}>
                <meshStandardMaterial color="#38bdf8" />
            </Sphere>
        </group>
    );
}

// 3. Interactive Portal
function Portal() {
    const portalRef = useRef();

    useFrame((state) => {
        if(portalRef.current) {
            portalRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
        }
    });

    return (
        <group ref={portalRef}>
            <RoundedBox args={[3.5, 4.5, 0.1]} radius={0.2}>
                <MeshPortalMaterial side={THREE.DoubleSide}>
                    <ambientLight intensity={1} />
                    <Environment preset="night" />
                    <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                        <TorusKnot args={[1, 0.3, 128, 32]} position={[0, 0, -2]}>
                            <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0.2} />
                        </TorusKnot>
                    </Float>
                    <color attach="background" args={['#0f172a']} />
                </MeshPortalMaterial>
            </RoundedBox>
            {/* Frame */}
            <RoundedBox args={[3.7, 4.7, 0.05]} position={[0, 0, -0.05]} radius={0.2}>
                <meshStandardMaterial color="#334155" metalness={0.8} />
            </RoundedBox>
        </group>
    );
}

export default function EffectsContainers3D() {
    return (
        <div className="glass-container mt-16 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-purple-400 border-b border-white/10 pb-4">Contenedores 3D Interactivos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Hologram Display */}
                <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10 flex flex-col">
                    <div className="h-[400px] relative">
                        <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} intensity={1} />
                            <Hologram />
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-white/10">
                        <h3 className="text-xl font-bold text-sky-400">Display Holográfico</h3>
                        <p className="text-sm text-gray-400 mt-2">Perfecto para destacar productos o logos importantes con volumetría.</p>
                    </div>
                </div>

                {/* Glass Card */}
                <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10 flex flex-col">
                    <div className="h-[400px] relative">
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                            <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                            <GlassCard />
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-white/10">
                        <h3 className="text-xl font-bold text-sky-400">Glassmorphic 3D Card</h3>
                        <p className="text-sm text-gray-400 mt-2">Física real de refracción de cristal sobre objetos 3D. Altamente elegante.</p>
                    </div>
                </div>

                {/* Portal */}
                <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10 flex flex-col">
                    <div className="h-[400px] relative">
                        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 5, 5]} intensity={1} />
                            <Suspense fallback={null}>
                                <Portal />
                                <CameraControls makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2.5} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="p-4 border-t border-white/10">
                        <h3 className="text-xl font-bold text-sky-400">Portal Interactivo (Arrastra)</h3>
                        <p className="text-sm text-gray-400 mt-2">Usa MeshPortalMaterial. Clic y arrastra para ver dentro de otra dimensión.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
