import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-dark-surface/50 border-y border-white/5 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-8"
            >
              Impulsemos <br /> tu visión juntos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg mb-12 max-w-md"
            >
              Estamos listos para ser parte de tu marca. Contactanos para una asesoría inicial sin cargo.
            </motion.p>

            <div className="space-y-6">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href="https://wa.me/542915207457"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:bg-brand-purple/20 transition-all">
                  <Phone className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-lg font-medium">+54 (291) 5207457</p>
                </div>
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="mailto:Digitalglow.info@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:bg-brand-purple/20 transition-all">
                  <Mail className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium">Digitalglow.info@gmail.com</p>
                </div>
              </motion.a>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Instagram</p>
                  <p className="text-lg font-medium">@somospartedetumarca</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[40px] border-brand-purple/20"
          >
            <h3 className="text-2xl font-bold mb-6">Enviános un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Asunto" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="Tu mensaje..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all resize-none"
              />
              <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center gap-2">
                Enviar Mensaje <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
