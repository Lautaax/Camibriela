import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Film, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const coreServices = [
  {
    id: 'strategy',
    title: "Estrategia de Marca",
    tagline: "El mapa para dominar tu nicho.",
    icon: Compass,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    shadow: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    bullet: "border-purple-500 text-purple-400",
    details: [
      "Posicionamiento y narrativa de marca premium.",
      "Análisis profundo de mercado y competencia.",
      "Plan de contenidos mensual y embudos de conversión.",
      "Identidad y curaduría estética exclusiva."
    ],
    description: "Definimos la esencia de tu marca y trazamos una ruta estratégica personalizada para captar clientes ideales de forma orgánica."
  },
  {
    id: 'content',
    title: "Creación de Contenido",
    tagline: "Estética cinematográfica y viral.",
    icon: Film,
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
    shadow: "shadow-[0_0_50px_rgba(236,72,153,0.15)]",
    bullet: "border-pink-500 text-pink-400",
    details: [
      "Producción de video cinematográfico en formato vertical.",
      "Fotografía de estilo de vida y editorial premium.",
      "Guiones optimizados para retención y engagement.",
      "Edición de video avanzada y selección de audio viral."
    ],
    description: "Producimos piezas audiovisuales de la más alta calidad que educan, entretienen y convierten espectadores en embajadores de marca."
  },
  {
    id: 'social',
    title: "Gestión de Redes",
    tagline: "Crecimiento de comunidad unificada.",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    bullet: "border-blue-500 text-blue-400",
    details: [
      "Administración y publicación activa diaria.",
      "Estrategia de crecimiento orgánico acelerado.",
      "Moderación de comentarios y atención de leads en DM.",
      "Reportes de métricas mensuales y optimización."
    ],
    description: "Nos encargamos de todo el ecosistema digital de tu marca para que puedas enfocarte puramente en operar tu negocio."
  }
];

export default function InteractiveServices() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-dark-bg transition-colors duration-500">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-vibrant/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-3"
          >
            Servicios Principales
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4"
          >
            Nuestros Pilares <br /><span className="text-adaptive-muted">de Crecimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-adaptive-muted max-w-2xl mx-auto text-base"
          >
            Metodologías probadas dirigidas por Camila Briela para posicionar, profesionalizar y monetizar marcas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative glass-card p-8 md:p-10 rounded-[40px] flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 border-white/5 bg-gradient-to-tr ${service.color} ${isHovered ? service.shadow : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -8 }}
              >
                {/* Visual Glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-brand-purple" />
                    </div>
                    <motion.div 
                      animate={{ x: isHovered ? 5 : 0 }}
                      className="text-brand-purple opacity-40 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-adaptive-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-purple font-display text-sm font-semibold tracking-wide mb-4">
                    {service.tagline}
                  </p>
                  
                  <p className="text-adaptive-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Details Section */}
                <div className="mt-4 border-t border-white/5 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-adaptive-primary mb-4">¿Qué incluye?</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-adaptive-muted">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
