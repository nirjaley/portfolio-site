import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const ScrollSection = ({ children, id, className = '', theme = 'light' }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    // This enables smooth scrolling for the whole document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Revert to default scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen w-full flex items-center justify-center overflow-hidden ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0.8,
        y: isInView ? 0 : 10,
        scale: isInView ? 1 : 0.98,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.99],
        opacity: { duration: 0.5, ease: 'easeOut' },
        y: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
        scale: { duration: 0.4, ease: 'easeOut' },
        backgroundColor: { duration: 0.3, ease: 'easeOut' },
        color: { duration: 0.3, ease: 'easeOut' }
      }}
      style={{
        transformOrigin: 'center',
        willChange: 'transform, opacity',
      }}
    >
      <motion.div 
        className="container mx-auto px-4 py-20"
        style={{
          y: y,
          opacity: isInView ? 1 : 0.8,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default ScrollSection;
