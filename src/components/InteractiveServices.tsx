import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Film, Users, Palette, ArrowRight, CheckCircle2, X, TrendingUp, Sparkles, ChevronDown, MessageCircle, Monitor } from 'lucide-react';

const coreServices = [
  {
    id: 'content',
    title: "Creación de Contenido",
    tagline: "Contenido propio y diferencial.",
    icon: Film,
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
    shadow: "shadow-[0_0_50px_rgba(236,72,153,0.15)]",
    bullet: "border-pink-500 text-pink-400",
    details: [
      "Conceptualización de contenido y propuestas",
      "Guiones y planificación de jornadas",
      "Producción de fotografía y video (1-2 jornadas)",
      "Dirección creativa",
      "Edición profesional (Color, Sonido, Subs)",
      "Entrega de material terminado"
    ],
    extendedInfo: "Desarrollamos contenido desde la idea hasta la pieza final. Pensamos qué necesita comunicar tu marca, planificamos las jornadas y creamos con una dirección creativa pensada específicamente para vos. No producimos contenido para llenar un calendario. Construimos contenido con dirección.",
    description: "No se trata solamente de grabar, sino de pensar, producir y editar contenido con dirección.",
    idealFor: "Ideal para marcas que quieren dejar de improvisar qué publicar y empezar a construir un contenido propio, diferencial y alineado con sus objetivos."
  },
  {
    id: 'strategy',
    title: "Estrategia de Marca",
    tagline: "Claridad y dirección concreta.",
    icon: Compass,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    shadow: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    bullet: "border-purple-500 text-purple-400",
    details: [
      "Diagnóstico y posicionamiento",
      "Diferencial de marca y audiencias",
      "Objetivos y pilares de comunicación",
      "Estrategia de contenido y canales",
      "Análisis de oportunidades y métricas",
      "Recomendaciones estratégicas"
    ],
    extendedInfo: "Antes de comunicar, hay que saber qué queremos decir. Ayudamos a las marcas a encontrar claridad, definir una dirección y convertir sus objetivos en decisiones concretas. La estrategia no es hacer más. Es saber por qué estamos haciendo cada cosa.",
    description: "Analizamos dónde está la marca, qué la diferencia, a quién quiere llegar y qué necesita construir para crecer.",
    idealFor: "Ideal para marcas que necesitan encontrar foco y convertir objetivos de negocio en decisiones concretas de comunicación."
  },
  {
    id: 'social',
    title: "Gestión de Redes",
    tagline: "Continuidad, coherencia y dirección.",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    bullet: "border-blue-500 text-blue-400",
    details: [
      "Planificación mensual y calendario",
      "Organización del feed",
      "Publicación y adaptación de contenidos",
      "Redacción de copys",
      "Gestión de historias",
      "Análisis de métricas y optimización"
    ],
    extendedInfo: "Tu contenido necesita continuidad. Nos ocupamos de llevar la estrategia y el contenido de tu marca al día a día de sus redes. Planificamos, organizamos, publicamos y gestionamos la comunicación. Creación de contenido y gestión de redes pueden trabajar juntas o funcionar por separado.",
    description: "Llevamos tu estrategia al día a día para que tu presencia digital tenga coherencia.",
    idealFor: "Ideal para marcas que buscan mantener una presencia digital activa y optimizada, delegando el trabajo operativo."
  },
  {
    id: 'branding',
    title: "Branding & Identidad",
    tagline: "Hacemos visible lo que sos.",
    icon: Palette,
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    shadow: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
    bullet: "border-amber-500 text-amber-400",
    details: [
      "Estrategia de marca (Propósito, Valores, Público)",
      "Identidad verbal (Tono, Mensajes, Lenguaje)",
      "Identidad visual (Logo, Sistema, Paleta, Tipografía)",
      "Sistema de marca (Manual, Aplicaciones)",
      "Mockups y lineamientos",
      "Territorio conceptual"
    ],
    extendedInfo: "Construimos marcas desde cero o transformamos las que ya existen. Trabajamos sobre la esencia, personalidad, posicionamiento y universo visual para que una marca no solamente se vea bien, sino que sea reconocible y tenga algo propio para decir. No diseñamos cómo se ve una marca antes de entender qué quiere decir.",
    description: "Trabajamos sobre la esencia y el universo visual para que una marca sea reconocible.",
    idealFor: "Ideal para marcas que empiezan, que quedaron visualmente atrás, se sienten genéricas o buscan un Glow Up."
  },
  {
    id: 'ads',
    title: "Ads & Publicidad",
    tagline: "Inversión detrás de una estrategia.",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    shadow: "shadow-[0_0_50px_rgba(16,185,129,0.15)]",
    bullet: "border-emerald-500 text-emerald-400",
    details: [
      "Diagnóstico y definición de públicos",
      "Objetivos y estructura de campañas",
      "Conceptos creativos y adaptación",
      "Configuración y lanzamiento",
      "Monitoreo y optimización",
      "Análisis de resultados"
    ],
    extendedInfo: "Creamos y gestionamos campañas publicitarias digitales con objetivos concretos. No creemos en hacer publicidad simplemente para generar ruido. Primero entendemos qué queremos conseguir y después definimos cómo utilizar la inversión. La publicidad amplifica una buena estrategia. No reemplaza una mala comunicación.",
    description: "Definimos cómo utilizar tu inversión para acercarnos a los objetivos de tu negocio.",
    idealFor: "Ideal para marcas con bases sólidas que buscan escalar alcance, conversiones o ventas con campañas orientadas a resultados."
  },
  {
    id: 'web',
    title: "Páginas Web",
    tagline: "Herramientas de negocio.",
    icon: Monitor,
    color: "from-sky-500/20 to-blue-500/20",
    border: "group-hover:border-sky-500/50",
    shadow: "shadow-[0_0_50px_rgba(14,165,233,0.15)]",
    bullet: "border-sky-500 text-sky-400",
    details: [
      "Arquitectura del sitio y organización",
      "Experiencia de usuario (UX/UI)",
      "Dirección visual y diseño",
      "Desarrollo y adaptación responsive",
      "Formularios, integraciones y funcionalidades",
      "Revisión y puesta online"
    ],
    extendedInfo: "Diseñamos y desarrollamos sitios web que funcionan como una extensión de tu identidad, comunicación y objetivos. No hacemos webs solamente para 'tener presencia'. Las pensamos para que cumplan una función: presentar, vender, convertir, generar confianza, informar o posicionar. Una web no es una tarjeta de presentación digital. Es una herramienta de negocio.",
    description: "Sitios web pensados para cumplir una función: presentar, vender o posicionar.",
    idealFor: "Ideal para marcas que buscan formalizar su presencia digital, crear embudos de venta y generar confianza institucional."
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
            Nuestros Servicios
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-4"
          >
            Pilares <span className="text-adaptive-muted">de Crecimiento</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-adaptive-muted max-w-2xl mx-auto text-sm sm:text-base space-y-4"
          >
            <p>No creemos en soluciones prediseñadas. Cada marca tiene una historia, una necesidad y un momento diferente.</p>
            <p>Nuestros servicios pueden contratarse de manera individual o combinarse para construir una solución integral. Primero entendemos qué necesita tu marca. Después definimos qué tiene sentido hacer.</p>
            <p>No trabajamos con packs cerrados. Armamos cada propuesta según tus objetivos.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedService(service)}
                className={`group relative glass-card p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 border-white/10 bg-gradient-to-tr ${service.color} ${isHovered ? service.shadow : ''} hover:border-brand-purple/50`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Visual Glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-purple/10 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all duration-500">
                      <IconComponent className="w-7 h-7 text-brand-purple" />
                    </div>
                    <div className="flex items-center gap-2 text-brand-purple opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Ver detalles</span>
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
                </div>

                {/* Details Section Preview */}
                <div className="mt-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-adaptive-primary mb-3">
                    <span>¿Qué incluye?</span>
                  </div>
                  <ul className="space-y-2">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-adaptive-muted">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs font-semibold text-brand-purple flex items-center gap-1 group-hover:text-brand-vibrant transition-colors">
                    Ver servicio completo <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal for Detailed Service */}
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
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">{selectedService.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-brand-purple font-bold">{selectedService.tagline}</span>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                {selectedService.extendedInfo}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-white/80 tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-purple" /> Inclusiones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                <p className="text-xs text-white/80 italic font-semibold">
                  <span className="text-brand-purple mr-1">📍</span> {selectedService.idealFor}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/542915207457?text=${encodeURIComponent(`Hola! Me interesa conocer más sobre el servicio de ${selectedService.title}. Quiero solicitar una propuesta a medida.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-green-950/40 min-h-[48px] active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por este Servicio</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

