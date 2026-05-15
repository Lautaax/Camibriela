import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden glass-card relative z-10 p-1">
             <div className="w-full h-full rounded-[38px] overflow-hidden bg-gradient-to-br from-brand-purple/20 to-brand-vibrant/40 flex items-center justify-center">
                <span className="text-9xl font-display font-black text-white/10 select-none">SPM</span>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <div className="relative z-20 text-center p-8">
                  <p className="text-2xl font-display italic text-brand-purple mb-4">"Tu éxito es el nuestro"</p>
                  <p className="text-white/60">Somos expertos en transformar marcas a través de la creatividad y la estrategia digital.</p>
                </div>
             </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full" />
        </motion.div>

        <div className="flex-1">
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-4"
          >
            Sobre Nosotros
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Más que una agencia, <br /> somos tus aliados.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-white/60 text-lg leading-relaxed"
          >
            <p>
              En <span className="text-white font-bold">Somos parte de tu marca!</span> entendemos que cada proyecto es único. No solo gestionamos canales; nos sumergimos en la esencia de tu negocio para comunicar con propósito.
            </p>
            <p>
              Nuestro equipo combina estrategia de marketing con ejecución creativa de alto nivel para asegurar que tu marca no solo sea vista, sino que sea recordada y elegida.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-display font-bold text-white leading-none">100%</p>
                <p className="text-xs uppercase tracking-widest mt-1">Compromiso</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white leading-none">+5</p>
                <p className="text-xs uppercase tracking-widest mt-1">Años de Exp.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
