import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Timer, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  totalDistance: number;
  totalTime: number;
  avgPace: number;
}

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  label: string;
  icon: React.ElementType;
}

const AnimatedCounter = ({ value, duration = 2000, decimals = 2, label, icon: Icon }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-brand-orange mb-2"><Icon size={24} /></div>
      <div className="text-2xl md:text-4xl font-black text-brand-white">
        {count.toFixed(decimals)}
      </div>
      <div className="text-[10px] font-bold text-brand-white/40 uppercase tracking-widest">{label}</div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ totalDistance, totalTime, avgPace }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1.3]);
  

  return (
    <motion.section 
      style={{ opacity, y }}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-black"
    >
      <motion.div 
        style={{ 
          backgroundImage: `url('${import.meta.env.BASE_URL}images/main photo starting page.jpeg')`,
          scale,
          filter: "grayscale(100%) contrast(1.2)"
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-transparent to-brand-black" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
            className="h-1 bg-brand-orange w-24 mx-auto mb-8"
          />
          <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter text-brand-white mb-4 leading-[0.8] uppercase">
            Running<br />
            <span className="text-brand-orange italic drop-shadow-[0_0_30px_rgba(255,87,34,0.3)]">Journey</span>
          </h1>
          <p className="text-brand-white/40 text-sm md:text-xl font-black tracking-[0.8em] uppercase mb-20 ml-[0.8em]">
            Andhra Pradesh • Transformation • 2026
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 border-y border-brand-white/5 py-16 px-8 relative"
        >
          <div className="absolute inset-0 bg-brand-white/[0.02] -z-10" />
          <AnimatedCounter value={totalDistance} label="Total KM" icon={TrendingUp} />
          <AnimatedCounter value={94} decimals={0} label="Activities" icon={Zap} />
          <AnimatedCounter value={totalTime} label="Total Hours" icon={Timer} />
          <AnimatedCounter value={avgPace} label="Avg Pace" icon={TrendingUp} />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-white/20">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-brand-orange"
        >
          <ChevronDown size={32} strokeWidth={3} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
