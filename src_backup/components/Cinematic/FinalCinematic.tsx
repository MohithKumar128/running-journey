import React from 'react';
import { motion } from 'framer-motion';

interface FinalCinematicProps {
  imagePath?: string;
}

const FinalCinematic: React.FC<FinalCinematicProps> = ({ imagePath }) => {
  const goals = [
    { city: "BENGALURU", race: "TCS WORLD 10K", year: "2027" },
    { city: "MUMBAI", race: "TATA MUMBAI MARATHON", year: "2027" },
    { city: "DELHI", race: "VEDANTA DELHI HALF MARATHON", year: "2028" },
    { city: "KOLKATA", race: "TCS WORLD 25K", year: "2028" },
  ];

  return (
    <section className="relative min-h-[150vh] bg-brand-black flex flex-col items-center justify-center py-60 overflow-hidden">
      {imagePath && (
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src={imagePath} alt="The Journey Continues" className="w-full h-full object-cover grayscale brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-brand-orange text-xl md:text-3xl font-black uppercase tracking-[0.8em] mb-16">
          What's Next?
        </h2>
        <h1 className="text-6xl md:text-[15rem] font-black text-brand-white tracking-tighter leading-[0.75] mb-32 uppercase">
          The Journey<br /><span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,87,34,0.4)]">Continues</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-40">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative bg-brand-white/[0.03] border border-brand-white/10 p-12 rounded-[2.5rem] hover:border-brand-orange/50 transition-all duration-700 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="text-brand-orange font-black text-lg mb-6">{goal.year}</div>
              <div className="text-brand-white font-black text-3xl mb-3 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{goal.city}</div>
              <div className="text-brand-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{goal.race}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block"
        >
          <div className="absolute -inset-10 bg-brand-orange/20 blur-[100px] rounded-full" />
          <div className="relative px-12 py-8 bg-brand-black border-4 border-brand-orange rounded-3xl">
            <h3 className="text-4xl md:text-7xl font-black text-brand-white uppercase tracking-tighter">
              Procam Slam Dream
            </h3>
            <p className="mt-4 text-brand-orange font-black uppercase tracking-[0.5em] text-sm">Target Locked • 2028</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[30rem] md:text-[60rem] font-black text-brand-white">INFINITE</h1>
      </div>
    </section>
  );
};

export default FinalCinematic;
