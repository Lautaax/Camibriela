import { motion } from 'motion/react';

const brands = [
  "META BUSINESS", "TIKTOK ADS", "GOOGLE ADS", "LINKEDIN", "INSTAGRAM", "SHOPIFY"
];

export default function Partners() {
  // Duplicate for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-adaptive-muted text-center">
          PLATAFORMAS DONDE ESCALAMOS TU MARCA
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none relative w-full">
        {/* Fade gradients on side bounds */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none transition-all duration-500" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none transition-all duration-500" />

        <motion.div 
          className="flex gap-16 md:gap-24 whitespace-nowrap py-2"
          animate={{ x: [0, -800] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-display font-black tracking-tighter text-adaptive-primary opacity-30 hover:opacity-100 hover:text-brand-purple transition-all duration-300 cursor-default inline-block"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

