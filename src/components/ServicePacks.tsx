import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Star, Layers, Calendar, Video, Flame } from 'lucide-react';

export default function ServicePacks() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const discountMultiplier = billingCycle === 'quarterly' ? 0.85 : 1;

  const packs = [
    {
      id: 'starter',
      title: 'Pack Starter Growth',
      badge: 'Marcas Locales',
      popular: false,
      priceMonthly: 210000,
      desc: 'Pensado para negocios locales que buscan presencia constante, estética profesional y crecimiento orgánico.',
      features: [
        'Gestión activa de Instagram & TikTok',
        '8 Reels verticales producidos al mes',
        '20 Historias diseñadas al mes',
        'Moderación de comentarios básica',
        'Estrategia de hashtags & horarios',
        'Reporte de métricas mensual'
      ],
      gradient: 'from-white/5 to-white/0',
      borderColor: 'border-white/10'
    },
    {
      id: 'pro',
      title: 'Pack Pro Content & Performance',
      badge: 'Más Elegido ⭐',
      popular: true,
      priceMonthly: 380000,
      desc: 'El combo ideal entre producción audiovisual cinematográfica y campañas pagas en Meta Ads para acelerar ventas.',
      features: [
        'Todo lo del Pack Starter +',
        '14 Reels verticales de alta producción/mes',
        '40 Historias interactiva/mes',
        'Configuración & gestión de Meta Ads',
        'Jornada de rodaje profesional presencial',
        'Moderación de mensajes directos y WhatsApp',
        'Análisis semanal de embudos & conversión'
      ],
      gradient: 'from-brand-purple/20 via-brand-purple/10 to-transparent',
      borderColor: 'border-brand-purple/60'
    },
    {
      id: 'scale360',
      title: 'Membresía 360° Scale',
      badge: 'Empresas & Cadenas',
      popular: false,
      priceMonthly: 620000,
      desc: 'Dirección creativa integral con equipo asignado exclusivo para marcas líderes, franchisings o e-commerce.',
      features: [
        'Gestión integral multicanal 360°',
        '24 Reels + 2 Videos Producidos al mes',
        'Historias diarias sin límite',
        'Pauta optimizada en Meta & Google Ads',
        'Cobertura presencial mensual asignada',
        'Diseño de piezas web / landing page',
        'Reportes BI en tiempo real & reunión semanal'
      ],
      gradient: 'from-pink-500/10 via-purple-500/10 to-transparent',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'ondemand',
      title: 'Membresía Abierta On-Demand',
      badge: 'Formato a la Carta',
      popular: false,
      priceMonthly: 280000,
      desc: 'Membresía flexible con créditos mensuales de producción. Vos elegís mes a mes en qué enfocamos el equipo.',
      features: [
        'Créditos canjeables por Rodaje, Ads o Reels',
        'Flexibilidad total para coberturas o aperturas',
        'Sin atadura ni permanencia forzada',
        'Soporte directo por grupo de WhatsApp',
        'Respuesta prioritaria en <2hs',
        'Ideal para gastronomía, shows y lanzamientos'
      ],
      gradient: 'from-amber-500/10 via-orange-500/10 to-transparent',
      borderColor: 'border-amber-500/30'
    }
  ];

  return (
    <section id="membresias" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0a0a0e] via-[#0d0c18] to-[#0a0a0f] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-vibrant/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Planes Transparentes & Flexibles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Packs de Servicios &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-amber-300">
              Membresías Abiertas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed"
          >
            Sumá a tu marca un equipo de creativos, realizadores y media buyers. Sin contratos atados, con la máxima agilidad de ejecución.
          </motion.p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-brand-purple text-white shadow-lg shadow-purple-950/40'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-brand-purple text-white shadow-lg shadow-purple-950/40'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span>Trimestral</span>
              <span className="bg-amber-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                15% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack, index) => {
            const finalPrice = Math.round(pack.priceMonthly * discountMultiplier);
            const whatsappMsg = encodeURIComponent(
              `Hola! Me interesa consultar por el *${pack.title}* (${billingCycle === 'quarterly' ? 'Plan Trimestral con 15% OFF' : 'Plan Mensual'}). Quiero solicitar mi auditoría técnica gratuita.`
            );

            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative glass-card p-6 rounded-3xl border bg-gradient-to-b ${pack.gradient} ${
                  pack.popular ? 'border-brand-purple shadow-2xl shadow-purple-950/50 ring-2 ring-brand-purple/40' : pack.borderColor
                } flex flex-col justify-between group hover:border-brand-purple/80 transition-all duration-300`}
              >
                {/* Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-vibrant text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300 fill-current" />
                    <span>{pack.badge}</span>
                  </div>
                )}

                <div>
                  {!pack.popular && (
                    <div className="inline-block bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {pack.badge}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{pack.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-6">{pack.desc}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="text-xs text-white/40 uppercase tracking-widest font-mono">Inversión Estimada</div>
                    <div className="text-3xl font-extrabold text-white tracking-tight mt-1">
                      ${finalPrice.toLocaleString('es-AR')}{' '}
                      <span className="text-xs font-semibold text-brand-vibrant">ARS / mes</span>
                    </div>
                    {billingCycle === 'quarterly' && (
                      <span className="text-[10px] text-amber-300 font-mono block mt-1">
                        Ahorrás ${(pack.priceMonthly * 0.15).toLocaleString('es-AR')} ARS por mes
                      </span>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2">
                      Lo que incluye el pack:
                    </div>
                    {pack.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={`https://wa.me/542915207457?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all min-h-[44px] ${
                      pack.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white shadow-lg shadow-green-950/40'
                        : 'bg-white/10 hover:bg-brand-purple text-white border border-white/10 hover:border-brand-purple'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Solicitar este Pack</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-around gap-4 text-xs text-white/70 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sin contratos de permanencia obligatoria</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Puesta en marcha en menos de 48 horas</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-brand-purple shrink-0" />
            <span>Atención fluida vía grupo de WhatsApp exclusivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
