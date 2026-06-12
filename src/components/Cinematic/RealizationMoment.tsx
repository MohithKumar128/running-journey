import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RealizationMomentProps {
  imagePath?: string;
}

const RealizationMoment: React.FC<RealizationMomentProps> = ({ imagePath }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const heartbeatScale = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], [1, 1.05, 1, 1.05, 1, 1.05, 1, 1.05, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);

  return (
    <section ref={containerRef} className="relative h-[180vh] bg-black flex flex-col items-center justify-start">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        {imagePath && (
          <motion.div 
            style={{ opacity: imgOpacity, scale: scale }}
            className="absolute inset-0 z-0 p-12 md:p-24"
          >
            <img 
              src={imagePath} 
              alt="Realization" 
              className="w-full h-full object-contain grayscale brightness-75 transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-brand-orange/5 mix-blend-color" />
          </motion.div>
        )}

        {/* Heartbeat Pulse Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: [0.02, 0.1, 0.02, 0.1, 0.02]
          }}
          transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
          className="absolute inset-0 bg-brand-orange rounded-full blur-[200px] w-full h-full opacity-5"
        />

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 border border-brand-orange/30 rounded-full mb-12 bg-black/60 backdrop-blur-md"
          >
            <h2 className="text-brand-orange text-xs md:text-sm font-black uppercase tracking-[0.5em]">
              The Turning Point • 1.5K Race
            </h2>
          </motion.div>
          
          <motion.div style={{ scale: heartbeatScale }}>
            <h1 className="text-6xl md:text-[10rem] lg:text-[13rem] font-black text-brand-white tracking-tighter leading-[0.8] mb-12 text-shadow-glow uppercase break-words">
              "THIS IS <br /> <span className="text-brand-orange italic">WHAT</span> <br /> I WANT."
            </h1>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl md:text-5xl text-brand-white font-black italic uppercase tracking-tighter leading-tight">
              After losing the Intramural 5K, I questioned everything.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8">
              <div className="h-[2px] w-24 bg-brand-orange/50" />
              <div className="text-brand-orange text-5xl md:text-7xl font-black italic tracking-tighter">5:33</div>
              <div className="h-[2px] w-24 bg-brand-orange/50" />
            </div>

            <p className="text-xl md:text-3xl text-brand-white/70 font-bold uppercase tracking-tight leading-snug max-w-2xl mx-auto">
              For the first time, I stopped thinking about winning. <br />
              <span className="text-brand-white">I realized I simply wanted to run.</span>
            </p>
            
            <p className="text-brand-orange text-sm md:text-lg font-black uppercase tracking-[0.3em] mt-12">
              That race changed everything.
            </p>
          </div>
        </motion.div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      </div>
    </section>
  );
};

export default RealizationMoment;
