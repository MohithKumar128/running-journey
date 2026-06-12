import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AchievementChapterProps {
  imagePath?: string;
  tcsImages?: string[];
}

const AchievementChapter: React.FC<AchievementChapterProps> = ({ imagePath, tcsImages }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-brand-black py-40 overflow-hidden">
      {/* 500KM Breakthrough */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {imagePath && (
          <motion.div 
            style={{ opacity: 0.2, scale: 1.2, y }}
            className="absolute inset-0 z-0"
          >
            <img src={imagePath} alt="Breakthrough" className="w-full h-full object-cover grayscale" />
          </motion.div>
        )}
        
        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[400px] h-[400px] md:w-[800px] md:h-[800px] border-2 border-brand-orange/10 rounded-full border-dashed pointer-events-none"
          />
          
          <h3 className="text-brand-orange text-xl md:text-3xl font-black uppercase tracking-[0.6em] mb-12">
            The 500 KM Breakthrough
          </h3>
          <h1 className="text-7xl md:text-[15rem] font-black text-brand-white tracking-tighter leading-none mb-12 uppercase italic">
            Legacy<br /><span className="text-brand-orange not-italic">Unlocked</span>
          </h1>
          <p className="max-w-3xl mx-auto text-2xl md:text-4xl text-brand-white/60 font-black italic uppercase tracking-tight">
            Crossing 500 km was the proof that discipline has no weather. 
            The summer heat of Andhra Pradesh was just another obstacle.
          </p>
        </motion.div>
      </div>

      {/* TCS Medals Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-40 grid grid-cols-1 md:grid-cols-2 gap-20">
        {tcsImages && tcsImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 1 }}
            className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-brand-white/10 shadow-2xl"
          >
            <img 
              src={img} 
              alt={`TCS Achievement ${i}`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
              <div className="h-1 w-12 bg-brand-orange mb-4" />
              <p className="text-brand-white text-2xl font-black uppercase tracking-widest">
                {i === 0 ? "TCS World 10K Medal" : "The Practice Run"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementChapter;
