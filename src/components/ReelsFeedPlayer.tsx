import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Heart, Bookmark, Share2, Music, Sparkles, MessageCircle, ChevronUp, ChevronDown, CheckCircle2, Film, Grid, Instagram, Flame } from 'lucide-react';

interface ReelItem {
  id: string;
  clientName: string;
  clientHandle: string;
  clientAvatar: string;
  category: string;
  location: string;
  videoThumbnail: string;
  videoUrl?: string; // Fallback simulation video background
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  caption: string;
  hashtags: string[];
  audioTrack: string;
  metrics: string;
}

const reelsData: ReelItem[] = [
  {
    id: 'pituca-1',
    clientName: 'Pituca Pastelería Artesanal',
    clientHandle: '@pitucapasteleria',
    clientAvatar: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=150',
    category: 'Gastronomía & Apertura',
    location: 'Monroe & Villa Urquiza, CABA',
    videoThumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    likesCount: 14200,
    commentsCount: 384,
    sharesCount: 890,
    caption: '¡Abrimos las puertas de nuestro nuevo local! 🥐✨ Te mostramos el detrás de escena, la decoración y todo el amor artesanal que le pusimos.',
    hashtags: ['#PitucaPasteleria', '#VillaUrquiza', '#ReelsArtesanal', '#Apertura'],
    audioTrack: 'Pituca Pastelería • Audio Original',
    metrics: '1.2M Reproducciones'
  },
  {
    id: 'hum-1',
    clientName: 'HUM STUDIO',
    clientHandle: '@humstudio.ar',
    clientAvatar: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=150',
    category: 'Wellness & Pilates',
    location: 'Palermo Hollywood, CABA',
    videoThumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    likesCount: 8940,
    commentsCount: 192,
    sharesCount: 450,
    caption: '¿Cuándo fue la última vez que te sentiste en movimiento consciente? 🕯️ Descubrí el espacio inmersivo de Pilates Reformer en Palermo.',
    hashtags: ['#HumStudio', '#PalermoHollywood', '#PilatesReformer', '#Wellness'],
    audioTrack: 'Hum Studio • Atmosférica Ambarina',
    metrics: '+250% Engagement'
  },
  {
    id: 'confluencia-1',
    clientName: 'Fiesta de la Confluencia',
    clientHandle: '@fiestaconfluencia',
    clientAvatar: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=150',
    category: 'Cobertura Recitales',
    location: 'Isla 132, Neuquén',
    videoThumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    likesCount: 54300,
    commentsCount: 2120,
    sharesCount: 12400,
    caption: '¡MÁS DE 2M DE PERSONAS VIBRANDO EN VIVO! 🔥 Cobertura en tiempo real del festival más grande de la Patagonia.',
    hashtags: ['#Confluencia2026', '#Neuquen', '#CoberturaEnVivo', '#Recitales'],
    audioTrack: 'Fiesta Confluencia • Live Sound',
    metrics: '5.2M Views Totales'
  },
  {
    id: 'luccianos-1',
    clientName: "Lucciano's Gelato",
    clientHandle: '@luccianos_',
    clientAvatar: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=150',
    category: 'Branding & Sabor',
    location: 'Locales Nacionales',
    videoThumbnail: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800',
    likesCount: 32100,
    commentsCount: 840,
    sharesCount: 2300,
    caption: 'Experiencia gastronómica que enamora a la vista y al paladar 🍦 Lanzamiento exclusivo de sabor de temporada.',
    hashtags: ['#Luccianos', '#GelatoArtesanal', '#FoodieReel', '#ViralContent'],
    audioTrack: "Lucciano's • Italian Chill Beats",
    metrics: '+180% Conversión'
  }
];

export default function ReelsFeedPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'reels' | 'grid'>('reels');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [savedMap, setSavedMap] = useState<Record<string, boolean>>({});

  const currentReel = reelsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reelsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
  };

  const toggleLike = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id: string) => {
    setSavedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isLiked = likedMap[currentReel.id];
  const isSaved = savedMap[currentReel.id];

  const whatsappMsg = encodeURIComponent(
    `Hola! Estaba mirando el reproductor de Reels en la web y me interesó el estilo de contenido para *${currentReel.clientName}*. Quiero cotizar Reels de este nivel para mi marca.`
  );

  return (
    <section id="reels-player" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#08080c] via-[#0c0c14] to-[#08080c] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-vibrant/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>Showcase Interactivo Mobile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Sintió el Impacto Visual con Nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-vibrant to-amber-300">
              Reproductor de Reels & Feed
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm sm:text-base leading-relaxed"
          >
            Explorá en tiempo real cómo lucen los contenidos, coberturas y Reels virales producidos para nuestros clientes directamente en una interfaz móvil.
          </motion.p>
        </div>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Mobile Phone Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Phone Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[375px] h-[660px] sm:h-[700px] bg-black rounded-[50px] p-3 border-[6px] border-[#22222d] shadow-[0_25px_60px_-15px_rgba(168,85,247,0.3)] overflow-hidden flex flex-col">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-full z-40 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Mobile Header Tabs */}
              <div className="pt-6 pb-2 px-4 bg-black/80 backdrop-blur-md z-30 flex items-center justify-between border-b border-white/10 text-white">
                <div className="flex items-center gap-1.5 text-xs font-bold font-display">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>AGENCIA // REELS</span>
                </div>

                <div className="flex bg-white/10 p-1 rounded-full border border-white/10">
                  <button
                    onClick={() => setActiveTab('reels')}
                    className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                      activeTab === 'reels' ? 'bg-brand-purple text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Film className="w-3 h-3 inline mr-1" />
                    Reels
                  </button>
                  <button
                    onClick={() => setActiveTab('grid')}
                    className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                      activeTab === 'grid' ? 'bg-brand-purple text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Grid className="w-3 h-3 inline mr-1" />
                    Feed
                  </button>
                </div>
              </div>

              {/* Mobile Screen Body */}
              <div className="relative flex-1 bg-neutral-900 rounded-[38px] overflow-hidden">
                {activeTab === 'reels' ? (
                  /* REELS VIEW */
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReel.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full flex flex-col justify-between overflow-hidden"
                    >
                      {/* Video Thumbnail Background with Zoom motion */}
                      <motion.img
                        animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                        src={currentReel.videoThumbnail}
                        alt={currentReel.clientName}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none" />

                      {/* Top Bar inside Reel */}
                      <div className="relative z-20 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase bg-brand-purple/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                            {currentReel.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition-colors"
                          >
                            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:bg-black/60 transition-colors"
                          >
                            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Center Play Indicator if Paused */}
                      {!isPlaying && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                          <div className="w-16 h-16 rounded-full bg-brand-purple/80 text-white flex items-center justify-center shadow-xl">
                            <Play className="w-8 h-8 fill-current ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Right Action Bar (Likes, Comments, Shares) */}
                      <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
                        <button
                          onClick={() => toggleLike(currentReel.id)}
                          className="flex flex-col items-center group"
                        >
                          <div className={`p-3 rounded-full backdrop-blur-md transition-transform group-active:scale-125 ${
                            isLiked ? 'bg-pink-600 text-white' : 'bg-black/40 text-white hover:bg-black/60'
                          }`}>
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                          </div>
                          <span className="text-[10px] font-bold mt-1 font-mono">
                            {(currentReel.likesCount + (isLiked ? 1 : 0)).toLocaleString('es-AR')}
                          </span>
                        </button>

                        <div className="flex flex-col items-center">
                          <div className="p-3 rounded-full bg-black/40 backdrop-blur-md text-white">
                            <MessageCircle className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold mt-1 font-mono">
                            {currentReel.commentsCount}
                          </span>
                        </div>

                        <button
                          onClick={() => toggleSave(currentReel.id)}
                          className="flex flex-col items-center"
                        >
                          <div className={`p-3 rounded-full backdrop-blur-md ${
                            isSaved ? 'bg-amber-500 text-white' : 'bg-black/40 text-white'
                          }`}>
                            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                          </div>
                          <span className="text-[10px] font-bold mt-1 font-mono">
                            {currentReel.sharesCount}
                          </span>
                        </button>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="relative z-20 p-4 pr-16 text-white space-y-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={currentReel.clientAvatar}
                            alt={currentReel.clientName}
                            className="w-8 h-8 rounded-full border border-amber-400 object-cover"
                          />
                          <div>
                            <div className="text-xs font-bold flex items-center gap-1">
                              <span>{currentReel.clientName}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-current" />
                            </div>
                            <div className="text-[10px] text-white/60 font-mono">{currentReel.location}</div>
                          </div>
                        </div>

                        <p className="text-xs text-white/90 leading-tight line-clamp-2">
                          {currentReel.caption}
                        </p>

                        <div className="flex flex-wrap gap-1 text-[10px] text-amber-300 font-medium">
                          {currentReel.hashtags.map((h, i) => (
                            <span key={i}>{h}</span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[10px] text-white/70 pt-1">
                          <Music className="w-3 h-3 text-brand-purple animate-spin" />
                          <span className="truncate">{currentReel.audioTrack}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  /* FEED GRID VIEW */
                  <div className="p-3 h-full overflow-y-auto space-y-3 bg-neutral-950 text-white">
                    <div className="text-xs font-bold text-white/50 uppercase tracking-widest text-center mb-2">
                      Seleccioná un post del feed:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {reelsData.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setCurrentIndex(idx);
                            setActiveTab('reels');
                          }}
                          className={`relative aspect-square rounded-xl overflow-hidden border text-left group ${
                            currentIndex === idx ? 'border-amber-400 ring-2 ring-amber-400/40' : 'border-white/10'
                          }`}
                        >
                          <img src={item.videoThumbnail} alt={item.clientName} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-2 flex flex-col justify-end">
                            <span className="text-[10px] font-bold text-white line-clamp-1">{item.clientName}</span>
                            <span className="text-[9px] text-amber-300 font-mono">{item.metrics}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Phone Bar */}
              <div className="h-4 w-full bg-black flex items-center justify-center pt-1">
                <div className="w-32 h-1 bg-white/40 rounded-full" />
              </div>
            </div>

            {/* Mobile Navigation Controls (Next / Prev) */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-brand-purple hover:border-brand-purple transition-all flex items-center gap-1 min-h-[44px]"
              >
                <ChevronUp className="w-4 h-4" /> Anterior
              </button>
              <span className="text-xs text-white/50 font-mono px-2">
                {currentIndex + 1} / {reelsData.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-brand-purple hover:border-brand-purple transition-all flex items-center gap-1 min-h-[44px]"
              >
                Siguiente <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Active Client Details & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              key={currentReel.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border-white/10 bg-gradient-to-b from-brand-purple/10 via-transparent to-black/40 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/15 px-3 py-1 rounded-full border border-brand-purple/30">
                    {currentReel.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {currentReel.clientName}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/40 block font-mono">Rendimiento</span>
                  <span className="text-sm font-extrabold text-amber-400 font-mono">
                    {currentReel.metrics}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-white/80">
                <p className="leading-relaxed">
                  {currentReel.caption}
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-white/50">Me Gusta</div>
                    <div className="text-base font-bold text-pink-400 font-mono mt-0.5">
                      {currentReel.likesCount.toLocaleString('es-AR')}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-white/50">Comentarios</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      {currentReel.commentsCount}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-white/50">Guardados</div>
                    <div className="text-base font-bold text-amber-400 font-mono mt-0.5">
                      {currentReel.sharesCount}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-white/50 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  ¿Qué incluye nuestra producción de Reels?
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Guion e idea creativa con gancho</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Rodaje en 4K con iluminación cine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Edición dinámica y subtítulos virales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Estrategia de distribución & Ads</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action WhatsApp */}
              <a
                href={`https://wa.me/542915207457?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-green-950/40 transform hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quiero Reels de este nivel para mi marca</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
