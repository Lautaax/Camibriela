import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ana García",
    role: "CEO de EcoFashion",
    text: "Desde que empezamos a trabajar con el equipo, nuestra presencia en Instagram dio un giro de 180 grados. Las ventas aumentaron un 40% en 3 meses.",
  },
  {
    name: "Martín Sosa",
    role: "Fundador de TechHub",
    text: "Su enfoque estratégico y la claridad en el project management nos permitieron lanzar nuestra app sin estrés y con un alcance masivo.",
  },
  {
    name: "Lucía Pérez",
    role: "Restaurateur",
    text: "Entendieron la esencia de mi restaurante al instante. El diseño web es impecable y la gestión de contenido es arte puro.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-purple/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[40px] relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-purple/10" />
              <p className="text-lg text-white/70 italic mb-8 relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-brand-purple text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
