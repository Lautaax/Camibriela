import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ArrowRight, ArrowLeft, Send } from 'lucide-react';

interface QuizAnswer {
  nombre: string;
  rubro: string;
  objetivo: string;
  canales: string[];
  conformidad: number;
  obstaculo: string;
  necesidad: string;
  delegar: string;
  contacto: string;
}

export default function BrandQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<QuizAnswer>({
    nombre: '',
    rubro: '',
    objetivo: '',
    canales: [],
    conformidad: 5,
    obstaculo: '',
    necesidad: '',
    delegar: '',
    contacto: ''
  });

  const objetivos = ['Vender más', 'Hacerme conocido', 'Mejorar mi imagen', 'Construir comunidad', 'Otro'];
  const canalesOpciones = ['Instagram', 'TikTok', 'Facebook', 'Página Web', 'Ninguno'];
  const obstaculos = ['Falta de tiempo', 'No sé qué publicar', 'Mis fotos/videos no se ven profesionales', 'Publico pero no vendo', 'Otro'];
  const necesidades = ['Una estrategia clara', 'Contenido visual más pro', 'Publicidad paga para llegar a más gente', 'Una página web'];
  const delegarOpciones = ['Sí, 100%', 'Me cuesta pero lo necesito', 'Todavía quiero hacer todo yo'];

  const handleTextChange = (field: keyof QuizAnswer, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const toggleCanal = (canal: string) => {
    setAnswers(prev => {
      if (canal === 'Ninguno') {
        return { ...prev, canales: ['Ninguno'] };
      }
      const newCanales = prev.canales.includes(canal)
        ? prev.canales.filter(c => c !== canal)
        : [...prev.canales.filter(c => c !== 'Ninguno'), canal];
      return { ...prev, canales: newCanales };
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hola! Completé el Diagnóstico de Marca en la web:\n\n` +
      `*Paso 1: Sobre tu marca*\n` +
      `Nombre: ${answers.nombre}\n` +
      `Rubro: ${answers.rubro}\n` +
      `Objetivo: ${answers.objetivo}\n\n` +
      `*Paso 2: Sobre tu comunicación actual*\n` +
      `Canales: ${answers.canales.join(', ')}\n` +
      `Conformidad: ${answers.conformidad}/10\n` +
      `Obstáculo: ${answers.obstaculo}\n\n` +
      `*Paso 3: Sobre el futuro*\n` +
      `Necesidad: ${answers.necesidad}\n` +
      `Delegar: ${answers.delegar}\n` +
      `Contacto: ${answers.contacto}\n\n` +
      `Espero mi devolución gratuita.`
    );
    window.open(`https://wa.me/542915207457?text=${whatsappMessage}`, '_blank');
  };

  const isStep1Valid = answers.nombre.trim() !== '' && answers.rubro.trim() !== '' && answers.objetivo !== '';
  const isStep2Valid = answers.canales.length > 0 && answers.obstaculo !== '';
  const isStep3Valid = answers.necesidad !== '' && answers.delegar !== '' && answers.contacto.trim() !== '';

  return (
    <section id="diagnostico" className="py-24 px-6 bg-gradient-to-b from-dark-bg via-[#0f0e1a] to-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-vibrant/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Diagnóstico en la web</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Hagamos un diagnóstico <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-vibrant">de tu marca.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Completá este test breve, contanos en qué situación estás hoy y descubrí qué áreas de tu comunicación necesitan más atención.
          </motion.p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs text-white/50 mb-2 font-mono">
            <span>Paso {currentStep} de 3</span>
            <span>{currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'}</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple to-brand-vibrant rounded-full"
              animate={{ width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%' }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Sobre tu marca</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿Cómo se llama tu marca/proyecto?</label>
                    <input 
                      type="text" 
                      value={answers.nombre}
                      onChange={(e) => handleTextChange('nombre', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="Ej: Digital Glow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿A qué se dedica?</label>
                    <input 
                      type="text" 
                      value={answers.rubro}
                      onChange={(e) => handleTextChange('rubro', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="Ej: Indumentaria, servicios, gastronomía"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿Cuál es tu objetivo principal hoy?</label>
                    <div className="flex flex-wrap gap-2">
                      {objetivos.map(obj => (
                        <button
                          key={obj}
                          onClick={() => handleTextChange('objetivo', obj)}
                          className={`px-4 py-2 rounded-lg text-sm transition-colors border ${answers.objetivo === obj ? 'bg-brand-purple/30 border-brand-purple text-white' : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'}`}
                        >
                          {obj}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={!isStep1Valid}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Sobre tu comunicación actual</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿En qué canales estás presente hoy?</label>
                    <div className="flex flex-wrap gap-2">
                      {canalesOpciones.map(canal => (
                        <button
                          key={canal}
                          onClick={() => toggleCanal(canal)}
                          className={`px-4 py-2 rounded-lg text-sm transition-colors border ${answers.canales.includes(canal) ? 'bg-brand-purple/30 border-brand-purple text-white' : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'}`}
                        >
                          {canal}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2 flex justify-between">
                      <span>Del 1 al 10, ¿Qué tan conforme estás con lo que comunicás?</span>
                      <span className="text-brand-purple font-bold">{answers.conformidad}</span>
                    </label>
                    <input 
                      type="range" 
                      min={1} 
                      max={10} 
                      value={answers.conformidad}
                      onChange={(e) => handleTextChange('conformidad', e.target.value)}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                    />
                    <div className="flex justify-between text-xs text-white/40 mt-2">
                      <span>Nada conforme (1)</span>
                      <span>Muy conforme (10)</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿Cuál sentís que es tu mayor obstáculo?</label>
                    <div className="flex flex-col gap-2">
                      {obstaculos.map(obs => (
                        <button
                          key={obs}
                          onClick={() => handleTextChange('obstaculo', obs)}
                          className={`px-4 py-3 rounded-lg text-sm text-left transition-colors border ${answers.obstaculo === obs ? 'bg-brand-purple/30 border-brand-purple text-white' : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'}`}
                        >
                          {obs}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button onClick={prevStep} className="text-white/50 hover:text-white text-sm flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Volver
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!isStep2Valid}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente <ArrowRight className="w-4 h-4" />
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
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Sobre el futuro</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿Qué sentís que le falta a tu marca para crecer?</label>
                    <div className="flex flex-col gap-2">
                      {necesidades.map(nec => (
                        <button
                          key={nec}
                          onClick={() => handleTextChange('necesidad', nec)}
                          className={`px-4 py-3 rounded-lg text-sm text-left transition-colors border ${answers.necesidad === nec ? 'bg-brand-purple/30 border-brand-purple text-white' : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'}`}
                        >
                          {nec}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">¿Estás dispuesto/a a delegar y dejarte guiar por un equipo?</label>
                    <div className="flex flex-col gap-2">
                      {delegarOpciones.map(del => (
                        <button
                          key={del}
                          onClick={() => handleTextChange('delegar', del)}
                          className={`px-4 py-3 rounded-lg text-sm text-left transition-colors border ${answers.delegar === del ? 'bg-brand-purple/30 border-brand-purple text-white' : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'}`}
                        >
                          {del}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Dejanos tu mail o WhatsApp para enviarte una devolución gratuita sobre lo que nos contaste.</label>
                    <input 
                      type="text" 
                      value={answers.contacto}
                      onChange={(e) => handleTextChange('contacto', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="Tu email o número"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button onClick={prevStep} className="text-white/50 hover:text-white text-sm flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Volver
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={!isStep3Valid}
                    className="px-6 py-3 bg-brand-purple text-white font-bold rounded-xl flex items-center gap-2 hover:bg-brand-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/30"
                  >
                    Enviar Diagnóstico <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
