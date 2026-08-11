import { motion } from 'motion/react';
import { Target, Film, Users, Megaphone, Palette, ShieldCheck, ArrowRight, CheckCircle2, LayoutTemplate } from 'lucide-react';

const roles = [
  {
    icon: Target,
    roleTitle: "Dirección Estratégica & Growth",
    badge: "Estrategia & Funnels",
    description: "Lidera la hoja de ruta del negocio, análisis de competencia y arquitectura de conversión para maximizar ventas y posicionamiento.",
    responsibilities: ["Definición de KPIs y OKRs", "Auditorías de marca y mercado", "Optimizaciones de embudos de venta"],
    gradient: "from-purple-500/10 via-brand-purple/20 to-transparent",
    border: "border-purple-500/30"
  },
  {
    icon: Film,
    roleTitle: "Dirección Creativa & Video",
    badge: "Audiovisual Cinematográfico",
    description: "Encargados de rodajes, ganchos narrativos y edición vertical dinámica (Reels y TikTok) de la más alta calidad visual.",
    responsibilities: ["Guiones con ganchos de alta retención", "Rodaje y fotografía profesional", "Edición y curaduría de tendencias"],
    gradient: "from-pink-500/10 via-brand-vibrant/20 to-transparent",
    border: "border-pink-500/30"
  },
  {
    icon: Users,
    roleTitle: "Social Media & Community Lead",
    badge: "Atención & Comunidad",
    description: "Monitorea la presencia digital activa, gestión del calendario editorial y respuesta rápida en comentarios y mensajes directos.",
    responsibilities: ["Moderación activa en Instagram y TikTok", "Planificación del calendario mensual", "Estrategia de fidelización de audiencia"],
    gradient: "from-blue-500/10 via-cyan-500/20 to-transparent",
    border: "border-blue-500/30"
  },
  {
    icon: Megaphone,
    roleTitle: "Media Buyer & SEM Specialist",
    badge: "Meta & Google Ads",
    description: "Especialista en pauta publicitaria paga, segmentación estratégica, pruebas A/B y escala del retorno de inversión (ROAS).",
    responsibilities: ["Estrategias de tráfico calificado", "Configuración de píxeles y retargeting", "Reportes semanales de rendimiento"],
    gradient: "from-amber-500/10 via-orange-500/20 to-transparent",
    border: "border-amber-500/30"
  },
  {
    icon: Palette,
    roleTitle: "Diseño Gráfico & Branding",
    badge: "Identidad Visual",
    description: "Desarrolla la estética distintiva de la marca, manual de estilo, plantillas adaptativas y assets gráficos únicos.",
    responsibilities: ["Sistemas visuales y Brand Books", "Templates editables para historias/feed", "Diseño de merchandising y papelería"],
    gradient: "from-emerald-500/10 via-teal-500/20 to-transparent",
    border: "border-emerald-500/30"
  },
  {
    icon: LayoutTemplate,
    roleTitle: "Diseño & Desarrollo Web",
    badge: "Sitios & E-commerce",
    description: "Creación de sitios web atractivos, rápidos y orientados a la conversión para maximizar ventas y ofrecer una excelente experiencia de usuario.",
    responsibilities: ["Diseño de interfaces UX/UI", "Desarrollo de páginas web y tiendas", "Optimización de rendimiento (SEO)"],
    gradient: "from-sky-500/10 via-blue-500/20 to-transparent",
    border: "border-sky-500/30"
  },
  {
    icon: ShieldCheck,
    roleTitle: "Project Management & QA",
    badge: "Garantía de Calidad",
    description: "Garantiza el cumplimiento estricto de los tiempos de entrega, coordinación de equipos y control de calidad antes de publicar.",
    responsibilities: ["Control de cronogramas y Sprints", "Garantía de estándares visuales 360°", "Atención fluida y personalizada"],
    gradient: "from-indigo-500/10 via-purple-500/20 to-transparent",
    border: "border-indigo-500/30"
  }
];

export default function Team() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 relative bg-[#09090d] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-2 text-xs sm:text-sm"
          >
            Estructura Organizacional
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Roles & Áreas de Trabajo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-pink-400">
              Detrás de cada Proyecto
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed"
          >
            Combinamos perfiles técnicos y creativos especializados para brindar una ejecución integral sin fisuras.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`glass-card p-6 sm:p-8 rounded-3xl border bg-gradient-to-b ${item.gradient} ${item.border} hover:border-brand-purple/60 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.roleTitle}
                  </h3>

                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">
                    Responsabilidades clave:
                  </div>
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

