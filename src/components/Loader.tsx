import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Stage 1: Showing logo symbol (0s - 1.2s)
    const t1 = setTimeout(() => setStep(1), 1000);
    // Stage 2: Spacing expansion and branding (1.2s - 2.6s)
    const t2 = setTimeout(() => setStep(2), 2200);
    // Finish loading (3.0s)
    const t3 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      id="loading-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Soft Ambient Gold Pulsing Glow behind Logo */}
        <motion.div
          id="loader-pulse-glow"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute w-64 h-64 rounded-full bg-orange-500/5 blur-3xl -translate-y-6"
        />

        {/* Elegant Logo with spring entry */}
        <motion.div
          id="loader-logo-container"
          initial={{ scale: 0.75, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Logo className="w-60 h-60" showText={false} />
        </motion.div>

        {/* Luxury Text Tracking Animation below logo */}
        <div className="mt-4 overflow-hidden text-center h-16">
          <motion.h1
            id="loader-brand-text"
            initial={{ y: 30, opacity: 0 }}
            animate={step >= 1 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-extrabold uppercase tracking-[0.35em] text-orange-500 md:text-lg font-sans"
          >
            SK FARMLAND
          </motion.h1>
          <motion.p
            id="loader-brand-subtitle"
            initial={{ opacity: 0 }}
            animate={step >= 2 ? { opacity: 0.7 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.55em] text-zinc-400 font-mono mt-1.5"
          >
            DEVELOPER'S
          </motion.p>
        </div>

        {/* Minimalist Progress Bar */}
        <div className="absolute bottom-[-60px] w-48 h-[1px] bg-zinc-900 overflow-hidden rounded-full">
          <motion.div
            id="loader-progress-bar"
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 2.6, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
