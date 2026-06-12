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
    <section ref={containerRef} className="relative h-[300vh] bg-black flex flex-col items-center justify-start">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        {imagePath && (
          <motion.div 
            style={{ opacity: imgOpacity, scale: scale }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={imagePath} 
              alt="Realization" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-brand-orange/10 mix-blend-color" />
          </motion.div>
        )}

        {/* Heartbeat Pulse Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1, 1.4, 1],
            opacity: [0.05, 0.2, 0.05, 0.2, 0.05]
          }}
          transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
          className="absolute inset-0 bg-brand-orange rounded-full blur-[200px] w-full h-full opacity-10"
        />

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 border border-brand-orange/30 rounded-full mb-12"
          >
            <h2 className="text-brand-orange text-sm md:text-lg font-black uppercase tracking-[0.5em]">
              The Moment of Clarity
            </h2>
          </motion.div>
          
          <motion.div style={{ scale: heartbeatScale }}>
            <h1 className="text-6xl md:text-[15rem] font-black text-brand-white tracking-[-0.05em] leading-[0.8] mb-12 text-shadow-glow uppercase">
              "THIS IS <br /> <span className="text-brand-orange italic">WHAT</span> <br /> I WANT."
            </h1>
          </motion.div>

          <p className="text-2xl md:text-5xl text-brand-white/40 font-black italic uppercase tracking-tighter max-w-4xl mx-auto">
            The 1.5 km race wasn't just a distance.<br /> It was where the runner was born.
          </p>
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
