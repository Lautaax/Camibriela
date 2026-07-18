import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto"
    >
      <SEO 
        title="Política de Privacidad" 
        description="Leé las políticas de privacidad y términos de protección de datos de Camila Briela Agency. Tu privacidad es nuestra prioridad absoluta."
      />
      <div className="text-center mb-16">
        <p className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-3">
          Legales
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-adaptive-primary">
          Política de Privacidad
        </h1>
        <p className="text-adaptive-muted">
          Última actualización: Julio 2026
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-[40px] space-y-8 text-adaptive-muted leading-relaxed text-sm md:text-base">
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            1. Información que Recopilamos
          </h2>
          <p>
            En Camila Briela Agency, valoramos la privacidad de nuestros clientes y visitantes. Recopilamos información personal básica únicamente cuando decides ponerte en contacto con nosotros a través de nuestro formulario de contacto o mediante canales directos como WhatsApp. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono y el nombre de tu empresa o marca.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            2. Uso de la Información
          </h2>
          <p>
            La información recopilada se utiliza exclusivamente con el fin de:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a tus consultas y ofrecerte asesoramiento personalizado sobre nuestros servicios.</li>
            <li>Enviarte propuestas de servicios y presupuestos solicitados de forma explícita.</li>
            <li>Mejorar tu experiencia de navegación y la presentación de nuestros contenidos web.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            3. Protección de tus Datos
          </h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas robustas para proteger tus datos de accesos no autorizados, pérdidas o alteraciones. Nunca venderemos, distribuiremos ni cederemos tus datos personales a terceros sin tu consentimiento expreso, salvo que estemos obligados legalmente a hacerlo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            4. Cookies y Tecnologías de Seguimiento
          </h2>
          <p>
            Utilizamos tecnologías de seguimiento estándar de forma muy limitada y orientada puramente a analizar de manera anónima el rendimiento de nuestro sitio web para poder perfeccionar su velocidad, diseño y fluidez general. No rastreamos tu comportamiento personal externo a nuestro sitio web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            5. Tus Derechos
          </h2>
          <p>
            Tienes derecho en cualquier momento a solicitar el acceso, rectificación o eliminación total de cualquier dato personal que tengamos sobre ti en nuestras bases de datos de contacto. Para ejercer estos derechos, simplemente escríbenos a través de nuestro formulario oficial de contacto o por correo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-display font-bold text-adaptive-primary">
            6. Modificaciones de esta Política
          </h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad según corresponda ante cambios regulatorios o técnicos en nuestra web. Te recomendamos revisar esta página periódicamente para mantenerte informado.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
