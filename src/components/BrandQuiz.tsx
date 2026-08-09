import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, MessageCircle, Target, TrendingUp, Compass, Award, BarChart3, Zap, ShieldCheck } from 'lucide-react';

interface QuizAnswer {
  step1: string;
  step2: string;
  step3: string;
}

export default function BrandQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswer>({
    step1: '',
    step2: '',
    step3: ''
  });

  const step1Options = [
    { id: 'alcance', title: 'Baja Visibilidad / Poco Alcance', desc: 'Siento que el contenido actual no llega a nuevas personas en Instagram o TikTok.' },
    { id: 'conversion', title: 'Tráfico sin Ventas', desc: 'Tengo visitas o reproducciones pero no se traducen en consultas directas o compras.' },
    { id: 'apertura', title: 'Próxima Apertura / Evento', desc: 'Voy a abrir un local, lanzar un producto o realizar un show y necesito alto impacto.' },
    { id: 'estancado', title: 'Marca Activa pero Desactualizada', desc: 'Publicamos con frecuencia pero la estética y el formato quedaron anticuados.' }
  ];

  const step2Options = [
    { id: 'whatsapp', title: 'Aumentar Consultas y Pedidos', desc: 'Foco en generar clientes potenciales diarios a WhatsApp o formulario.' },
    { id: 'comunidad', title: 'Construir Comunidad & Virilidad', desc: 'Foco en Reels dinámicos, estética de marca y engagement con la audiencia.' },
    { id: 'ecommerce', title: 'Escalar Ventas Online', desc: 'Foco en carritos, retargeting y retorno de inversión en Meta & Google Ads.' },
    { id: 'posicionamiento', title: 'Liderar el Rubro en la Región', desc: 'Ser la marca de referencia indiscutida en CABA, Neuquén o la Patagonia.' }
  ];

  const step3Options = [
    { id: 'reels_historias', title: 'Reels + Historias Diarias', desc: 'Formato vertical constante para mantener la cuenta viva e interactiva.' },
    { id: 'cobertura_vivo', title: 'Cobertura de Eventos / Rodaje', desc: 'Equipo audiovisual presencial para registrar la experiencia en alta calidad.' },
    { id: 'pauta_growth', title: 'Pauta Publicitaria SEM / Ads', desc: 'Inversión en anuncios optimizados para captar tráfico calificado.' },
    { id: 'integral_360', title: 'Estrategia 360° Completa', desc: 'Dirección creativa, contenidos, gestión de redes y campañas pagas.' }
  ];

  const handleSelectOption = (stepKey: keyof QuizAnswer, value: string) => {
    setAnswers((prev) => ({ ...prev, [stepKey]: value }));
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(4); // Show Results Diagnosis
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({ step1: '', step2: '', step3: '' });
  };

  // Diagnosis logic based on selection
  const getRecommendation = () => {
    if (answers.step3 === 'pauta_growth' || answers.step1 === 'conversion') {
      return {
        title: 'Diagnóstico: Plan Performance & Growth Ads',
        score: '94% Potencial de Escalabilidad',
        desc: 'Tu marca necesita optimizar la conversión inmediata. La combinación de pauta segmentada en Meta/Google con embudos directo a WhatsApp aumentará el retorno de inversión.',
        recommendedPack: 'Pack Pro Content & Performance',
        action: 'Auditoría de Conversión + Pauta'
      };
    } else if (answers.step1 === 'apertura' || answers.step3 === 'cobertura_vivo') {
      return {
        title: 'Diagnóstico: Cobertura & Lanzamiento de Alto Impacto',
        score: '98% Potencial de Viralidad',
        desc: 'Para eventos o aperturas, la clave es la producción audiovisual en vivo combinada con Reels con ganchos emocionales para posicionar el espacio de inmediato.',
        recommendedPack: 'Membresía Abierta On-Demand',
        action: 'Planificación de Rodaje + Cobertura'
      };
    } else if (answers.step3 === 'integral_360' || answers.step2 === 'posicionamiento') {
      return {
        title: 'Diagnóstico: Estrategia Integral 360° Marca Líder',
        score: '99% Potencial de Posicionamiento',
        desc: 'Recomendamos una dirección creativa completa con gestión activa de comunidad, producción continua de contenido y campañas multicanal.',
        recommendedPack: 'Membresía 360° Premium / Scale',
        action: 'Reunión Táctica de Alineación'
      };
    } else {
      return {
        title: 'Diagnóstico: Impulso de Contenidos & Reels Virales',
        score: '91% Potencial de Engagement',
        desc: 'El foco principal debe ser la actualización estética y el volumen de Reels verticales para captar la atención del algoritmo y construir audiencia fiel.',
        recommendedPack: 'Pack Starter Growth Base',
        action: 'Estrategia de Contenidos & Guiones'
      };
    }
  };

  const recommendation = getRecommendation();

  const getOptionLabel = (options: { id: string; title: string }[], id: string) => {
    return options.find((o) => o.id === id)?.title || id;
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Completé el Diagnóstico de Marca en la web:\n\n` +
    `1️⃣ *Situación Actual:* ${getOptionLabel(step1Options, answers.step1)}\n` +
    `2️⃣ *Objetivo Principal:* ${getOptionLabel(step2Options, answers.step2)}\n` +
    `3️⃣ *Formato Deseado:* ${getOptionLabel(step3Options, answers.step3)}\n\n` +
    `🎯 *Resultado Sugerido:* ${recommendation.title} (${recommendation.recommendedPack})\n\n` +
    `Quiero coordinar la auditoría gratuita de 24hs basada en este resultado.`
  );

  return (
    <section id="diagnostico" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0a0a0d] via-[#0f0e1a] to-[#0a0a0e] relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-vibrant/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Test Interactivo en 3 Pasos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Diagnóstico Táctico de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-pink-400">
              Marca & Crecimiento
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed"
          >
            Respondé 3 preguntas clave sobre la situación actual de tu negocio para descubrir el plan de acción y la estrategia recomendada.
          </motion.p>
        </div>

        {/* Quiz Progress Bar */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="flex justify-between items-center text-xs text-white/50 mb-2 font-mono">
            <span>{currentStep <= 3 ? `Paso ${currentStep} de 3` : 'Diagnóstico Finalizado'}</span>
            <span>{currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'}</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple to-brand-vibrant rounded-full"
              animate={{
                width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Quiz Card Box */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border-white/10 bg-gradient-to-b from-brand-purple/10 via-transparent to-black/60 shadow-2xl">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-amber-300 font-mono uppercase tracking-widest block mb-1">
                    Paso 01 / 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    ¿Cuál es el desafío principal que enfrenta tu marca hoy?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step1Options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('step1', opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 min-h-[90px] flex flex-col justify-between group ${
                        answers.step1 === opt.id
                          ? 'bg-brand-purple/30 border-brand-purple text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-brand-purple/50 hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>{opt.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-purple" />
                        </div>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-amber-300 font-mono uppercase tracking-widest block mb-1">
                    Paso 02 / 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    ¿Cuál es el objetivo estratégico prioritario a 90 días?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step2Options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('step2', opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 min-h-[90px] flex flex-col justify-between group ${
                        answers.step2 === opt.id
                          ? 'bg-brand-purple/30 border-brand-purple text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-brand-purple/50 hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>{opt.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-purple" />
                        </div>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Volver al paso anterior
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-amber-300 font-mono uppercase tracking-widest block mb-1">
                    Paso 03 / 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    ¿Qué tipo de formato de trabajo encaja mejor con tu estructura?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step3Options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('step3', opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 min-h-[90px] flex flex-col justify-between group ${
                        answers.step3 === opt.id
                          ? 'bg-brand-purple/30 border-brand-purple text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-white/70 hover:border-brand-purple/50 hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                          <span>{opt.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-purple" />
                        </div>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Volver al paso anterior
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 mb-2">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>{recommendation.score}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {recommendation.title}
                    </h3>
                  </div>

                  <button
                    onClick={handleReset}
                    className="self-center sm:self-auto px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reiniciar Quiz
                  </button>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {recommendation.desc}
                </p>

                {/* Summary Box */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Resumen de respuestas seleccionadas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/70">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-white/40 block">Desafío:</span>
                      <span className="font-bold text-white">{getOptionLabel(step1Options, answers.step1)}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-white/40 block">Objetivo:</span>
                      <span className="font-bold text-white">{getOptionLabel(step2Options, answers.step2)}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-white/40 block">Formato:</span>
                      <span className="font-bold text-white">{getOptionLabel(step3Options, answers.step3)}</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Pack highlight */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-purple/20 to-brand-vibrant/20 border border-brand-purple/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                      Paquete Sugerido para tu Marca
                    </span>
                    <div className="text-lg font-bold text-white mt-0.5">
                      {recommendation.recommendedPack}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/542915207457?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-green-950/40 transition-all shrink-0 min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Solicitar Auditoría con este Resultado</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
