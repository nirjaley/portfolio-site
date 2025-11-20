import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const ScrollSection = ({ children, id, className = '', theme = 'light' }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen w-full flex items-center justify-center ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      } ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isInView ? 1 : 0.8,
        y: isInView ? 0 : 5,
        scale: isInView ? 1 : 0.99,
      }}
      transition={{
        duration: 0.3,
        opacity: { duration: 0.25, ease: 'easeOut' },
        y: { duration: 0.25, ease: 'easeOut' },
        scale: { duration: 0.2, ease: 'easeOut' },
        backgroundColor: { duration: 0.2, ease: 'easeOut' },
        color: { duration: 0.2, ease: 'easeOut' }
      }}
      style={{
        transformOrigin: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20">
        {children}
      </div>
    </motion.section>
  );
};

export default ScrollSection;
