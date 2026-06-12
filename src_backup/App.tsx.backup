import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Cinematic/Hero';
import StoryChapter from './components/Cinematic/StoryChapter';
import RealizationMoment from './components/Cinematic/RealizationMoment';
import MilestoneTracker from './components/Analytics/MilestoneTracker';
import ProgressionCharts from './components/Analytics/ProgressionCharts';
import SamuelHighlight from './components/Cinematic/SamuelHighlight';
import AchievementChapter from './components/Cinematic/AchievementChapter';
import FinalCinematic from './components/Cinematic/FinalCinematic';
import LoadingScreen from './components/Cinematic/LoadingScreen';
import BackgroundGlow from './components/Cinematic/BackgroundGlow';
import { getStats } from './data/statsProvider';

function App() {
  const stats = useMemo(() => getStats(), []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <BackgroundGlow />
      <main className="bg-brand-black w-full overflow-x-hidden selection:bg-brand-orange selection:text-brand-black relative z-10">
        {/* Hero Section */}
        <Hero 
          totalDistance={stats.totalDistance} 
          totalTime={stats.totalTime}
          avgPace={stats.avgPace}
        />

        {/* Chapter 1: The Spark */}
        <StoryChapter 
          title="The Spark"
          content={[
            "I started running in November. I had no goal, no race, no dream, and no plan. I simply wanted to run.",
            "Meeting Srivatsav changed everything. A simple question—'Can I join?'—became the catalyst for a transformation I didn't see coming.",
            "My first 5K led to my first 10K. The path was set."
          ]}
          imagePath="/images/shoes and legs sunny in andhrapradesh.jpeg"
          imageCaption="The First Run • November 2025"
        />

        {/* Chapter 2: Momentum & Charts */}
        <ProgressionCharts 
          monthlyData={stats.monthlyDistance} 
          activities={stats.activities}
        />
        
        <StoryChapter 
          title="Building Discipline"
          reverse
          content={[
            "December was the surge. 125 kilometers in 31 days. Momentum wasn't just about speed; it was about showing up.",
            "When Srivatsav left, the journey didn't stop. I learned that the inspiration might come from others, but the sweat must be mine.",
            "Training consistently through January and February, I was preparing for something more than just a race."
          ]}
          imagePath="/images/body in sunny environment.jpeg"
          imageCaption="Consistency in the Heat"
        />

        {/* Chapter 3: The Wall & Realization */}
        <StoryChapter 
          title="The Wall"
          content={[
            "Failure is a powerful teacher. Losing the Intramural 5K was the weight that grounded me.",
            "I questioned everything—my pace, my breath, my will. But I didn't stop. I showed up for the 1.5 km race soon after.",
            "What happened next wasn't just a sprint. It was a rebirth."
          ]}
          isHighImpact
        />

        <RealizationMoment imagePath="/images/1.5k race with gaurav.jpeg" />

        {/* Chapter 4: The Mentor & Half Marathon */}
        <SamuelHighlight />

        {/* Community / Friendship Section */}
        <StoryChapter 
          title="Friendship"
          reverse
          content={[
            "The 5K race with Naman Bhai was more than just a distance. It was about the community that forms when you share the same grit.",
            "We pushed each other through every kilometer, proving that while running is solitary, the journey is better shared.",
            "This was the moment I realized I wasn't running alone anymore."
          ]}
          imagePath="/images/5k race with naman bhai.jpeg"
          imageCaption="5K with Naman Bhai"
        />

        {/* Analytics Section */}
        <section className="bg-brand-black py-40 border-y border-brand-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/all time best running timings.jpeg')] bg-cover bg-center opacity-5 grayscale" />
          <div className="text-center mb-32 relative z-10">
            <h2 className="text-7xl md:text-[15rem] font-black text-brand-white uppercase mb-4 tracking-tighter opacity-5 absolute inset-0 flex items-center justify-center pointer-events-none">DATA</h2>
            <h2 className="text-5xl md:text-8xl font-black text-brand-white uppercase mb-4 relative">The Numbers</h2>
            <p className="text-brand-orange text-2xl font-black uppercase tracking-[0.5em]">Proof of the Grind</p>
          </div>
          <MilestoneTracker totalDistance={stats.totalDistance} />
        </section>

        {/* Chapter 5: Connected & TCS */}
        <StoryChapter 
          title="Connected"
          content={[
            "Running is solitary, but the journey is shared. Completing the TCS World 10K Bengaluru Virtual Run brought a physical proof of the effort.",
            "A comment on Zoya Ahmed's reel, 260+ likes—it was a small digital handshake with a community that breathes the same fire.",
            "I wasn't just a runner in Andhra Pradesh; I was part of a movement."
          ]}
          imagePath="/images/me with bib no and medal.jpeg"
          imageCaption="Proof of Achievement"
        />

        <AchievementChapter 
          imagePath="/images/curved mirror photo.jpeg"
          tcsImages={["/images/tcs 10k medal photo.jpeg", "/images/tcs 10 bengulur virutal practice run.jpeg"]}
        />

        {/* Final Chapter: The Dream */}
        <FinalCinematic imagePath="/images/back photo of mohhith solid photo.jpeg" />

        {/* Footer */}
        <footer className="relative py-48 text-center bg-black border-t border-brand-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full -translate-y-1/2" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-white/20 text-xs font-black uppercase tracking-[1.5em] mb-12 italic"
            >
              The Path is Infinite
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="text-brand-orange font-black text-6xl md:text-8xl tracking-tighter mb-2 uppercase italic">
                MOHITH
              </div>
              <div className="h-1 w-24 bg-brand-orange mx-auto" />
            </motion.div>
            
            <div className="flex justify-center gap-8 mb-16">
              {['Instagram', 'Strava', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="text-brand-white/40 hover:text-brand-orange font-black uppercase tracking-widest text-[10px] transition-colors">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="text-brand-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
              © 2026 • The Running Journey • Built for Transformation
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
