import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PaymentGateway3D from '../components/PaymentGateway3D';
import EffectsContainers3D from '../components/EffectsContainers3D';
import Backgrounds3DGallery from '../components/Backgrounds3DGallery';
import { buttons, effects, titleEffects } from '../../gallery-data';

gsap.registerPlugin(ScrollTrigger);

function GallerySection({ title, data, type }) {
  return (
    <div className="glass-container mt-16 mb-8">
      <h2 className="text-3xl font-bold mb-8 text-sky-400 border-b border-white/10 pb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors group">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">{item.name}</h4>
            <div className="flex-grow flex items-center justify-center min-h-[100px] component-preview">
              <div dangerouslySetInnerHTML={{ __html: item.html }} />
            </div>
            {/* Si quieres mostrar el botón de copiar en el futuro, podrías agregarlo aquí */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EffectsLab() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.glass-container').forEach((container) => {
        gsap.from(container, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center my-8 sm:my-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold main-title mb-6">Laboratorio 3D & Componentes</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explora la pasarela de pagos 3D y la galería completa de componentes UI interactivos.</p>
      </header>
      
      {/* Pasarela de Pagos 3D */}
      <div className="glass-container text-center py-10">
         <h2 className="text-3xl font-bold text-sky-400 mb-8">Pasarela de Pagos 3D (React-Three-Fiber)</h2>
         <PaymentGateway3D />
      </div>

      {/* Nuevos Contenedores y Fondos 3D */}
      <EffectsContainers3D />
      <Backgrounds3DGallery />

      {/* Galerías */}
      <GallerySection title="Botones Interactivos" data={buttons} />
      <GallerySection title="Efectos Visuales y Tarjetas" data={effects} />
      <GallerySection title="Efectos de Títulos" data={titleEffects} />

    </div>
  );
}
