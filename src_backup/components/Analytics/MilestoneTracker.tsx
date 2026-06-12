import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Target, Award } from 'lucide-react';

interface MilestoneTrackerProps {
  totalDistance: number;
}

const milestones = [
  { km: 100, label: "The Beginning", icon: Award },
  { km: 200, label: "Momentum", icon: Flame },
  { km: 300, label: "Discipline", icon: Target },
  { km: 400, label: "Persistence", icon: Trophy },
  { km: 500, label: "Legacy", icon: Award },
];

const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({ totalDistance }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="relative pt-32 mb-64">
        {/* Progress Line Background */}
        <div className="absolute top-[172px] left-0 w-full h-1 bg-brand-white/5 rounded-full" />
        
        {/* Glowing Progress Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min((totalDistance / 500) * 100, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[172px] left-0 h-1 bg-brand-orange rounded-full shadow-[0_0_30px_rgba(255,87,34,0.8)] z-10"
        >
          <div className="absolute top-0 right-0 w-4 h-4 bg-brand-orange rounded-full -translate-y-[6px] shadow-[0_0_20px_#FF5722]" />
        </motion.div>

        {/* Milestone Nodes */}
        <div className="relative flex justify-between">
          {milestones.map((m, idx) => {
            const isReached = totalDistance >= m.km;
            const Icon = m.icon;
            return (
              <div key={idx} className="flex flex-col items-center group">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
                  className={`relative w-24 h-24 rounded-3xl border-2 flex items-center justify-center mb-10 z-20 transition-all duration-1000 rotate-45 group-hover:rotate-[225deg] ${
                    isReached 
                      ? "bg-brand-orange border-brand-orange shadow-[0_0_50px_rgba(255,87,34,0.4)]" 
                      : "bg-brand-black border-brand-white/10"
                  }`}
                >
                  <div className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-1000">
                    <Icon size={36} className={isReached ? "text-brand-black" : "text-brand-white/20"} />
                  </div>
                  
                  {isReached && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border-2 border-brand-orange rounded-3xl"
                    />
                  )}
                </motion.div>

                <div className="text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    className={`text-4xl font-black mb-2 tracking-tighter ${isReached ? "text-brand-white" : "text-brand-white/10"}`}
                  >
                    {m.km}
                    <span className="text-sm ml-1 text-brand-orange">KM</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.5 }}
                    className={`text-[10px] font-black uppercase tracking-[0.5em] px-4 py-1 rounded-full border ${isReached ? "text-brand-orange border-brand-orange/30" : "text-brand-white/5 border-transparent"}`}
                  >
                    {m.label}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Extended Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: Flame, value: "94", label: "Activities", sub: "Total Effort" },
          { icon: Target, value: "50.07", label: "Hours", sub: "Total Duration" },
          { icon: Trophy, value: "21.58", label: "KM", sub: "Longest Run" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="group relative bg-brand-white/[0.02] p-12 rounded-[3rem] border border-brand-white/10 hover:border-brand-orange/50 transition-all duration-700 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="text-brand-orange" size={32} />
              </div>
              <div className="text-6xl font-black text-brand-white mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-brand-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label} • {stat.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTracker;
