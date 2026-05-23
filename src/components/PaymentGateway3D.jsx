import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function CreditCard3D({ name, number, expiry, isFlipped, cvv }) {
  const group = useRef();
  
  useFrame((state, delta) => {
    // Animate rotation based on isFlipped
    const targetRotationY = isFlipped ? Math.PI : 0;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 4, delta);
    
    // Add a slight floating effect
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={group}>
      <RoundedBox args={[3.4, 2.1, 0.05]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#1e1b4b" metalness={0.6} roughness={0.2} />
      </RoundedBox>
      
      {/* Front Side */}
      <group position={[0, 0, 0.026]}>
        {/* Chip */}
        <RoundedBox args={[0.4, 0.3, 0.01]} position={[-1.2, 0.4, 0]} radius={0.05}>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.4} />
        </RoundedBox>
        
        {/* Texts */}
        <Text position={[0, -0.1, 0]} fontSize={0.25} color="white" anchorX="center" font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf" letterSpacing={0.1}>
          {number || '#### #### #### ####'}
        </Text>
        <Text position={[-1.4, -0.7, 0]} fontSize={0.15} color="white" anchorX="left">
          {name || 'NOMBRE COMPLETO'}
        </Text>
        <Text position={[1.4, -0.7, 0]} fontSize={0.15} color="white" anchorX="right">
          {expiry || 'MM/YY'}
        </Text>
      </group>

      {/* Back Side */}
      <group position={[0, 0, -0.026]} rotation={[0, Math.PI, 0]}>
        {/* Magnetic Strip */}
        <mesh position={[0, 0.5, 0]}>
          <planeGeometry args={[3.4, 0.4]} />
          <meshBasicMaterial color="#000" />
        </mesh>
        {/* CVV Box */}
        <mesh position={[0.5, -0.1, 0]}>
          <planeGeometry args={[0.6, 0.2]} />
          <meshBasicMaterial color="#fff" />
        </mesh>
        <Text position={[0.5, -0.1, 0.001]} fontSize={0.12} color="black" anchorX="center">
          {cvv || '***'}
        </Text>
      </group>
    </group>
  );
}

export default function PaymentGateway3D() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
    amount: ''
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'number') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
    } else if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    } else if (name === 'name') {
      formattedValue = value.toUpperCase();
    }
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-900/50 p-6 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-md">
      
      {/* 3D Canvas Container */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] relative">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
          <Suspense fallback={null}>
            <CreditCard3D 
              name={formData.name} 
              number={formData.number} 
              expiry={formData.expiry} 
              cvv={formData.cvv}
              isFlipped={isFlipped}
            />
          </Suspense>
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
        </Canvas>
      </div>

      {/* Form Container */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-sky-400 mb-6">Realizar Pago (Demo)</h3>
        
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Monto a Pagar ($)</label>
            <input 
              type="number" 
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Nombre en la Tarjeta</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="JOHN DOE"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Número de Tarjeta</label>
            <input 
              type="text" 
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400 mb-1">Vencimiento</label>
              <input 
                type="text" 
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(false)}
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-400 mb-1">CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="***"
                maxLength="4"
              />
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold py-4 rounded-lg mt-4 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            Confirmar y Pagar ${formData.amount || '0.00'}
          </button>
        </div>
      </div>
    </div>
  );
}
