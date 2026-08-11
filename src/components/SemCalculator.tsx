import { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Compass, Users, Calculator, CheckCircle2, ArrowRight, Sparkles, MessageCircle, Sliders, Layers, Video, Image as ImageIcon, Info } from 'lucide-react';

export default function SemCalculator() {
  // Service Toggles
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'gestion_redes',
    'creacion_contenido'
  ]);

  // Content Quantities per Month
  const [reelsCount, setReelsCount] = useState<number>(12);
  const [videosCount, setVideosCount] = useState<number>(2);
  const [storiesCount, setStoriesCount] = useState<number>(30);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const servicesList = [
    { id: 'estrategia', name: 'Estrategia de Marca', desc: 'Diagnóstico, posicionamiento y dirección clara' },
    { id: 'gestion_redes', name: 'Gestión de Redes', desc: 'Planificación, publicación y continuidad diaria' },
    { id: 'creacion_contenido', name: 'Creación de Contenido', desc: 'Fotografía, video y edición con dirección creativa' },
    { id: 'branding', name: 'Branding & Identidad', desc: 'Universo visual, logo y sistema de marca' },
    { id: 'ads', name: 'Ads & Publicidad', desc: 'Campañas publicitarias y gestión de inversión' },
    { id: 'web', name: 'Páginas Web', desc: 'Sitios web institucionales o tiendas e-commerce' },
  ];

  // Dynamic estimate calculation
  let baseEstimate = 0;
  if (selectedServices.includes('estrategia')) baseEstimate += 250000;
  if (selectedServices.includes('gestion_redes')) baseEstimate += 180000;
  if (selectedServices.includes('creacion_contenido')) baseEstimate += 200000;
  if (selectedServices.includes('branding')) baseEstimate += 350000;
  if (selectedServices.includes('ads')) baseEstimate += 150000;
  if (selectedServices.includes('web')) baseEstimate += 450000;

  const contentEstimate = (reelsCount * 20000) + (videosCount * 50000) + (storiesCount * 3000);
  const totalEstimate = baseEstimate + contentEstimate;

  const serviceNames = selectedServices
    .map((s) => servicesList.find((item) => item.id === s)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hola! Armé una propuesta de servicios personalizada en la web:\n\n` +
    `📌 *Servicios Seleccionados:* ${serviceNames}\n` +
    `🎬 *Reels / TikToks al mes:* ${reelsCount}\n` +
    `📹 *Videos Producidos al mes:* ${videosCount}\n` +
    `📸 *Historias al mes:* ${storiesCount}\n\n` +
    `Quiero avanzar para conocer el valor definitivo para mi proyecto.`
  );

  return (
    <section id="presupuestador" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d16] to-[#0a0a0d] relative overflow-hidden border-t border-white/5">
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
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Personalizá tu Plan</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 leading-tight"
          >
            No elijas un pack. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-pink-400">
              Construí lo que tu marca necesita.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed space-y-3"
          >
            <p>No todas las marcas necesitan lo mismo. Por eso podés combinar nuestros servicios y definir una solución a medida según lo que quieras construir.</p>
            <p>Elegí qué necesitás, indicá el volumen de contenido que estás buscando y obtené una estimación inicial de inversión.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border-white/10 space-y-8"
          >
            {/* 1. Selección de Servicios por Separado */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3 flex items-center justify-between">
                <span>1. Elegí tus Servicios</span>
                <span className="text-[10px] text-brand-purple font-mono">{selectedServices.length} seleccionados</span>
              </label>
              <div className="space-y-2.5">
                {servicesList.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between transition-all min-h-[56px] ${
                        isChecked
                          ? 'bg-brand-purple/20 border-brand-purple text-white shadow-lg shadow-purple-950/30'
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                          <span>{service.name}</span>
                        </div>
                        <div className="text-[11px] text-white/50 leading-snug mt-0.5">{service.desc}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-brand-purple border-brand-purple text-white' : 'border-white/20 bg-black/20'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Cantidad de Contenido Mensual */}
            <div className="pt-4 border-t border-white/10 space-y-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-amber-300 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>2. Volumen de Contenido (Opcional)</span>
              </label>

              {/* Slider Reels */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-brand-purple" /> Reels / TikToks (Formato Vertical)
                  </span>
                  <span className="text-sm font-extrabold text-amber-400 bg-white/10 px-3 py-1 rounded-full font-mono">
                    {reelsCount} / mes
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={30}
                  step={2}
                  value={reelsCount}
                  onChange={(e) => setReelsCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>0</span>
                  <span>10</span>
                  <span>20</span>
                  <span>30</span>
                </div>
              </div>

              {/* Slider Videos Producidos */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Film className="w-4 h-4 text-brand-purple" /> Videos Producidos
                  </span>
                  <span className="text-sm font-extrabold text-amber-400 bg-white/10 px-3 py-1 rounded-full font-mono">
                    {videosCount} / mes
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={videosCount}
                  onChange={(e) => setVideosCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>0</span>
                  <span>2</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>

              {/* Slider Historias */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-brand-purple" /> Historias
                  </span>
                  <span className="text-sm font-extrabold text-amber-400 bg-white/10 px-3 py-1 rounded-full font-mono">
                    {storiesCount} / mes
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={90}
                  step={5}
                  value={storiesCount}
                  onChange={(e) => setStoriesCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>0</span>
                  <span>30</span>
                  <span>60</span>
                  <span>90</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results / Live Quote Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-brand-purple/40 bg-gradient-to-b from-brand-purple/15 via-transparent to-black/60 flex flex-col justify-between sticky top-24"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Resumen de Selección
                </span>
              </div>

              <div className="space-y-6">
                {/* Scope Breakdown */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs font-bold text-white/90 border-b border-white/10 pb-2">
                    Desglose de la Configuración:
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-white/80">
                      <span className="text-white/60">Servicios Incluidos:</span>
                      <span className="font-bold text-amber-300">{selectedServices.length} Módulos</span>
                    </div>

                    <div className="flex justify-between text-white/80">
                      <span className="text-white/60">Reels / TikToks:</span>
                      <span className="font-bold text-white">{reelsCount} piezas</span>
                    </div>

                    <div className="flex justify-between text-white/80">
                      <span className="text-white/60">Videos Producidos:</span>
                      <span className="font-bold text-white">{videosCount} producciones</span>
                    </div>

                    <div className="flex justify-between text-white/80">
                      <span className="text-white/60">Historias:</span>
                      <span className="font-bold text-white">{storiesCount} placas</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                    <Info className="w-4 h-4" />
                    <span>Siguiente Paso</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Envianos esta configuración por WhatsApp. Evaluaremos tus objetivos y necesidades para enviarte una cotización formal y el alcance real de tu proyecto.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/542915207457?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-green-900/40 transform hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contactar para Cotización Formal</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

