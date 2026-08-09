import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 101,
    title: "Lucciano's Il Gelato",
    category: "Branding & High-Impact Content",
    description: "Estrategia de contenido visual, Reels virales y campañas estéticas de alto valor para Lucciano's, la prestigiosa cadena de helados artesanales de Argentina. Potenciamos la experiencia visual de sus icónicos 'Pops' y aperturas de tiendas temáticas, elevando el alcance orgánico a millones de clientes.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
    tags: ["Lucciano's", "Heladería Argentina", "Content Creation", "Reels Virales"],
    website: "https://www.luccianos.net",
    metrics: { growth: "+180% Engagement", reach: "4.5M Views" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "La calidad visual de la producción de contenidos elevó nuestras campañas a un nivel internacional sensacional.",
      author: "Lucciano's Argentina",
      role: "Heladería Artesanal"
    }
  },
  {
    id: 102,
    title: "Big Six (Bahía Blanca)",
    category: "Social Media & Community Growth",
    description: "Estrategia gastronómica integral y gestión de redes para Big Six en Bahía Blanca. Diseñamos dinámicas de Reels con alto nivel de antojo (food porn), contenido local de tendencia y campañas geolocalizadas que dispararon el volumen de ventas e interacciones en locales y delivery.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    tags: ["Big Six", "Bahía Blanca", "Gastronomía", "Social Ads"],
    website: "https://www.instagram.com/bigsix.bb",
    metrics: { growth: "+250% Pedidos", reach: "950K Local" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "Camila Briela Agency se convirtió en un aliado clave en Bahía Blanca. La respuesta del público fue inmediata.",
      author: "Big Six",
      role: "Bahía Blanca, Argentina"
    }
  },
  {
    id: 103,
    title: "ByFy App (Movilidad)",
    category: "App Growth & Performance Marketing",
    description: "Campañas de adquisición de usuarios (User Acquisition) y posicionamiento para ByFy, la innovadora aplicación de movilidad urbana (estilo Uber). Desarrollamos creativos orientados a la conversión de descargas, fidelización de conductores y campañas masivas de presencia digital.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    tags: ["ByFy App", "Movilidad Urbana", "Performance", "User Acquisition"],
    website: "https://byfy.com.ar",
    metrics: { growth: "+350% Descargas", reach: "2.1M Impresiones" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "Transformaron nuestra estrategia de adquisición para ByFy. El costo por descarga bajó radicalmente mientras escalamos el volumen de viajes.",
      author: "Equipo ByFy",
      role: "Movilidad & Traslados"
    }
  },
  {
    id: 104,
    title: "Tampicos (Bahía Blanca)",
    category: "Branding & Social Media Gastronómico",
    description: "Estrategia integral de contenidos y posicionamiento de marca para Tampicos, la icónica panchería de Bahía Blanca. Creamos videos de alto impacto visual, campañas de antojo instantáneo (food porn) y promociones dinámicas para potenciar las ventas en local y take-away.",
    image: "https://images.unsplash.com/photo-1627286121406-039c2980c541?auto=format&fit=crop&q=80&w=800",
    tags: ["Tampicos", "Bahía Blanca", "Panchería", "Social Media", "Reels"],
    website: "https://www.instagram.com/tampicos.bb",
    metrics: { growth: "+200% Alcance Local", reach: "750K Views" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1627286121406-039c2980c541?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "El equipo captó perfectamente el espíritu festivo y sabroso de Tampicos. La interacción en redes se multiplicó de inmediato.",
      author: "Tampicos Panchería",
      role: "Bahía Blanca, Argentina"
    }
  },
  {
    id: 105,
    title: "Fiesta Nacional de la Confluencia",
    category: "Coordinación & Cobertura de Eventos Masivos",
    description: "Cobertura integral de contenido audiovisual en vivo, historias en tiempo real y producción de Reels virales para la Fiesta Nacional de la Confluencia en Neuquén. Capturamos la energía de cientos de miles de espectadores, shows principales y backstages de artistas de primer nivel.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    tags: ["Fiesta de la Confluencia", "Neuquén", "Eventos Masivos", "Cobertura en Vivo", "Reels"],
    website: "https://www.instagram.com",
    metrics: { growth: "+400% Alcance Festival", reach: "5.2M Views" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "La velocidad de edición en vivo y la calidad cinematográfica del contenido durante la Confluencia fueron sencillamente impactantes.",
      author: "Prensa & Cobertura",
      role: "Fiesta de la Confluencia, Neuquén"
    }
  },
  {
    id: 106,
    title: "Recital: Luck Ra y Q' Lokura",
    category: "Live Shows & Music Content Strategy",
    description: "Producción audiovisual de alto impacto, cobertura tras bambalinas y dinámicas de contenido de tendencia durante el show en vivo de Luck Ra y Q' Lokura. Registramos el fervor del público y momentos cúlmine del recital para generar Reels y TikToks de alcance viral instantáneo.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800",
    tags: ["Luck Ra", "Q' Lokura", "Recital en Vivo", "Cuarteto", "Backstage"],
    website: "https://www.instagram.com",
    metrics: { growth: "+320% Interaction", reach: "3.8M Views" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "El ritmo del material grabado durante el show capturó la fiesta del cuarteto en su máxima expresión viral.",
      author: "Producción de Shows",
      role: "Recitales en Vivo"
    }
  },
  {
    id: 107,
    title: "Pituca Pastelería Artesanal",
    category: "Gastronomía, Aperturas & Reels Virales",
    description: "Estrategia integral de contenidos, comunicación de nuevas aperturas de locales (Villa Urquiza, Monroe y Costa Atlántica) y producción de Reels virales para Pituca Pastelería Artesanal ®. Capturamos la artesanía gastronómica, historias detrás de escena del equipo y tentadores primeros planos de sus productos para afianzar una comunidad de más de 10.4K seguidores hiper-fidelizados.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    tags: ["Pituca Pastelería", "Villa Urquiza", "Pastelería Artesanal", "Aperturas de Locales", "Reels Virales"],
    website: "https://linktr.ee/pitucapasteleria",
    metrics: { growth: "10.4K+ Comunidad", reach: "1.2M Views Reels" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "La estrategia de Reels y la cobertura de la apertura de nuestros nuevos locales transmitió la calidez de Pituca tal como la soñábamos. La respuesta de la gente fue inmediata.",
      author: "Pituca Pastelería",
      role: "Villa Urquiza, CABA"
    }
  }
];

function ProjectCard({ project, index, onSelect }: { project: any, index: number, onSelect: (id: number) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layoutId={project.id.toString()}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(project.id)}
      className="group relative h-[400px] overflow-hidden rounded-[40px] cursor-pointer bg-white/5 border border-white/5 hover:border-brand-purple/30 transition-colors"
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-gradient-to-br from-brand-purple/10 to-brand-vibrant/20 animate-pulse flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 absolute blur-md animate-ping" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-vibrant flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-dark-bg transition-colors duration-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <img 
        src={project.image} 
        alt={project.title}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 sm:opacity-60 sm:group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
        <p className="text-brand-purple text-[11px] sm:text-xs uppercase tracking-widest font-bold mb-1.5 sm:mb-2 transform translate-y-0 sm:translate-y-4 opacity-100 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
          {project.category}
        </p>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-500 delay-75 leading-tight">
          {project.title}
        </h3>
        <p className="text-xs text-white/70 mt-1 sm:hidden flex items-center gap-1 font-medium">
          <span>Ver caso completo</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-purple" />
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedProject = projects.find(p => p.id === selectedId);

  const nextSlide = () => {
    if (selectedProject?.imageCarousel) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.imageCarousel.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject?.imageCarousel) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.imageCarousel.length) % selectedProject.imageCarousel.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 px-6 relative bg-dark-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-2"
            >
              Casos de Éxito
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              Proyectos que hablan por nosotros
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={(id) => {
              setSelectedId(id);
              setCurrentSlide(0);
            }} />
          ))}
        </div>
      </div>

      {/* Modal / Detailed View */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
            />
            
            <motion.div 
              layoutId={selectedId.toString()}
              className="relative w-full max-w-6xl bg-dark-surface rounded-[40px] overflow-y-auto max-h-[90vh] border border-white/10 flex flex-col md:flex-row shadow-2xl no-scrollbar"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-brand-purple transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden relative group/carousel">
                {selectedProject.imageCarousel ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentSlide}
                        src={selectedProject.imageCarousel[currentSlide]} 
                        alt={`${selectedProject.title} ${currentSlide + 1}`} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-20">
                      {selectedProject.imageCarousel.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-brand-purple' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={prevSlide}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-brand-purple"
                    >
                      <ChevronRight className="w-6 h-6 rotate-180 text-white" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-brand-purple"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col no-scrollbar">
                <p className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4">
                  {selectedProject.category}
                </p>
                <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-adaptive-primary">
                  {selectedProject.title}
                </h3>
                <p className="text-adaptive-muted text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                     <p className="text-[10px] uppercase font-bold text-brand-purple mb-1">Métrica Clave</p>
                     <p className="text-2xl font-bold text-adaptive-primary">{selectedProject.metrics?.growth || '+120%'}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                     <p className="text-[10px] uppercase font-bold text-brand-purple mb-1">Alcance</p>
                     <p className="text-2xl font-bold text-adaptive-primary">{selectedProject.metrics?.reach || '500k+'}</p>
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 p-6 rounded-3xl bg-brand-purple/5 border border-brand-purple/10 relative italic text-adaptive-muted"
                  >
                    <div className="absolute -top-3 left-6 px-3 bg-dark-surface text-brand-purple text-[10px] font-black uppercase tracking-tighter">
                      Testimonio
                    </div>
                    <p className="mb-4">"{selectedProject.testimonial.text}"</p>
                    <div className="flex items-center gap-3 not-italic">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center text-xs font-bold text-brand-purple">
                        {selectedProject.testimonial.author[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-adaptive-primary">{selectedProject.testimonial.author}</p>
                        <p className="text-[10px] text-adaptive-muted">{selectedProject.testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-adaptive-muted">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all transform hover:-translate-y-1 w-full justify-center sm:w-auto"
                    style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
                  >
                    Visitar Proyecto <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
