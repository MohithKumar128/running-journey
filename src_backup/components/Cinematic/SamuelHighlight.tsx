import React from 'react';
import { motion } from 'framer-motion';

const SamuelHighlight: React.FC = () => {
  return (
    <section className="relative py-48 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brand-orange/20"
            >
              <img 
                src="/images/WhatsApp Image 2026-06-12 at 12.05.58.jpeg" 
                alt="Samuel and Mohith" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 to-transparent mix-blend-overlay" />
            </motion.div>
            
            {/* Quote Overlay */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:-right-20 bg-brand-orange p-10 rounded-[2rem] shadow-2xl z-20 max-w-sm"
            >
              <p className="text-brand-black font-black text-2xl italic leading-tight">
                "You are like me."
              </p>
              <p className="text-brand-black/60 font-bold uppercase tracking-widest text-xs mt-4">
                - Samuel
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <h2 className="text-6xl md:text-9xl font-black text-brand-white tracking-tighter leading-none">
              THE<br /><span className="text-brand-orange">MENTOR</span>
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-brand-white/80 font-medium leading-relaxed">
              <p>
                Until March 20, I had never crossed 10 km. Samuel didn't just invite me to a Half Marathon; 
                he invited me into a world of lessons and shared resilience.
              </p>
              <p className="text-brand-orange font-black italic">
                "We crossed the finish together."
              </p>
              <p>
                When Samuel suffered cramps in the final kilometers, it was my turn to help him. 
                That finish line was more than a distance—it was a bond.
              </p>
            </div>
            
            <div className="pt-10 flex gap-10 border-t border-brand-white/10">
              <div>
                <div className="text-4xl font-black text-brand-white">21.58</div>
                <div className="text-brand-white/40 text-[10px] font-black uppercase tracking-widest">Kilometers</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-white">2:06</div>
                <div className="text-brand-white/40 text-[10px] font-black uppercase tracking-widest">Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SamuelHighlight;
