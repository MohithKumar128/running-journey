import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { Activity, TrendingUp } from 'lucide-react';
import type { Activity as ActivityType } from '../../data/types';

interface ProgressionChartsProps {
  monthlyData: Record<string, number>;
  activities: ActivityType[];
}

const ProgressionCharts: React.FC<ProgressionChartsProps> = ({ monthlyData, activities }) => {
  const chartData = useMemo(() => Object.entries(monthlyData).map(([month, distance]) => ({
    name: month,
    distance: parseFloat(distance.toFixed(2))
  })).sort((a, b) => a.name.localeCompare(b.name)), [monthlyData]);

  const cumulativeData = useMemo(() => {
    let total = 0;
    return activities.map((a, i) => {
      total += a.distance_m / 1000;
      return {
        index: i,
        cumulative: parseFloat(total.toFixed(2)),
        date: a.start_time.substring(0, 10),
        milestone: total >= 100 && total < 101 ? "100K" : 
                   total >= 200 && total < 201 ? "200K" :
                   total >= 300 && total < 301 ? "300K" :
                   total >= 400 && total < 401 ? "400K" :
                   total >= 500 && total < 501 ? "500K" : null
      };
    });
  }, [activities]);

  return (
    <div className="w-full max-w-7xl mx-auto py-48 px-6 space-y-64">
      {/* Strava Style Cumulative Graph */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-6 mb-20">
          <div className="p-4 bg-brand-orange rounded-2xl shadow-[0_0_30px_rgba(255,87,34,0.3)]">
            <TrendingUp className="text-brand-black" size={40} />
          </div>
          <div>
            <h3 className="text-5xl font-black uppercase tracking-tighter text-brand-white">The Path to 500</h3>
            <p className="text-brand-orange text-sm font-black uppercase tracking-[0.4em] mt-1">Cumulative Distance Progression</p>
          </div>
        </div>
        
        <div className="h-[600px] w-full bg-brand-white/[0.02] p-10 rounded-[3rem] border border-brand-white/10 shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cumulativeData}>
              <defs>
                <linearGradient id="colorCum" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF5722" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#FF5722" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis 
                dataKey="index" 
                hide 
              />
              <YAxis 
                stroke="#ffffff20" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                unit="km"
                domain={[0, 'auto']}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid #FF572240',
                  borderRadius: '24px',
                  color: '#F5F5F5',
                  padding: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
                labelStyle={{ display: 'none' }}
                itemStyle={{ color: '#FF5722', fontWeight: '900', fontSize: '24px' }}
                formatter={(value: any) => [`${value} KM`, 'Total']}
              />
              <Area 
                type="monotone" 
                dataKey="cumulative" 
                stroke="#FF5722" 
                strokeWidth={6}
                fillOpacity={1} 
                fill="url(#colorCum)" 
                animationDuration={4000}
              />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Milestone Markers */}
          <div className="absolute top-10 right-10 flex gap-4">
            {["100K", "200K", "300K", "400K", "500K"].map((m) => (
              <div key={m} className="px-4 py-1 border border-brand-orange/30 rounded-full text-[10px] font-black text-brand-orange uppercase tracking-widest">
                {m}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Monthly Distance Growth */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex items-center gap-6 mb-20">
          <div className="p-4 bg-brand-white/5 rounded-2xl border border-brand-white/10">
            <Activity className="text-brand-orange" size={40} />
          </div>
          <div>
            <h3 className="text-5xl font-black uppercase tracking-tighter text-brand-white">Monthly Intensity</h3>
            <p className="text-brand-white/40 text-sm font-black uppercase tracking-[0.4em] mt-1">Kilometers Per Month</p>
          </div>
        </div>
        
        <div className="h-[450px] w-full bg-brand-white/[0.02] p-10 rounded-[3rem] border border-brand-white/10 shadow-3xl relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#ffffff40" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                dy={20}
                fontFamily="black"
              />
              <YAxis 
                stroke="#ffffff40" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                unit="km"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid #FF572240',
                  borderRadius: '24px',
                }}
              />
              <Line 
                type="stepAfter" 
                dataKey="distance" 
                stroke="#FF5722" 
                strokeWidth={5} 
                dot={{ fill: '#FF5722', strokeWidth: 0, r: 8 }}
                activeDot={{ r: 12, strokeWidth: 0, fill: '#FF5722' }}
                animationDuration={3000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressionCharts;
