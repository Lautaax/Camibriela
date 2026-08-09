import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, Search, Megaphone, CheckCircle2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function SemCalculator() {
  const [budget, setBudget] = useState(150000); // ARS or USD index
  const [objective, setObjective] = useState<'leads' | 'sales' | 'brand'>('leads');
  const [industry, setIndustry] = useState('gastronomia');

  // Estimated calculation
  const multiplier = objective === 'sales' ? 4.2 : objective === 'leads' ? 5.5 : 8.0;
  const estimatedReach = Math.round((budget / 100) * 120);
  const estimatedConversions = Math.round((budget / 1000) * (objective === 'sales' ? 1.8 : 3.2));

  const whatsappMessage = encodeURIComponent(
    `Hola! Hice la simulación de SEM/Growth Marketing en la web:\n- Industria: ${industry}\n- Presupuesto mensual est.: $${budget.toLocaleString('es-AR')}\n- Objetivo: ${objective}\nQuiero solicitar mi auditoría técnica gratuita de 24hs.`
  );

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0d0d14] to-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-vibrant/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador SEM & Growth Ads</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 leading-tight"
          >
            Calculá el Alcance y Retorno de tu Marca con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-pink-400">
              Google & Meta Ads
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed"
          >
            Optimizamos cada peso invertido en pauta publicitaria. Seleccioná tu rubro y presupuesto estimado para ver la proyección de crecimiento para tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border-white/10 space-y-8"
          >
            {/* Rubro / Industria */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                1. Seleccioná tu Sector o Rubro
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'gastronomia', label: 'Gastronomía' },
                  { id: 'apps', label: 'Apps & Tech' },
                  { id: 'eventos', label: 'Eventos & Shows' },
                  { id: 'ecommerce', label: 'E-commerce' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustry(item.id)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center min-h-[44px] flex items-center justify-center border ${
                      industry === item.id
                        ? 'bg-brand-purple text-white border-brand-purple shadow-lg shadow-purple-900/40'
                        : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Presupuesto Estimado */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                  2. Inversión Mensual Estimada en Ads
                </label>
                <span className="text-lg font-extrabold text-brand-purple">
                  ${budget.toLocaleString('es-AR')} ARS
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={2000000}
                step={25000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-2 font-mono">
                <span>$50.000</span>
                <span>$1.000.000</span>
                <span>$2.000.000+</span>
              </div>
            </div>

            {/* Objetivo */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                3. Objetivo Principal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'leads', title: 'Clientes & Pedidos', desc: 'Consultas directas a WhatsApp / Web' },
                  { id: 'sales', title: 'Ventas Directas', desc: 'E-commerce y descargas de app' },
                  { id: 'brand', title: 'Notoriedad Masiva', desc: 'Máximo alcance y reproducciones' },
                ].map((obj) => (
                  <button
                    key={obj.id}
                    onClick={() => setObjective(obj.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all min-h-[64px] ${
                      objective === obj.id
                        ? 'bg-brand-purple/20 border-brand-purple text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white mb-0.5">{obj.title}</div>
                    <div className="text-[11px] text-white/50 leading-tight">{obj.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Transparencia Total en Métricas</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-purple" /> Sin Contratos de Permanencia Atada</span>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-brand-purple/30 bg-gradient-to-b from-brand-purple/10 via-transparent to-black/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Proyección de Rendimiento
                </span>
                <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-white/70 font-mono">
                  SEM 360°
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs text-white/50 mb-1">Impresiones & Alcance Estimado</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    +{estimatedReach.toLocaleString('es-AR')}{' '}
                    <span className="text-sm font-medium text-brand-vibrant">cuentas/mes</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-white/50 mb-1">Interacciones & Conversiones Estimadas</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                    +{estimatedConversions.toLocaleString('es-AR')}{' '}
                    <span className="text-sm font-medium text-white/60">acciones directas</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-white/80 flex items-center justify-between">
                    <span>Inclusión del Servicio SEM:</span>
                    <span className="text-emerald-400 font-extrabold">Auditoría 24hs Gratis</span>
                  </div>
                  <ul className="text-xs text-white/60 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>Campañas de Búsqueda Google Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Megaphone className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>Anuncios Meta Ads (Instagram & Facebook)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span>Retargeting & Geofencing Local (Bahía Blanca/Neuquén)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/542915207457?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-brand-purple to-brand-vibrant hover:from-brand-vibrant hover:to-brand-purple text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-purple-900/40 transform hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <span>Solicitar Auditoría SEM Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-white/40 mt-2">
                Respuesta en menos de 2 horas. Asesoría estratégica sin compromiso.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
