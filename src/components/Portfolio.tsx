import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Personal Brand: Camila B.",
    category: "Branding & Social Strategy",
    description: "Redefinimos la identidad digital de Camila Briela, enfocándonos en un storytelling auténtico y una estética minimalista-lujosa. El resultado fue un incremento del 65% en el engagement orgánico durante el primer trimestre.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    tags: ["Personal Branding", "Strategy", "Aesthetic"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+65%", reach: "1.2M" }
  },
  {
    id: 2,
    title: "Urban Fashion Editorial",
    category: "Content Production",
    description: "Producción integral de sesiones fotográficas y video para campañas de moda urbana. Logramos posicionar las piezas de contenido en la sección 'Explora' de Instagram de forma recurrente.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    tags: ["Photography", "Fashion", "Art Direction"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+140%", reach: "850k" }
  },
  {
    id: 3,
    title: "Lifestyle Curator",
    category: "Influencer Management",
    description: "Gestión estratégica de alianzas con marcas premium de lifestyle. Curaduría de contenido que mantiene la esencia personal mientras integra productos de forma nativa y efectiva.",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&q=80&w=800",
    tags: ["Partnerships", "Lifestyle", "Content Creation"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "x3 ROI", reach: "2.4M" }
  },
  {
    id: 4,
    title: "Reels Viral Strategy",
    category: "Video Marketing",
    description: "Desarrollo de guiones y edición dinámica para Reels altamente compartibles. Logramos hitos de visualizaciones que superaron los 5 millones, expandiendo el alcance global del perfil.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
    tags: ["Virality", "Video Editing", "IG Reels"],
    website: "https://instagram.com/camilabriela",
    metrics: { growth: "+5M Views", reach: "3.2M" }
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
      className="group relative h-[400px] overflow-hidden rounded-[40px] cursor-pointer bg-white/5"
    >
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" 
          />
        )}
      </AnimatePresence>
      
      <img 
        src={project.image} 
        alt={project.title}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-10 left-10 right-10">
        <p className="text-brand-purple text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {project.category}
        </p>
        <h3 className="text-3xl font-display font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 px-6 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelectedId} />
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
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            />
            
            <motion.div 
              layoutId={selectedId.toString()}
              className="relative w-full max-w-5xl bg-dark-surface rounded-[40px] overflow-y-auto max-h-[90vh] border border-white/10 flex flex-col md:flex-row shadow-2xl no-scrollbar"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-brand-purple transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                <p className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4">
                  {selectedProject.category}
                </p>
                <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 min-w-[120px]">
                     <p className="text-[10px] uppercase font-bold text-brand-purple">Métrica Clave</p>
                     <p className="text-xl font-bold">{selectedProject.metrics?.growth || '+120%'}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 min-w-[120px]">
                     <p className="text-[10px] uppercase font-bold text-brand-purple">Alcance</p>
                     <p className="text-xl font-bold">{selectedProject.metrics?.reach || '500k+'}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/50">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all transform hover:-translate-y-1"
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
