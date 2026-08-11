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
                <span className="text-9xl font-display font-black text-white/10 select-none">CB</span>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <div className="relative z-20 text-center p-8">
                  <p className="text-2xl font-display italic text-brand-purple mb-4">"Tu marca, mi visión"</p>
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
            NOSOTROS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Detrás de Digital Glow <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-pink-500">está Camila Briela.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-white/60 text-sm md:text-base leading-relaxed"
          >
            <p>
              Digital Glow nació mucho antes de tener este nombre. Nació de una inquietud: la sensación de que el trabajo con marcas podía hacerse de otra manera.
            </p>
            <p>
              Camila Briela, de 27 años, comenzó construyendo su propio camino dentro del marketing, rompiendo con las agencias tradicionales, la comunicación y la creación de contenido hasta convertir esa experiencia en un proyecto que hoy trabaja con marcas desde una mirada mucho más integral.
            </p>
            <p>
              Después de haber trabajado con más de 40 marcas, algo se volvió cada vez más evidente: las marcas no necesitaban solamente alguien que publicara por ellas. Necesitaban alguien que pudiera involucrarse, mirar desde afuera y aportar algo que ellas no estaban pudiendo ver.
            </p>
            <p className="text-white font-semibold">
              Así nació Digital Glow.
            </p>
            <p>
              Una evolución de aquella primera idea de agencia, pero con una definición mucho más clara de lo que queremos ser. No una agencia tradicional. No un proveedor. No alguien que llega, cumple y se va. <strong>Un equipo creativo que se convierte en parte de la marca.</strong>
            </p>
            <p>
              Camila lidera Digital Glow desde una combinación que atraviesa todo nuestro trabajo: <strong>estrategia + creatividad + sensibilidad</strong>. Le interesa entender qué hay detrás de una marca, encontrar aquello que la hace diferente y llevarlo a un lugar que quizás todavía no había imaginado.
            </p>
            <div className="p-4 border-l-2 border-brand-purple bg-white/5 my-4 italic">
              "Porque para nosotros la creatividad no está separada de los resultados. Lo que hacemos tiene que verse bien, sí. Pero también tiene que tener sentido. Tiene que representar a la marca. Tiene que generar algo. Y, sobre todo, tiene que hacer que quien está detrás de ella pueda verla desde afuera y pensar: <strong>‘Esto era lo que quería ver.’</strong>"
            </div>
            <p>
              Hoy Digital Glow vive tanto en Bahía Blanca como en Buenos Aires, sin perder algo que estuvo desde el principio: la cercanía. Porque cuanto más crecemos, más queremos conservar la sensación de que detrás de cada marca hay una persona que confió en nosotros para construir algo que le importa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
