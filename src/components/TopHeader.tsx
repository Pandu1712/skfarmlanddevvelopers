import { motion } from 'motion/react';
import { X, Sparkles, MapPin, Compass } from 'lucide-react';

interface TopHeaderProps {
  onClose: () => void;
  onActionClick?: () => void;
}

export default function TopHeader({ onClose, onActionClick }: TopHeaderProps) {
  return (
    <motion.div
      id="top-announcement-header-wrapper"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full overflow-hidden shrink-0"
    >
      <div
        id="top-announcement-header"
        className="relative z-50 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black py-2.5 px-4 sm:px-6 lg:px-8 shadow-md select-none"
      >
        {/* Decorative ambient background line */}
        <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-black/10" />

        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Empty left spacer on desktop to balance the layout perfectly centering the message */}
          <div className="hidden md:block w-8" />

          {/* Center content */}
          <div className="flex-1 flex items-center justify-center gap-2 text-center">
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="inline-flex text-zinc-950 shrink-0"
            >
              <Sparkles size={13} className="fill-current" />
            </motion.span>

            {/* Desktop view text */}
            <span className="hidden md:inline-flex items-center gap-2.5 uppercase tracking-[0.12em] text-[11px] font-extrabold text-black">
              <span>350 Acres Premium Managed Farmland</span>
              <span className="opacity-45 text-black font-normal">•</span>
              <span>Near Anekal Thalli Road</span>
            </span>

            {/* Mobile view text */}
            <span className="md:hidden flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 uppercase tracking-[0.08em] text-[9.5px] font-extrabold text-black leading-tight">
              <span>350 Acres Premium Farmland</span>
              <span className="opacity-45 text-black font-normal">•</span>
              <span>Anekal Thalli Road</span>
            </span>
          </div>

          {/* Close Button right aligned */}
          <button
            id="close-top-header"
            onClick={onClose}
            aria-label="Dismiss announcement"
            className="p-1 rounded-full text-zinc-950 hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer active:scale-90"
          >
            <X size={15} className="stroke-[2.5]" />
          </button>

        </div>
      </div>
    </motion.div>
  );
}
