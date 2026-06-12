import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Cinematic/Hero';
import StoryChapter from './components/Cinematic/StoryChapter';
import RealizationMoment from './components/Cinematic/RealizationMoment';
import MilestoneTracker from './components/Analytics/MilestoneTracker';
import ProgressionCharts from './components/Analytics/ProgressionCharts';
import SamuelHighlight from './components/Cinematic/SamuelHighlight';
import RaceHighlight from './components/Cinematic/RaceHighlight';
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
            "Started running in November. No goal. No race. No dream.",
            "Just wanted to run. It was a simple urge that grew into something much larger.",
            "Srivatsav introduced me to the running world, turning a solitary jog into a disciplined pursuit."
          ]}
          imagePath="/images/shoes and legs sunny in andhrapradesh.jpeg"
          imageCaption="The Beginning • November"
          aspectRatio="landscape"
        />

        {/* Chapter 2: Discipline */}
        <StoryChapter 
          title="Discipline"
          reverse
          content={[
            "December became the breakthrough month. 125 km in a month. Training alone, building consistency, learning discipline.",
            "Every sunrise was an appointment with myself that I refused to miss.",
            "I learned that inspiration gets you started, but only discipline keeps you moving."
          ]}
          imagePath="/images/body in sunny environment.jpeg"
          imageCaption="The Grind • 125 KM Month"
          aspectRatio="portrait"
        />

        {/* Chapter 3: The Wall */}
        <StoryChapter 
          title="The Wall"
          content={[
            "Failure has a way of stripping you down. Lost the Intramural 5K. Felt disappointed.",
            "Questioned my ability. Thought maybe running wasn't for me. But the defeat wasn't the end—it was the filter.",
            "The disappointment stayed, but so did I."
          ]}
          isHighImpact
        />

        {/* Chapter 4: The Moment of Clarity */}
        <RaceHighlight 
          title="THIS IS WHAT I WANT"
          content={[
            "After losing the Intramural 5K, I showed up again. The 1.5K race wasn't about winning.",
            "I finished in 5:33. For the first time, I realized I wasn't chasing medals.",
            "I simply wanted to run. This race created the runner."
          ]}
          imagePath="/images/1.5k race with gaurav.jpeg"
          imageCaption="1.5K Race • 5:33 Finish"
        />

        {/* Chapter 5: Community */}
        <StoryChapter 
          title="Community"
          content={[
            "Running stopped being a solo activity. 5K race with Naman Bhai changed everything.",
            "We pushed each other. Shared suffering. Shared improvement. Shared goals.",
            "The journey became bigger than me."
          ]}
          imagePath="/images/5k race with naman bhai.jpeg"
          imageCaption="Shared Suffering • Shared Goals"
          aspectRatio="portrait"
        />

        {/* Chapter 6: The Procam Dream */}
        <StoryChapter 
          title="The Procam Dream"
          reverse
          content={[
            "I discovered Procam through Instagram reels. I watched runners complete the TCS World 10K, Tata Mumbai Marathon, and more.",
            "Every reel made me want to stand on those start lines. Then I realized something: I had already missed TCS World 10K Bengaluru 2026.",
            "The moment I discovered Procam, my chance to complete the 2026 Procam Slam was already gone. That regret stayed with me."
          ]}
          imagePath="/images/me with bib no and medal.jpeg"
          imageCaption="The Realization of a Dream"
          aspectRatio="portrait"
        />

        {/* Chapter 7: TCS World 10K */}
        <StoryChapter 
          title="TCS World 10K"
          content={[
            "I registered for the TCS World 10K Bengaluru Virtual Run. Registration fee: ₹500. I showed up.",
            "Ran the event. Finished in 53 Minutes. Personal Best 10K.",
            "The medal wasn't just metal. It was proof. Proof that the dream had officially started."
          ]}
          isHighImpact
        />

        {/* Achievement Gallery */}
        <AchievementChapter 
          featuredImage="/images/selfie of tcs 10k completed with timing.jpeg"
          secondaryImages={[
            "/images/me with bib no and medal.jpeg",
            "/images/tcs 10k medal photo.jpeg",
            "/images/tcs 10 bengulur virutal practice run.jpeg"
          ]}
        />

        {/* Zoya Ahmed Section */}
        <StoryChapter 
          title="Connected"
          reverse
          content={[
            "I commented on a reel by Zoya Ahmed. The comment received 262+ likes.",
            "It was a small moment, but it made me feel connected to runners across India.",
            "I was no longer watching from outside. I was becoming part of the community."
          ]}
          imagePath="/images/all time best running timings.jpeg"
          imageCaption="Part of the Community"
          aspectRatio="landscape"
        />

        {/* 500 KM Breakthrough */}
        <section className="bg-brand-black py-24 md:py-32 border-y border-brand-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-[clamp(4rem,7vw,8rem)] font-black text-brand-white uppercase mb-12 tracking-tighter text-center">
              500 KM<br /><span className="text-brand-orange">LEGACY UNLOCKED</span>
            </h2>
            <div className="w-full max-w-4xl aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-brand-orange/10 border border-brand-white/5 mb-12">
              <img 
                src="/images/curved mirror photo.jpeg" 
                alt="500 KM Breakthrough" 
                className="w-full h-full object-contain object-center grayscale hover:grayscale-0 transition-all duration-1000 p-4"
              />
            </div>
            <p className="max-w-2xl text-center text-brand-white/70 text-lg md:text-xl font-medium leading-relaxed">
              June changed everything. Crossing 500 kilometres wasn't a distance milestone. 
              It was proof of consistency. Proof that discipline survives heat, fatigue and excuses.
            </p>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="bg-brand-black py-24 md:py-32 border-b border-brand-white/5 relative overflow-hidden">
          <div className="text-center mb-16 md:mb-24 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-brand-white uppercase mb-4 relative">The Numbers</h2>
            <p className="text-brand-orange text-lg md:text-2xl font-black uppercase tracking-[0.5em]">Proof of the Grind</p>
          </div>
          <MilestoneTracker 
            totalDistance={stats.totalDistance}
            personalBests={{
              "1.5K": "5:33",
              "5K": "22:45",
              "10K": "53:00",
              "15K": "1:28:00",
              "20K": "2:00:00",
              "Half Marathon": "2:06:00"
            }}
          />
        </section>

        {/* Final Chapter: The Dream */}
        <FinalCinematic imagePath="/images/back photo of mohhith solid photo.jpeg" />

        {/* Footer */}
        <footer className="relative py-24 md:py-32 text-center bg-black border-t border-brand-white/5 overflow-hidden">
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
