import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificationsData } from '../../gallery-data';
import { projectsData, experienceData, techSkills } from '../portfolio-data';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });

      // Sections Animations
      gsap.utils.toArray('.glass-container').forEach((container) => {
        gsap.from(container, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 mb-20">
        <div className="hero-content relative z-10 bg-black/40 p-8 sm:p-12 rounded-3xl backdrop-blur-md border border-white/10 max-w-4xl w-full mx-auto mt-16 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
          <img 
            className="w-48 h-auto rounded-3xl mx-auto mb-6 border-4 border-sky-400 object-contain shadow-lg bg-gray-800 pointer-events-auto" 
            src="https://raw.githubusercontent.com/CAMILOSANCHEZDEVELOPER/GAME-JAMES-BOND-EN-EL-ESPACIO/main/camilo.png" 
            alt="Foto de perfil de Camilo" 
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold main-title pointer-events-auto">Camilo Andres Serrano Sanchez</h1>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto pointer-events-auto">Desarrollador Full-Stack y Analista de Datos apasionado por construir soluciones tecnológicas y extraer valor de la información.</p>
          
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3 text-gray-300 pointer-events-auto">
            <a href="mailto:camilosanchezme@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-envelope text-sky-400"></i>
                camilosanchezme@gmail.com
            </a>
            <a href="https://wa.me/573209415494" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <i className="fab fa-whatsapp text-green-400"></i>
                +57 3209415494
                <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">¡Escríbeme!</span>
            </a>
            <div className="hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-calendar-alt text-purple-400"></i>
                28 años (Nacido en 1997)
            </div>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <i className="fas fa-download text-sky-400"></i>
                Descargar CV
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Proyectos Destacados */}
        <div className="glass-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center section-title">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projectsData.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noreferrer" className="project-card p-6 rounded-lg block hover:no-underline">
                        <h3 className="text-xl font-bold text-sky-400">{project.title}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>

        {/* Experiencia */}
        <div className="glass-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center section-title">Experiencia Laboral</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
                {experienceData.map((exp, index) => (
                    <div key={index} className="experience-card p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <h3 className="text-xl font-bold text-sky-400">{exp.role}</h3>
                            <span className="text-sm text-gray-400">{exp.date}</span>
                        </div>
                        <p className="text-lg font-semibold text-white">{exp.company}</p>
                        <p className="text-gray-300 mt-2">{exp.description}</p>
                        {exp.contact && <p className="text-sm text-purple-400 mt-4 italic">{exp.contact}</p>}
                    </div>
                ))}
            </div>
        </div>

      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-32 space-y-16">
        {/* Educación Formal */}
        <div className="glass-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center section-title">Educación Formal</h2>
            <div className="max-w-2xl mx-auto space-y-6 border-l-2 border-purple-500/50 pl-6 relative">
                <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                    <h4 className="text-xl font-bold text-sky-400">Ingeniería de Sistemas (En curso)</h4>
                    <p className="text-md font-semibold text-white">CUN (Corporación Unificada Nacional de Educación Superior)</p>
                    <p className="text-gray-300 mt-1">Actualmente en 4º semestre.</p>
                    <ul className="list-disc list-inside text-gray-400 mt-2 text-sm space-y-1">
                        <li>Al finalizar 4º semestre: Técnico en Soporte de Sistemas.</li>
                        <li>Al finalizar 7º semestre: Tecnólogo en Desarrollo de Software.</li>
                        <li>Al finalizar 10º semestre: Ingeniero de Sistemas.</li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                    <h4 className="text-xl font-bold text-sky-400">Bachiller Académico</h4>
                    <p className="text-md font-semibold text-white">Colegio Colombo Irlandés</p>
                    <p className="text-sm text-gray-400">Graduado en 2015</p>
                </div>
                <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
                    <h4 className="text-xl font-bold text-pink-400">Intereses Futuros</h4>
                    <p className="text-gray-300 mt-1">Tengo un gran interés en realizar una especialización en Inteligencia Artificial al finalizar mi carrera.</p>
                </div>
            </div>
        </div>

        {/* Certificaciones */}
        <div className="glass-container">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center section-title">Certificados Destacados</h2>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificationsData.map((cert, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                            <h4 className="text-lg font-bold text-sky-400">{cert.title}</h4>
                            <div className="flex justify-between items-center mt-3 border-t border-white/10 pt-2">
                                <span className="text-gray-300 text-sm"><i className="fas fa-building mr-1"></i>{cert.issuer}</span>
                                <span className="text-xs text-purple-400 font-mono font-semibold bg-purple-500/10 px-2 py-1 rounded">Exp: {cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Tecnologías */}
        <div className="glass-container">
             <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center section-title">Tecnologías y Normas</h2>
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                 {techSkills.map((tech, index) => (
                     <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                         <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
                             <i className="fas fa-layer-group"></i> {tech.category}
                         </h3>
                         <div className="flex flex-wrap gap-2">
                             {tech.skills.map((skill, sIdx) => (
                                 <span key={sIdx} className="bg-gray-800/80 border border-purple-500/30 text-gray-200 font-medium py-1.5 px-3 rounded-lg hover:bg-purple-500/40 hover:border-purple-400 transition-colors shadow-sm">
                                     {skill}
                                 </span>
                             ))}
                         </div>
                     </div>
                 ))}
             </div>
        </div>
      </section>
    </div>
  );
}
