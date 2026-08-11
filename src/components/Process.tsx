import { motion } from 'motion/react';
import { Search, Lightbulb, PencilRuler, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "DIAGNÓSTICO",
    subtitle: "Primero conocemos tu marca.",
    description: "Qué hacés, qué querés conseguir, qué te diferencia, qué está funcionando y qué sentís que hoy no estás pudiendo mostrar. Buscamos aquello que quizás vos, por estar tan cerca de tu negocio, ya no podés ver.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "ESTRATEGIA",
    subtitle: "Convertimos lo que descubrimos en una dirección.",
    description: "Definimos prioridades, objetivos, oportunidades y la forma en la que vamos a comunicar lo que hace única a tu marca.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: PencilRuler,
    title: "PRODUCCIÓN",
    subtitle: "Ahora sí, creamos.",
    description: "Desarrollamos conceptos, pensamos ideas, escribimos guiones, planificamos las jornadas y producimos el contenido que va a llevar esa estrategia a la realidad.",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: Rocket,
    title: "LANZAMIENTO",
    subtitle: "El contenido sale al mundo.",
    description: "Publicamos, gestionamos, medimos y observamos qué sucede para seguir tomando decisiones. Porque una marca no se construye en una sola jornada. Se construye en movimiento.",
    color: "from-orange-400 to-orange-600"
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.3em] mb-4 text-sm"
          >
            NUESTRO PROCESO CREATIVO
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            No empezamos creando.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-adaptive-muted"
          >
            Empezamos entendiendo.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-32 right-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${step.color} p-[2px] mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110`}>
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-dark-bg border border-white/10 rounded-full flex items-center justify-center font-display font-bold">
                  0{index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/80 font-medium mb-3 text-sm">{step.subtitle}</p>
              <p className="text-white/50 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
