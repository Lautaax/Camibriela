import { motion } from 'motion/react';
import { TrendingUp, Users, Eye, Play, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Mes 1', reach: 4000, engagement: 2400 },
  { month: 'Mes 2', reach: 12000, engagement: 8000 },
  { month: 'Mes 3', reach: 25000, engagement: 15000 },
  { month: 'Mes 4', reach: 48000, engagement: 32000 },
  { month: 'Mes 5', reach: 85000, engagement: 55000 },
  { month: 'Mes 6', reach: 140000, engagement: 92000 },
];

const stats = [
  {
    client: "Camila Briela",
    metric: "+500K",
    label: "Comunidad Unificada",
    icon: Users,
    color: "text-blue-400"
  },
  {
    client: "Editorial Mode",
    metric: "3.2M",
    label: "Views en Reels",
    icon: Play,
    color: "text-purple-400"
  },
  {
    client: "Lifestyle",
    metric: "890K",
    label: "Impresiones Mensuales",
    icon: Eye,
    color: "text-pink-400"
  },
  {
    client: "Brand Loyalty",
    metric: "x4",
    label: "Interacción vs Media",
    icon: TrendingUp,
    color: "text-orange-400"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 relative bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            className="text-brand-purple font-display font-medium uppercase mb-4 text-sm"
          >
            Resultados Tangibles
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black mb-6 text-adaptive-primary"
          >
            Data que impulsa <br /> <span className="text-adaptive-muted/40">tu crecimiento.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Chart Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 md:p-12 rounded-[40px] border-white/5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-adaptive-primary">Crecimiento de Alcance</h3>
                <p className="text-adaptive-muted text-sm">Promedio trimestral de cuentas gestionadas</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-purple" />
                  <span className="text-[10px] uppercase font-bold text-adaptive-muted">Alcance</span>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#ffffff30" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#ffffff30" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0A0A0A', borderColor: '#ffffff10', borderRadius: '16px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="reach" 
                    stroke="#A855F7" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorReach)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Quick Metrics Column */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-3xl flex items-center justify-between group hover:border-brand-purple/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-adaptive-muted text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-display font-bold leading-tight text-adaptive-primary">{stat.metric}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-brand-purple" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bento Metrics Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card p-8 rounded-[40px] border-white/5 relative bg-gradient-to-br from-brand-purple/10 to-transparent lg:col-span-2"
           >
              <h4 className="text-3xl font-display font-bold mb-4">Caso: Camila Briela Personal Brand</h4>
              <p className="text-white/60 mb-8 leading-relaxed">
                Desarrollamos la arquitectura de marca personal para @camilabriela, logrando un posicionamiento premium y una comunidad de +500k seguidores fidelizados a través de contenido estratégico y curaduría visual.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/5 rounded-2xl">
                   <p className="text-[10px] uppercase font-bold text-brand-purple">Fidelización</p>
                   <p className="text-xl font-bold">92%</p>
                </div>
                <div className="px-6 py-3 bg-white/5 rounded-2xl">
                   <p className="text-[10px] uppercase font-bold text-brand-purple">Alcance Anual</p>
                   <p className="text-xl font-bold">12.4M</p>
                </div>
              </div>
           </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card p-8 rounded-[40px] border-2 border-orange-500/50 flex flex-col justify-center items-start text-left bg-gradient-to-tr from-orange-500/20 to-transparent relative overflow-hidden group shadow-[0_0_50px_rgba(249,115,22,0.1)] hover:shadow-[0_0_60px_rgba(249,115,22,0.2)] transition-all duration-500 mt-0"
           >
              <div className="absolute top-6 right-6 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter animate-pulse z-10">
                PRO RESULT
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-adaptive-muted">Métrica Destacada</p>
                  <p className="text-sm font-bold text-orange-400">Tasa de Conversión</p>
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-adaptive-muted/40 text-xl font-display font-black line-through">1.2%</span>
                  <span className="text-orange-500 text-sm font-bold">Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-7xl font-display font-black text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">6.4%</div>
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '60px' }}
                    className="w-1 bg-orange-500/30 rounded-full"
                  />
                </div>
              </div>
              <p className="text-sm text-adaptive-muted leading-relaxed max-w-[200px]">
                Optimización de embudos y <span className="text-adaptive-primary font-bold">copywriting persuasivo</span> de alto impacto.
              </p>
              
              {/* Background accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-all duration-700" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card p-8 rounded-[40px] border-white/5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-brand-purple/10 to-transparent hover:border-brand-purple/30 transition-colors text-adaptive-primary"
           >
              <div className="text-5xl font-display font-black mb-2 text-brand-purple drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">+10M</div>
              <p className="text-sm uppercase tracking-widest font-bold text-adaptive-primary/75">Views Totales</p>
              <p className="text-xs text-adaptive-muted mt-4">Generadas para nuestros clientes en 2024</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
