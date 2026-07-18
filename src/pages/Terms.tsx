import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto"
    >
      <SEO 
        title="Términos y Condiciones" 
        description="Leé los Términos y Condiciones oficiales de Camila Briela Agency que rigen el uso de este sitio web y de nuestros servicios de marketing."
      />
      <div className="text-center mb-16">
        <p className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-3">
          Legales
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-adaptive-primary">
          Términos y Condiciones
        </h1>
        <p className="text-adaptive-muted">
          Última actualización: Julio 2026
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-[40px] space-y-8 text-adaptive-muted leading-relaxed text-sm md:text-base">
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al ingresar, navegar y utilizar el sitio web de Camila Briela Agency, confirmas que has leído, comprendido y que aceptas en su totalidad estos Términos y Condiciones de Uso. Si no estás de acuerdo con alguna de estas condiciones, te solicitamos amablemente que interrumpas el uso de nuestro sitio web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            2. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido visual, interactivo, código fuente, logotipos, textos, diseños, animaciones y material audiovisual disponible en esta plataforma es propiedad exclusiva de Camila Briela Agency o de sus respectivos licenciantes, y está protegido por las leyes de propiedad intelectual e industrial aplicables internacionalmente. Queda estrictamente prohibida su copia, distribución o reproducción comercial sin consentimiento expreso previo y por escrito.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            3. Uso Autorizado de la Web
          </h2>
          <p>
            El usuario se compromete a hacer un uso lícito y ético de la plataforma, absteniéndose de introducir código malicioso, recopilar datos personales de forma automatizada o realizar cualquier acción informática dirigida a desestabilizar la velocidad o el funcionamiento normal del servidor que aloja esta aplicación.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            4. Limitación de Responsabilidad
          </h2>
          <p>
            Camila Briela Agency trabaja incansablemente para garantizar que toda la información exhibida sobre nuestros proyectos y metodologías sea correcta y actualizada. No obstante, no asumimos responsabilidad por eventuales errores técnicos puntuales u omisiones, ni por daños derivados del uso indebido de los materiales o de interrupciones temporales imprevistas del servidor ajenas a nuestro control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            5. Enlaces a Terceros
          </h2>
          <p>
            Este sitio puede contener enlaces directos a plataformas externas (como Instagram, WhatsApp o sitios de clientes). Camila Briela Agency no ejerce ningún tipo de control sobre estas plataformas externas y, por ende, no se responsabiliza del contenido, políticas de privacidad ni términos de uso de los mismos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            6. Modificaciones de los Términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos términos de servicio en cualquier momento con el fin de reflejar mejoras técnicas, funcionales o modificaciones legales relevantes. El uso continuo de la web posterior a tales cambios constituye la aceptación voluntaria de los nuevos términos.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
