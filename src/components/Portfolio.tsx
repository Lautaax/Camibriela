import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoFashion Brand",
    category: "Gestión de Redes & Contenido",
    description: "Desarrollamos una estrategia integral de contenido enfocada en la sostenibilidad, logrando un crecimiento orgánico del 40% en 3 meses y una identidad visual coherente y aspiracional.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    tags: ["Storytelling", "Instagram Growth", "Sustainability"],
    website: "https://example.com"
  },
  {
    id: 2,
    title: "Tech Startup",
    category: "Estrategia Digital & Ads",
    description: "Lanzamiento de marca disruptiva en el sector IT. Implementamos campañas de captación de leads en LinkedIn y Google Ads con un ROI superior al 300%.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    tags: ["Lead Gen", "Performance", "IT Sector"],
    website: "https://example.com"
  },
  {
    id: 3,
    title: "Gourmet Restaurant",
    category: "Diseño Web & Branding",
    description: "Rediseño de identidad visual y desarrollo de landing page con sistema de reservas integrado. La experiencia de usuario mejoró significativamente el tiempo de permanencia en el sitio.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI", "Restaurant Culture", "Local SEO"],
    website: "https://example.com"
  },
  {
    id: 4,
    title: "Fitness Coach",
    category: "Personal Branding",
    description: "Posicionamiento de marca personal a través de TikTok y Reels. Creación de infoproductos y automatización de embudos de venta.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    tags: ["Content Strategy", "Video Marketing", "Passive Income"],
    website: "https://example.com"
  }
];

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className="group relative h-[400px] overflow-hidden rounded-[40px] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          ))}
        </div>
      </div>

      {/* Modal / Detailed View */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={selectedId.toString()}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-5xl bg-dark-surface rounded-[40px] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl"
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
