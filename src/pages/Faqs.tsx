import { motion } from 'motion/react';
import { PageId } from '../types';

interface Props {
  setActivePage?: (page: PageId) => void;
}

export default function Faqs({ setActivePage }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-black pt-24 px-4 text-center"
    >
      <h1 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h1>
      <p className="text-zinc-400">FAQs content is coming soon.</p>
    </motion.div>
  );
}
