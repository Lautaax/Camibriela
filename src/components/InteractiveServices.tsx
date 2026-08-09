import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Film, Users, ArrowRight, CheckCircle2, X, TrendingUp, Sparkles, ChevronDown, MessageCircle } from 'lucide-react';

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
    metrics: [
      { label: "Engagement Promedio", value: "+180%" },
      { label: "ROI Promedio", value: "3.5x" },
      { label: "Crecimiento Orgánico", value: "+120%" },
    ],
    details: [
      "Posicionamiento y narrativa de marca premium.",
      "Análisis profundo de mercado y competencia.",
      "Plan de contenidos mensual y embudos de conversión.",
      "Identidad y curaduría estética exclusiva."
    ],
    extendedInfo: "Desarrollamos la arquitectura completa de tu marca digital: desde la arquetipificación del cliente ideal hasta la grilla estratégica de publicaciones enfocada en convertir audiencia tibia en compradores fieles.",
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
    metrics: [
      { label: "Views en Reels", value: "4.5M+" },
      { label: "Retención de Video", value: "85%" },
      { label: "Alcance en No Seguidores", value: "+250%" },
    ],
    details: [
      "Producción de video cinematográfico en formato vertical.",
      "Fotografía de estilo de vida y editorial premium.",
      "Guiones optimizados para retención y engagement.",
      "Edición de video avanzada y selección de audio viral."
    ],
    extendedInfo: "Llevamos la producción audiovisual de tu negocio al estándar de marcas internacionales. Rodaje profesional, iluminación, edición dinámica con ganchos de alta retención y selección de música en tendencia.",
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
    metrics: [
      { label: "Conversión DM a Ventas", value: "+350%" },
      { label: "Tiempo de Respuesta", value: "<15 min" },
      { label: "Nuevos Leads Mensuales", value: "+2.5K" },
    ],
    details: [
      "Administración y publicación activa diaria.",
      "Estrategia de crecimiento orgánico acelerado.",
      "Moderación de comentarios y atención de leads en DM.",
      "Reportes de métricas mensuales y optimización."
    ],
    extendedInfo: "Nos encargamos de todo el ecosistema digital de tu marca para que puedas enfocarte puramente en operar tu negocio mientras tu comunidad crece y convierte a diario.",
    description: "Nos encargamos de todo el ecosistema digital de tu marca para que puedas enfocarte puramente en operar tu negocio."
  }
];

export default function InteractiveServices() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<typeof coreServices[0] | null>(null);

  return (
    <section id="servicios-principales" className="py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-dark-bg transition-colors duration-500">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-vibrant/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-3 text-xs sm:text-sm"
          >
            Servicios Principales (Hacé click para desplegar métricas)
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-4"
          >
            Nuestros Pilares <br /><span className="text-adaptive-muted">de Crecimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-adaptive-muted max-w-2xl mx-auto text-sm sm:text-base"
          >
            Hacé click sobre cualquier pilar para ver métricas de impacto, entregables y solicitar tu auditoría.
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
                onClick={() => setSelectedService(service)}
                className={`group relative glass-card p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 border-white/10 bg-gradient-to-tr ${service.color} ${isHovered ? service.shadow : ''} hover:border-brand-purple/50`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Visual Glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all duration-500">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-brand-purple" />
                    </div>
                    <div className="flex items-center gap-2 text-brand-purple opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Ver métricas</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-adaptive-primary mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-brand-purple font-display text-xs sm:text-sm font-semibold tracking-wide mb-4">
                    {service.tagline}
                  </p>
                  
                  <p className="text-adaptive-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {service.metrics.map((m, i) => (
                      <div key={i} className="bg-black/30 border border-white/10 rounded-xl p-2 text-center">
                        <div className="text-sm font-extrabold text-amber-400">{m.value}</div>
                        <div className="text-[10px] text-white/50 leading-none mt-1 font-sans line-clamp-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="mt-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-adaptive-primary mb-3">
                    <span>¿Qué incluye?</span>
                    <span className="text-brand-purple text-[11px] font-normal flex items-center gap-1">
                      Expandir <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-adaptive-muted">
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

      {/* Expanded Modal for Detailed Service Metrics */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card w-full max-w-2xl bg-[#0f0f16] border-brand-purple/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">Servicio Expandido</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {selectedService.extendedInfo}
              </p>

              {/* Metrics Grid */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-brand-purple/20 to-brand-vibrant/20 border border-brand-purple/30">
                <h4 className="text-xs uppercase font-bold text-amber-300 tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Métricas Promedio de Impacto
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedService.metrics.map((m, idx) => (
                    <div key={idx} className="bg-black/40 p-3 rounded-xl border border-white/10 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-white">{m.value}</div>
                      <div className="text-[11px] text-white/60 font-medium mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-bold text-white/80 tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-purple" /> Todos los Entregables Incluidos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/542915207457?text=${encodeURIComponent(`Hola! Me interesa conocer más sobre el servicio de ${selectedService.title}. Quiero solicitar una propuesta y auditoría.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-green-950/40 min-h-[48px] active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar Auditoría para {selectedService.title}</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

