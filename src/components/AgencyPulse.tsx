import { motion } from 'motion/react';
import { Coffee, Send, Zap, MessageSquare } from 'lucide-react';

const stats = [
  { icon: Coffee, value: "1,240", label: "Cafés Consumidos" },
  { icon: Send, value: "450+", label: "Publicaciones Creadas" },
  { icon: Zap, value: "24/7", label: "Soporte Estratégico" },
  { icon: MessageSquare, value: "100%", label: "Feedback Positivo" },
];

export default function AgencyPulse() {
  return (
    <section className="py-20 px-6 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-purple/20 transition-all">
                <stat.icon className="w-6 h-6 text-brand-purple" />
              </div>
              <div className="text-3xl font-display font-black mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
