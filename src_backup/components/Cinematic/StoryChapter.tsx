import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

interface StoryChapterProps {
  title: string;
  content: string[];
  imagePath?: string;
  imageCaption?: string;
  reverse?: boolean;
  isHighImpact?: boolean;
  id?: string;
}

const StoryChapter: React.FC<StoryChapterProps> = ({ 
  title, 
  content, 
  imagePath, 
  imageCaption,
  reverse,
  isHighImpact,
  id
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id={id} className={cn(
      "min-h-[120vh] w-full flex flex-col justify-center py-48 px-6 md:px-20 overflow-hidden relative",
      isHighImpact ? "bg-brand-orange text-brand-black" : "bg-brand-black text-brand-white"
    )}>
      {/* Background Depth Elements */}
      {!isHighImpact && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: imageY, opacity: 0.1 }}
            className="absolute -right-20 top-0 text-[20rem] font-black text-brand-white/10 uppercase tracking-tighter select-none"
          >
            {title.split(' ')[0]}
          </motion.div>
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
        </div>
      )}

      <motion.div 
        style={{ opacity }}
        className={cn(
          "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-center relative z-10",
          reverse && "md:flex-row-reverse"
        )}
      >
        <motion.div 
          style={{ y: textY }}
          className={cn(reverse ? "md:order-2" : "md:order-1")}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={cn(
              "h-1 w-20 mb-12",
              isHighImpact ? "bg-brand-black" : "bg-brand-orange"
            )} />
            <h2 className="text-6xl md:text-[9rem] font-black mb-12 leading-[0.85] uppercase tracking-tighter">
              {title}
            </h2>
            <div className="space-y-10 text-xl md:text-2xl opacity-80 leading-relaxed font-medium">
              {content.map((paragraph, index) => (
                <p key={index} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {imagePath && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: reverse ? -10 : 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl perspective-1000",
              reverse ? "md:order-1" : "md:order-2",
              isHighImpact ? "shadow-black/40" : "shadow-brand-orange/10 border border-brand-white/5"
            )}
          >
            <motion.img 
              src={imagePath} 
              alt={title} 
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            {imageCaption && (
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-xs font-black tracking-[0.4em] uppercase opacity-60">{imageCaption}</p>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default StoryChapter;
