import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "¿Trabajan con marcas de cualquier rubro?",
    answer: "No nos limitamos a un rubro, nos limitamos a una forma de trabajar. Trabajamos con marcas que entienden el valor de la comunicación, que están dispuestas a invertir tiempo en su crecimiento y que buscan un equipo que se involucre de verdad. Si compartimos esa visión, podemos trabajar juntos."
  },
  {
    question: "¿Hacen trabajos por única vez o solo mensuales?",
    answer: "Hacemos ambos. Podés contratar servicios puntuales (como el desarrollo de una identidad visual, la creación de una página web o el diseño de un manual de marca) o elegir nuestros servicios mensuales (como la gestión de redes o la creación de contenido continuo). Todo depende de lo que necesites en este momento."
  },
  {
    question: "¿Qué incluye el servicio de Gestión de Redes?",
    answer: "Nuestra gestión no es solo publicar. Incluye el diseño de una estrategia, la creación de los copys (textos), la planificación mensual, la publicación de los posteos e historias, la moderación básica y el análisis de resultados."
  },
  {
    question: "¿Ustedes se encargan de filmar y sacar fotos?",
    answer: "Sí. Tenemos un equipo de producción audiovisual que se encarga de crear todo el contenido necesario para tus redes o tu web. Desde reels dinámicos hasta producciones más institucionales, pensamos la idea, la producimos y la editamos."
  },
  {
    question: "¿Hacen publicidad paga (Ads)?",
    answer: "Sí. Gestionamos campañas publicitarias en Meta Ads (Instagram y Facebook) y Google Ads. No hacemos pauta por hacer: la pensamos dentro de una estrategia más grande para que tu inversión tenga sentido y genere resultados reales, ya sea vender más o llegar a más personas."
  },
  {
    question: "¿Tengo que tener mi marca ya definida para trabajar con ustedes?",
    answer: "No, para nada. Si sentís que tu marca necesita un cambio desde la base, tenemos un servicio de Identidad de Marca (Branding) donde trabajamos en el logo, la paleta de colores, las tipografías y el estilo visual para que todo lo que comuniques después tenga coherencia."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative bg-black/50 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <MessageCircleQuestion className="w-4 h-4 text-brand-purple" />
            <span>Respuestas Rápidas</span>
          </motion.div>
          
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
