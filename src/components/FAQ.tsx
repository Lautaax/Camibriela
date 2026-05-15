import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo empezamos a trabajar juntos?",
    answer: "El primer paso es una charla inicial de diagnóstico (sin cargo) donde nos contás sobre tu proyecto. Si hay match, te enviamos una propuesta detallada ajustada a tus necesidades."
  },
  {
    question: "¿Cuánto tiempo tardan en verse los resultados?",
    answer: "Depende del servicio. En Ads los resultados suelen ser inmediatos, mientras que en gestión de redes y contenido orgánico la construcción de comunidad suele mostrar solidez entre el segundo y tercer mes."
  },
  {
    question: "¿Trabajan con cualquier tipo de negocio?",
    answer: "Trabajamos con marcas que buscan elevar su comunicación digital. Tenemos experiencia en moda, gastronomía, startups tecnológicas y marca personal."
  },
  {
    question: "¿Incluyen la toma de fotos y videos?",
    answer: "Sí, contamos con equipo de producción audiovisual propio para generar contenido original y de alta calidad para nuestras marcas aliadas."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Preguntas Frecuentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[30px] overflow-hidden border-white/5"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                  {activeIndex === index ? <Minus className="w-4 h-4 text-brand-purple" /> : <Plus className="w-4 h-4 text-brand-purple" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
