import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Lucciano's Il Gelato",
    role: "Cadena de Heladerías (Argentina)",
    text: "La calidad cinematográfica en las piezas audiovisuales y el sentido estético que aportaron a nuestras campañas elevó el engagement de la marca a nivel internacional.",
  },
  {
    name: "Big Six",
    role: "Gastronomía en Bahía Blanca",
    text: "Camila Briela Agency transformó por completo nuestra presencia en Bahía Blanca. Dispararon los pedidos y el reconocimiento local con piezas de contenido irresistibles.",
  },
  {
    name: "Tampicos",
    role: "Panchería en Bahía Blanca",
    text: "El equipo logró capturar el sabor y la mística de Tampicos en videos cortos de alto impacto, multiplicando la interacción y convocatoria en nuestro local.",
  },
  {
    name: "ByFy App",
    role: "App de Movilidad Urbana",
    text: "Optimizaron los costos de adquisición por descarga e impulsaron la adopción masiva de ByFy como la aplicación de viajes y traslados de preferencia.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
