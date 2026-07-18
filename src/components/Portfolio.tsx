import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 6,
    title: "Estrategia Viral: @camilabriela",
    category: "Viral Storytelling",
    description: "Desarrollo y ejecución de un formato viral de alta retención. Optimizamos el alcance orgánico mediante el uso de ganchos (hooks) visuales y auditivos de tendencia y edición cinematográfica de alto impacto. El post superó las expectativas del algoritmo alcanzando millones de cuentas no seguidoras de forma 100% orgánica.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    tags: ["Viral Post", "Algorithm Strategy", "High Engagement"],
    website: "https://www.instagram.com/p/DVwwDTyEfPI/?igsh=aDEwMGF4ZGJsNHh6",
    metrics: { growth: "+210% Guardados", reach: "1.8M Views" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1529139513055-07f909ef3d5c?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "El método de narrativa de este post específico generó un pico masivo de nuevos seguidores altamente fidelizados e interesados en nuestros servicios.",
      author: "Camila Briela Agency",
      role: "Internal Case"
    }
  },
  {
    id: 1,
    title: "Personal Brand: Camila B.",
    category: "Branding & Social Strategy",
    description: "Redefinimos la identidad digital de Camila Briela, enfocándonos en un storytelling auténtico y una estética minimalista-lujosa. El resultado fue un incremento del 65% en el engagement orgánico durante el primer trimestre.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    tags: ["Personal Branding", "Strategy", "Aesthetic"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+65%", reach: "1.2M" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "El enfoque estratégico de la agencia permitió que mi marca personal finalmente reflejara mis valores reales.",
      author: "C. Briela",
      role: "Influencer"
    }
  },
  {
    id: 2,
    title: "Urban Fashion Editorial",
    category: "Content Production",
    description: "Producción integral de sesiones fotográficas y video para campañas de moda urbana. Logramos posicionar las piezas de contenido en la sección 'Explora' de Instagram de forma recurrente.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    tags: ["Photography", "Fashion", "Art Direction"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+140%", reach: "850k" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539109132314-3477524c859c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1529139513055-07f909ef3d5c?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "Calidad cinematográfica aplicada a redes sociales. Superaron todas nuestras expectativas de producción.",
      author: "Vogue Creative Lab",
      role: "Editorial Partner"
    }
  },
  {
    id: 3,
    title: "Lifestyle Curator",
    category: "Influencer Management",
    description: "Gestión estratégica de alianzas con marcas premium de lifestyle. Curaduría de contenido que mantiene la esencia personal mientras integra productos de forma nativa y efectiva.",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=80&w=800",
    tags: ["Partnerships", "Lifestyle", "Content Creation"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "x3 ROI", reach: "2.4M" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 4,
    title: "Reels Viral Strategy",
    category: "Video Marketing",
    description: "Desarrollo de guiones y edición dinámica para Reels altamente compartibles. Logramos hitos de visualizaciones que superaron los 5 millones, expandiendo el alcance global del perfil.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
    tags: ["Virality", "Video Editing", "IG Reels"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+5M Views", reach: "3.2M" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1470252649358-96f3cf5f2f7e?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 5,
    title: "Estética Editorial",
    category: "Creative Direction",
    description: "Inspirado en tendencias globales, desarrollamos una narrativa visual que eleva la marca a un estatus aspiracional. Curaduría minuciosa de cada pieza de contenido.",
    image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775ff?auto=format&fit=crop&q=80&w=800",
    tags: ["Curaduría", "Global Trends", "Luxury"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+95%", reach: "4.1M" },
    imageCarousel: [
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      text: "La capacidad de Camila para captar la esencia de una marca y elevarla visualmente es incomparable en la industria actual.",
      author: "Marta R.",
      role: "Luxury Brand Manager"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-10 left-10 right-10">
        <p className="text-brand-purple text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {project.category}
        </p>
        <h3 className="text-3xl font-display font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {project.title}
        </h3>
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
