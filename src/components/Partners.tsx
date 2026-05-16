import { motion } from 'motion/react';

const brands = [
  "META BUSINESS", "TIKTOK ADS", "GOOGLE ADS", "LINKEDIN", "INSTAGRAM", "SHOPIFY"
];

export default function Partners() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 text-center mb-8">
          PLATAFORMAS DONDE ESCALAMOS TU MARCA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-display font-black tracking-tighter hover:text-brand-purple hover:opacity-100 transition-all cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
