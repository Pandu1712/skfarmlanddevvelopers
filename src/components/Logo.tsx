import { motion } from 'motion/react';
import logoImg from '../assets/logo.jpg';

interface LogoProps {
  className?: string;
  showText?: boolean;
  animate?: boolean;
}

export default function Logo({ className = 'w-16 h-16', showText = true, animate = false }: LogoProps) {
  // Check if this is the large version used in the Loader
  const isLarge = className.includes('w-60') || className.includes('h-60');
  
  // Define dimensions to maintain original logo aspect ratio (approx 3:2)
  const sizeClasses = isLarge 
    ? 'w-[270px] h-[180px] rounded-xl border-2' 
    : 'w-[54px] h-[36px] md:w-[75px] md:h-[50px] rounded-md border';

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      scale: 1.15,
      color: '#f97316', // tailwind orange-500
      transition: { type: 'spring', stiffness: 350, damping: 8 }
    }
  };

  return (
    <motion.div 
      id="sk-logo-wrapper" 
      className="flex items-center gap-3.5 select-none cursor-pointer"
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={containerVariants}
    >
      {/* Rectangular outer container matching original logo aspect ratio */}
      <motion.div
        id="sk-logo-image-container"
        className={`relative overflow-hidden border-amber-500/35 shadow-[0_0_15px_rgba(245,158,11,0.12)] bg-black shrink-0 ${sizeClasses}`}
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 2, scale: 1.05 }
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
      >
        <img
          src={logoImg}
          alt="SK Farmland Developers"
          className="w-full h-full object-cover"
        />
        {/* Shimmering glass light reflection overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0"
          variants={{
            initial: { x: '-100%', y: '-100%' },
            hover: { x: '100%', y: '100%' }
          }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        />
      </motion.div>

      {showText && (
        <motion.div
          id="sk-logo-text"
          className="flex flex-col select-none"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Main Logo Text with spring bounce letters on hover */}
          <span className="text-xs md:text-sm font-black tracking-[0.2em] text-white font-sans uppercase flex items-center">
            {/* S and K letters with distinct highlight */}
            <motion.span 
              className="text-amber-500 mr-0.5"
              variants={letterVariants}
            >
              S
            </motion.span>
            <motion.span 
              className="text-amber-500 mr-1.5"
              variants={letterVariants}
            >
              K
            </motion.span>
            
            {/* FARMLAND letters */}
            {"FARMLAND".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block origin-bottom"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </span>

          {/* Subtitle "DEVELOPERS" with smooth pulse effect */}
          <motion.span
            className="text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.45em] text-zinc-400 uppercase font-mono mt-0.5 inline-block"
            animate={{ 
              color: ['#a1a1aa', '#f59e0b', '#a1a1aa'],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: 'easeInOut' 
            }}
          >
            DEVELOPERS
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  );
}
