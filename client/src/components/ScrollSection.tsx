import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const ScrollSection = ({ children, id, className = '' }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen w-full flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isInView ? 1 : 0.5,
        scale: isInView ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-20">
        {children}
      </div>
    </motion.section>
  );
};

export default ScrollSection;
