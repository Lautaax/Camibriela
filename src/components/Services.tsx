import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Target, PenTool, Share2, LayoutGrid, Megaphone, Monitor, Palette, Briefcase, X, TrendingUp, CheckCircle2, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import React from 'react';

function TiltCard({ children, index, onClick }: { children: React.ReactNode, index: number, onClick?: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXDelayed = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYDelayed = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYDelayed, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXDelayed, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-6 sm:p-8 rounded-3xl group hover:border-brand-purple/50 transition-all duration-500 cursor-pointer flex flex-col justify-between border-white/10 active:scale-98"
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const servicesList = [
    {
      icon: Target,
      title: "Estrategia Digital",
      metric: "+180% Engagement",
      metricDetail: "3.5x Retorno Promedio",
      description: "Analizamos tu mercado y objetivos para trazar el camino más efectivo hacia el éxito de tu marca.",
      extendedInfo: "Auditamos tu embudo de ventas actual, analizamos a la competencia en tu nicho y creamos una hoja de ruta con metas cuantitativas mes a mes.",
      deliverables: [
        "Auditoría técnica de marca 360°",
        "Benchmark de competidores y nicho",
        "Funnel de conversión omnicanal",
        "Planificación táctica trimestral"
      ]
    },
    {
      icon: Share2,
      title: "Gestión de Redes",
      metric: "+350% Interacciones",
      metricDetail: "99% Satisfacción de DM",
      description: "Administración profesional de RRSS (Instagram, TikTok, LinkedIn) para construir comunidad y engagement.",
      extendedInfo: "Nos hacemos cargo de la producción, calendario editorial, moderación diaria e interacción activa con la comunidad para convertir seguidores en compradores.",
      deliverables: [
        "Calendario mensual de publicaciones",
        "Respuesta activa a consultas en DM y comentarios",
        "Estrategia de crecimiento orgánico diario",
        "Reportes mensuales con métricas clave"
      ]
    },
    {
      icon: PenTool,
      title: "Creación de Contenido",
      metric: "4.5M+ Views Reels",
      metricDetail: "85% Retención Promedio",
      description: "Contenido audiovisual y gráfico que impacta y conecta con tu audiencia de manera auténtica.",
      extendedInfo: "Rodajes profesionales con iluminación y audio cinematográfico. Editamos Reels y TikToks de alto ritmo con ganchos pensados para la máxima viralidad.",
      deliverables: [
        "Videos verticales HD para Reels y TikTok",
        "Fotografía de producto y estilo de vida",
        "Guiones optimizados con hooks virales",
        "Edición avanzada con subtítulos dinámicos"
      ]
    },
    {
      icon: LayoutGrid,
      title: "Project Management",
      metric: "100% On-Time",
      metricDetail: "-40% Tiempos de Entrega",
      description: "Coordinamos todas las áreas de tus proyectos digitales para asegurar resultados y tiempos de entrega.",
      extendedInfo: "Coordinación fluida entre diseñadores, editores, media buyers y redactores con tableros de gestión ágil para que tu marca nunca detenga sus lanzamientos.",
      deliverables: [
        "Gestión de proyectos en tiempo real",
        "Supervisión de entregables y calidad",
        "Coordinación de equipos multidisciplinarios",
        "Sprints de lanzamiento para campañas"
      ]
    },
    {
      icon: Palette,
      title: "Diseño Gráfico",
      metric: "Aesthetic Premium",
      metricDetail: "+200% Reconocimiento",
      description: "Identidad visual, branding y piezas gráficas que posicionan tu marca en un nivel superior.",
      extendedInfo: "Diseño de identidad único que destaca en el feed. Creación de sistemas de diseño coherentes para historias, carruseles, papelería y empaques.",
      deliverables: [
        "Brand Guidelines & Manual de Marca",
        "Plantillas editables para historias y feed",
        "Diseño de merchandising y empaques",
        "Piezas gráficas para eventos y banners"
      ]
    },
    {
      icon: Megaphone,
      title: "Publicidad / SEM Ads",
      metric: "3.8x ROAS Promedio",
      metricDetail: "-45% Costo por Lead",
      description: "Campañas pagas optimizadas en Meta Ads y Google Ads para maximizar tu retorno de inversión.",
      extendedInfo: "Campañas orientadas a resultados tangibles. Configuramos píxeles de conversión, testeo A/B constante de creativos y segmentación hiperlocalizada.",
      deliverables: [
        "Campañas de Google Ads (Búsqueda y Display)",
        "Anuncios en Meta (Instagram & Facebook Ads)",
        "Remarketing y retargeting de audiencias calificadas",
        "Dashboard interactivo de rendimiento en tiempo real"
      ]
    },
    {
      icon: Monitor,
      title: "Diseño Web",
      metric: "0.8s Carga Ultra",
      metricDetail: "+120% Conversión Web",
      description: "Landing pages y sitios web modernos que convierten visitantes en clientes reales.",
      extendedInfo: "Desarrollo web optimizado para dispositivos móviles, con velocidad de carga ultra rápida, copywriting enfocado en la conversión y SEO integrado.",
      deliverables: [
        "Sitio web o Landing Page 100% Responsive",
        "Optimización de velocidad y SEO On-Page",
        "Integración con WhatsApp y pasarelas de pago",
        "Formularios de captación de clientes potenciales"
      ]
    },
    {
      icon: Briefcase,
      title: "Copywriting",
      metric: "+240% CTR en Textos",
      metricDetail: "Textos Persuasivos",
      description: "Textos persuasivos y profesionales que cuentan la historia de tu marca y llaman a la acción.",
      extendedInfo: "Escribimos copys potentes para tus publicaciones, anuncios pagados, emails y sitio web que atrapan la atención y empujan al cliente a actuar.",
      deliverables: [
        "Copys para anuncios publicitarios (Ads)",
        "Textos para publicaciones de redes sociales",
        "Redacción de landing pages persuasivas",
        "Email marketing y secuencias de venta"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 relative bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-2 text-xs sm:text-sm"
          >
            Experiencia & Calidad (Hacé click para ver detalles)
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight"
          >
            Soluciones 360° para tu negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-xs sm:text-sm mt-3"
          >
            Seleccioná cualquier servicio para desplegar métricas de rendimiento y entregables detallados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicesList.map((service, index) => (
            <TiltCard key={index} index={index} onClick={() => setSelectedService(service)}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-purple/20 group-hover:scale-110 transition-all border border-white/10">
                    <service.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-purple/15 text-amber-300 px-2.5 py-1 rounded-full border border-brand-purple/30">
                    {service.metric}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-brand-purple transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-brand-purple font-semibold">
                <span>Ver métricas e info</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card w-full max-w-xl bg-[#0f0f16] border-brand-purple/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
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
                  <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">Servicio Especializado</span>
                  <h3 className="text-2xl font-display font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {selectedService.extendedInfo}
              </p>

              {/* Metrics Badge */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-brand-purple/20 to-brand-vibrant/20 border border-brand-purple/30 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">Impacto Esperado</div>
                  <div className="text-2xl font-extrabold text-amber-300">{selectedService.metric}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">Eficiencia</div>
                  <div className="text-sm font-bold text-emerald-400">{selectedService.metricDetail}</div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-white/80 tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-purple" /> Entregables Incluidos
                </h4>
                <div className="space-y-2">
                  {selectedService.deliverables.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/542915207457?text=${encodeURIComponent(`Hola! Me interesa cotizar el servicio de ${selectedService.title}. ¿Podemos agendar una breve consulta?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-brand-purple to-brand-vibrant hover:from-brand-vibrant hover:to-brand-purple text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-purple-900/40 min-h-[48px] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por {selectedService.title}</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

