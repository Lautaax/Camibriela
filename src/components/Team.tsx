import { motion } from 'motion/react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const team = [
  {
    name: "Camila Briela",
    role: "CEO & Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Lautaro A.",
    role: "Director de Estrategia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sofía M.",
    role: "Head of Content & Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Team() {
  return (
    <section className="py-24 px-6 relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-2"
          >
            El Equipo
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Mentes creativas <br /> <span className="text-white/20">detrás de tu marca.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-[40px] group transition-all duration-500 hover:border-brand-purple/50"
            >
              <div className="aspect-[4/5] rounded-[30px] overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-brand-purple transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-brand-purple transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-brand-purple text-sm font-medium uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
