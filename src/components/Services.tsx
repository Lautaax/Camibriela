import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Target, PenTool, Share2, LayoutGrid, Megaphone, Monitor, Palette, Briefcase } from 'lucide-react';
import React from 'react';

const services = [
  // ... existing services
];

function TiltCard({ children, index }: { children: React.ReactNode, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXDelayed = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYDelayed = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYDelayed, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXDelayed, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-8 rounded-3xl group hover:border-brand-purple/50 transition-all duration-500 cursor-default"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const servicesList = [
    {
      icon: Target,
      title: "Estrategia Digital",
      description: "Analizamos tu mercado y objetivos para trazar el camino más efectivo hacia el éxito de tu marca."
    },
    {
      icon: Share2,
      title: "Gestión de Redes",
      description: "Administración profesional de RRSS (Instagram, TikTok, LinkedIn) para construir comunidad y engagement."
    },
    {
      icon: PenTool,
      title: "Creación de Contenido",
      description: "Contenido audiovisual y gráfico que impacta y conecta con tu audiencia de manera auténtica."
    },
    {
      icon: LayoutGrid,
      title: "Project Management",
      description: "Coordinamos todas las áreas de tus proyectos digitales para asegurar resultados y tiempos de entrega."
    },
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description: "Identidad visual, branding y piezas gráficas que posicionan tu marca en un nivel superior."
    },
    {
      icon: Megaphone,
      title: "Publicidad / Ads",
      description: "Campañas pagas optimizadas en Meta y Google para maximizar tu retorno de inversión."
    },
    {
      icon: Monitor,
      title: "Diseño Web",
      description: "Landing pages y sitios web modernos que convierten visitantes en clientes reales."
    },
    {
      icon: Briefcase,
      title: "Copywriting",
      description: "Textos persuasivos y profesionales que cuentan la historia de tu marca y llaman a la acción."
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase tracking-[0.2em] mb-2"
          >
            Experiencia & Calidad
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Soluciones 360 para tu negocio
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <TiltCard key={index} index={index}>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
